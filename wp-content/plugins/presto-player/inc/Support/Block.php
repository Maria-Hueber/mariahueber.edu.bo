<?php

namespace PrestoPlayer\Support;


use PrestoPlayer\Plugin;
use PrestoPlayer\Models\Player;
use PrestoPlayer\Models\Preset;
use PrestoPlayer\Models\Setting;
use PrestoPlayer\WPackio\Enqueue;
use PrestoPlayer\Integrations\LearnDash\LearnDash;

class Block
{
    protected $enqueue;
    protected $assets;
    protected $video_assets;
    protected $name = '';
    protected $template_name = 'video';
    public $services;

    /**
     * Attributes
     *
     * @var array
     */
    protected $attributes = [
        'color' => [
            'type'    => 'string',
            'default' => '#00b3ff',
        ],
        'blockAlignment' => [
            'type' => 'string',
        ],
        'autoplay' => [
            'type' => 'boolean'
        ],
        'id' => [
            'type' => 'number',
        ],
        'src' => [
            'type' => 'string'
        ],
        'imageID' => [
            'type' => 'number',
        ],
        'poster' => [
            'type' => 'string',
        ],
        'content' => [
            'type' => 'boolean',
        ],
        'pip' => [
            'type' => 'boolean',
            'default' => true
        ],
        'fullscreen' => [
            'type' => 'boolean',
            'default' => true
        ],
        'hideControls' => [
            'type' => 'boolean',
            'default' => true
        ],
        'playLarge' => [
            'type' => 'boolean',
            'default' => true
        ],
        'chapters' => [
            'type' => 'array',
            'default' =>  []
        ],
        'speed' => [
            'type' => 'boolean',
            'default' => true
        ],
    ];

    /**
     * Attributes to pass to web component
     */
    protected $component_attributes = [
        'preset',
        'chapters',
        'tracks',
        'branding',
        'blockAttributes',
        'config',
        'skin',
        'analytics',
        'automations',
        'provider',
        'video_id',
        'provider_video_id',
        'youtube'
    ];


    public function __construct(bool $isPremium = false, $version = 1)
    {
        $this->enqueue = new Enqueue(
            'prestoPlayer',
            'dist',
            Plugin::version(),
            'plugin',
            PRESTO_PLAYER_PLUGIN_FILE
        );

        do_action('presto_player_before_block_output', [$this, 'middleware']);
    }

    /**
     * Register the block type
     *
     * @return void
     */
    public function register()
    {
        $this->registerBlockType();
    }

    public function additionalAttributes()
    {
        return [];
    }

    /**
     * Register dynamic block type
     *
     * @return void
     */
    public function registerBlockType()
    {
        register_block_type(
            "presto-player/$this->name",
            [
                'attributes' => wp_parse_args($this->additionalAttributes(), $this->attributes),
                'render_callback' => [$this, 'html'],
            ]
        );
    }

    /**
     * Middleware to run before outputting template
     * Should the block load?
     *
     * @param array $attributes
     * @param string $content
     * @return boolean
     */
    public function middleware($attributes, $content)
    {
        if (LearnDash::isEnabled()) {
            if (!LearnDash::shouldVideoLoad()) {
                return false;
            }
        }

        return true;
    }

    /**
     * Sanitize attributes function
     * Let's a parent class sanitize attributes before displaying
     *
     * @param array $attributes
     * @param array $default_config
     * @return array
     */
    public function sanitizeAttributes($attributes, $default_config)
    {
        return [];
    }

    /**
     * Allow overriding attributes
     *
     * @param array $attributes
     * @return array
     */
    public function overrideAttributes($attributes)
    {
        return apply_filters("presto_video_block_attributes_override", $attributes, $this);
    }

