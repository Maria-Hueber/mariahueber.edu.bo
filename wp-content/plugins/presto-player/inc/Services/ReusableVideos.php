<?php

namespace PrestoPlayer\Services;

use PrestoPlayer\Services\Scripts;


class ReusableVideos
{
    /**
     * Register shortcode
     *
     * @return void
     */
    public function register()
    {
        add_action('admin_notices', [$this, 'notice']);
        add_action('admin_init', [$this, 'dismissNotice']);
    }

    public function notice()
    {
        global $typenow, $current_screen;

        if (!($typenow === 'pp_video_block' && $current_screen->base === 'edit')) {
            return;
        }

        $notice_name = 'presto_player_reusable_notice';
        if (AdminNotices::isDismissed($notice_name)) {
            return;
        }
?>
        <div class="notice" style="border-left-color: #7c3aed;">
            <p><strong><?php _e('What is the media hub?', 'presto-player'); ?></strong></p>
            <p><?php _e('The media hub is a more flexible way to add media to your site. It allows you to save audio and videos which you can later use in any post or page on your site - either through the Block Editor, a page builder, or by using a shortcode or php function.', 'presto-player'); ?></p>
            <p><a href="<?php echo esc_url(add_query_arg(array('presto_action' => 'dismiss_notices', 'presto_notice' => $notice_name))); ?>"><?php _e('Dismiss Notice', 'presto-player'); ?></a></p>
        </div>
<?php
    }

    public function dismissNotice()
    {
        // permissions check
        if (!current_user_can('update_options')) {
            return;
        }

        // not our notices, bail
        if (!isset($_GET['presto_action']) || 'dismiss_notice' !== $_GET['presto_action']) {
            return;
        }

        $notice = !empty($_GET['presto_notice']) ? sanitize_text_field($_GET['presto_notice']) : '';

        if (!$notice) {
            return;
        }

        // notice is dismissed
        update_option("presto_player_dismissed_notice_" . sanitize_text_field($notice), 1);
    }

    /**
     * Get reusable video block function.
     * 
     * @param mixed $id The ID of the reusable block.
     * @return $content The content of the block.
     */
    public static function get($id)
    {
        $content_post = get_post($id);
        $content = $content_post->post_content;
        return $content;
    }

    public static function getBlock($id)
    {
        $blocks = parse_blocks(self::get($id));
        $out = '';
        foreach ($blocks as $block) {
            $out .= render_block($block);
        }
        return $out;
    }

    /**
     * Display block function.
     * 
     * @param mixed $id The ID of the reusable block.
     */
    public static function display($id)
    {
        echo self::getBlock($id);
    }
}