    /**
     * Must sanitize attributes
     *
     * @param array $attributes
     * @return array
     */
    private function _sanitizeAttibutes($attributes)
    {
        // attribute overrides
        $attributes = $this->overrideAttributes($attributes);

        // video id
        $id = !empty($attributes['id']) ? $attributes['id'] : 0;
        $attributes['title'] = !empty($id) ? get_the_title($id) : __('Untitled Video', 'presto-player');

        $preset = $this->getPreset(!empty($attributes['preset']) ? $attributes['preset'] : 0);
        $branding = $this->getBranding($preset);
        $class = $this->getClasses($attributes);
        $playerClass = $this->getPlayerClasses($id, $preset);
        $styles = $this->getPlayerStyles($preset, $branding);
        $css = $this->getCSS($id);

        // Default config
        $default_config = apply_filters('presto_player/block/default_attributes', [
            'type' => $this->name,
            'css' => wp_kses_post($css),
            'class' => $class,
            'styles' => $styles,
            'skin' => $preset->skin,
            'playerClass' => $playerClass,
            'id'    => $id,
            'src'    => !empty($attributes['src']) ? $attributes['src'] : '',
            'autoplay' => !empty($attributes['autoplay']),
            'playsInline' => !empty($attributes['playsInline']),
            'poster' => !empty($attributes['poster']) ? $attributes['poster'] : '',
            'branding' => $branding,
            'youtube' => [
                'noCookie' => (bool) Setting::get('youtube', 'nocookie'),
                'channelId' => sanitize_text_field(Setting::get('youtube', 'channel_id')),
                'show_count' => !empty($preset->action_bar['show_count'])
            ],
            'preload' => !empty($attributes['preload']) ? $attributes['preload'] : '',
            'tracks' => !empty($attributes['tracks']) ? (array) $attributes['tracks'] : [],
            'preset' => $preset->toArray(),
            'chapters' => !empty($attributes['chapters']) ? $attributes['chapters'] : [],
            'blockAttributes' => $attributes,
            'provider' => $this->name,
            'analytics' => Setting::get('analytics', 'enable', false),
            'automations' => Setting::get('performance', 'automations', true),
        ], $attributes);

        return wp_parse_args(
            $this->sanitizeAttributes($attributes, $default_config),
            $default_config
        );
    }

    /**
     * Get CSS from settings 
     * Validates before output
     *
     * @param integer $id
     * @return string
     */
    public function getCSS($id)
    {
        return apply_filters(
            'presto_player/player/css',
            Utility::sanitizeCSS(
                Setting::get('branding', 'player_css'),
                $id
            )
        );
    }

    /**
     * Gets the preset
     *
     * @param integer $id Preset ID
     * @return \PrestoPlayer\Models\Preset
     */
    public function getPreset($id)
    {
        $preset = new Preset(!empty($id) ? $id : 0);
        $preset_id = $preset->id;

        if (empty($preset_id)) {
            $preset = $preset->findWhere(['slug' => 'default']);
        }

        return $preset;
    }

    /**
     * Get player branding
     *
     * @param \PrestoPlayer\Models\Preset $preset
     * @return array
     */
    public function getBranding($preset)
    {
        $branding = Player::getBranding();

        // sanitize with sensible defaults
        $branding['color'] = !empty($branding['color']) ? sanitize_hex_color($branding['color']) : 'rgba(43,51,63,.7)';
        $branding['logo_width'] = !empty($branding['logo_width']) ? $branding['logo_width'] : 150;
        $branding['logo'] = !empty($branding['logo'] && !$preset->hide_logo) ? $branding['logo'] : '';

        return $branding;
    }

    /**
     * Get block classes
     *
     * @param array $attributes
     * @return string
     */
    public function getClasses($attributes)
    {
        $block_alignment = isset($attributes['align']) ? sanitize_text_field($attributes['align']) : '';
        return !empty($block_alignment) ? 'align' . $block_alignment : '';
    }

    /**
     * Get player classes
     *
     * @param integer $id
     * @param \PrestoPlayer\Models\Preset $preset
     * @return string
     */
    public function getPlayerClasses($id, $preset)
    {
        $skin = $preset->skin;
        $playerClass = 'presto-video-id-' . (int) $id;
        $playerClass .= ' presto-preset-id-' . (int) $preset->id;

        if (!empty($skin)) {
            $playerClass .= ' skin-' . sanitize_text_field($skin);
        }

        $caption_style = $preset->caption_style;
        if (!empty($caption_style)) {
            $playerClass .= ' caption-style-' . sanitize_html_class($caption_style);
        }

        if (!empty($attributes['className'])) {
            $playerClass .= ' ' . (string) $attributes['className'];
        }

        return $playerClass;
    }

    /**
     * Get player styles
     *
     * @param \PrestoPlayer\Models\Preset $preset
     * @param array $branding
     * @return string
     */
    public function getPlayerStyles($preset, $branding)
    {
        $styles = '--plyr-color-main: ' . sanitize_hex_color($branding['color']) . '; ';
        if ($preset->caption_background) {
            $styles .= '--plyr-captions-background: ' . sanitize_hex_color($preset->caption_background) . '; ';
        }
        if ($preset->border_radius) {
            $styles .= '--presto-player-border-radius: ' . (int) $preset->border_radius . 'px; ';
        }

        if ($branding['logo_width']) {
            $styles .= '--presto-player-logo-width: ' . (int) $branding['logo_width'] . 'px; ';
        }
        if (!empty($preset->email_collection['border_radius'])) {
            $styles .= '--presto-player-email-border-radius: ' . (int) $preset->email_collection['border_radius'] . 'px; ';
        }
        return $styles;
    }

    /**
     * Get block attributes
     *
     * @param array $attributes
     * @return array
     */
    public function getAttributes($attributes)
    {
        return $this->_sanitizeAttibutes($attributes);
    }

    /**
     * Dynamic block output
     *
     * @param array $attributes
     * @param string $content
     * @return void
     */
    public function html($attributes, $content)
    {
        global $presto_player_instance;
        if ($presto_player_instance === null) {
            $presto_player_instance = 0;
        }
        $presto_player_instance++;

        // html middleware
        $load = $this->middleware($attributes, $content);

        // let integrations filter loading capabilities
        if (!apply_filters('presto_player_load_video', $load, $attributes, $content, $this->name)) {
            // allow a custom fallback
            if ($fallback = apply_filters('presto_player_load_video_fallback', false, $attributes, $content, $this)) {
                return wp_kses_post($fallback);
            }
            return false;
        }

        // get template data
        $data = apply_filters('presto_player_block_data', $this->getAttributes($attributes), $this);

        // need and id and src
        if (empty($data['id']) && empty($data['src'])) {
            return false;
        }

        // TODO: child template system
        ob_start();

        if (!empty($data['id'])) {
            echo "<!--presto-player:video_id=" . (int) $data['id'] . "-->";
        }

        if (file_exists(PRESTO_PLAYER_PLUGIN_DIR . "templates/{$this->template_name}.php")) {
            include PRESTO_PLAYER_PLUGIN_DIR . "templates/{$this->template_name}.php";
        }

        $this->initComponentScript($data['id'], $data, $presto_player_instance);
        $this->iframeFallback($data);

        $template = ob_get_contents();
        ob_end_clean();

        return $template;
    }

    /**
     * Dynamically initialize component via script tag
     * We have to do this because we cannot send arrays or object in plain html
     */
    public function initComponentScript($id = 0, $data = [], $instance = 1)
    {
        if (!$id) {
            return;
        }
?>
        <script>
            var player = document.querySelector('presto-player#presto-player-<?php echo (int) $instance; ?>');
            player.video_id = <?php echo (int) $id; ?>;
            <?php
            $attributes = apply_filters('presto_player/component/attributes', $this->component_attributes, $data);
            foreach ($attributes as $attribute) { ?>
                <?php if (isset($data[$attribute])) { ?>
                    player.<?php echo sanitize_text_field($attribute); ?> = <?php echo wp_json_encode($data[$attribute]); ?>;
                <?php } ?>
            <?php } ?>
        </script>
<?php
    }

    /**
     * Adds an iframe fallback script to the page in case js loading fails
     *
     * @return void
     */
    public function iframeFallback($data)
    {
        // must be vimeo or youtube
        if (in_array($data['provider'], ['youtube', 'vimeo'])) {
            add_filter('presto_player/scripts/load_iframe_fallback', '__return_true');
        }
    }
}
