<?php

/** Block direct access */
defined( 'ABSPATH' ) || exit();

/** check if class `WP_Dark_Mode_Hooks_Pro` not exists yet */
if ( ! class_exists( 'WP_Dark_Mode_Hooks_Pro' ) ) {
	class WP_Dark_Mode_Hooks_Pro {

		/**
		 * @var null
		 */
		private static $instance = null;

		/**
		 * WP_Dark_Mode_Hooks_Pro constructor.
		 */
		public function __construct() {

			add_filter( 'the_content', array( $this, 'render_post_page_switcher' ) );

			add_action( 'wp_head', [ $this, 'header_scripts' ] );

			add_filter( 'wp_dark_mode_pro_active', [ $this, 'is_pro_active' ] );

			add_action( 'update_option_appsero_' . md5( 'wp-dark-mode-pro' ) . '_manage_license', [ $this, 'reload_page' ] );

			add_filter( 'wp_dark_mode/color_presets', [ $this, 'color_presets' ] );

			add_action( 'admin_footer', [ $this, 'admin_footer_scripts' ] );

			add_action('wp_footer', [$this, 'footer_scripts']);

			add_filter( 'wp_dark_mode/base_selectors', [ $this, 'base_selectors' ] );

			add_filter( 'wp_dark_mode/display_settings', [ $this, 'include_settings' ] );

		}

		public function include_settings( $settings ) {

			if ( ! wp_dark_mode()->is_pro_active() && ! wp_dark_mode()->is_ultimate_active() ) {
				return $settings;
			}

			$includes = [
				'includes' => array(
					'name'    => 'includes',
					'default' => '',
					'label'   => __( 'Includes Elements', 'wp-dark-mode-ultimate' ),
					'desc'    => __( 'Add comma separated CSS selectors (classes, ids) to to apply dark mode. Only the elements within the selectors applied by dark mode.',
						'wp-dark-mode-ultimate' ),
					'type'    => 'textarea',
				),
			];

			array_splice($settings, 12, 0, $includes);

			return $settings;
		}

		public function base_selectors( $selectors ) {

			if ( ! wp_dark_mode()->is_ultimate_active() && ! wp_dark_mode()->is_pro_active() ) {
				return $selectors;
			}

			$includes = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'includes', '' );

			if ( ! empty( $includes ) ) {
				$includes = trim( $includes, ',' );
				$includes = explode( ',', $includes );

				if ( ! empty( $includes ) ) {
					$selectors = [];

					$main = 'html.wp-dark-mode-active ';
					foreach ( $includes as $include ) {
						$include = trim( $include );

						$selectors[] = "$main $include";
					}

					return implode( ', ', $selectors );
				}

			}

			return $selectors;
		}

		public function footer_scripts(){
			$above_page = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_display', 'show_above_page' );

			if($above_page && class_exists('BuddyPress') && bp_current_component()){?>
                <script>
                    (function ($) {
                        $(document).ready(function () {
                            $('.entry-title').after(`<?php echo do_shortcode('[wp_dark_mode]') ?>`);
                        });
                    })(jQuery);
                </script>
            <?php }

		}

		public function admin_footer_scripts() {

			global $current_screen;

			if ( empty( $current_screen ) || 'settings_page_wp-dark-mode-settings' != $current_screen->id ) {
				return;
			}

			?>
            <script>
                ;(function ($) {
                    $(document).ready(function () {

                        //custom css
                        if (wpDarkModeAdmin.is_settings_page) {
                            wp.codeEditor.initialize($('.custom_css textarea'), wpDarkModeAdmin.cm_settings);
                        }

                        //switch menus
                        if ($('.switch_menus select').length) {
                            $('.switch_menus select').select2({
                                placeholder: 'Select Menus',
                                multiple: true,
                            });
                        }

                        //exclude pages
                        if ($('.exclude_pages select').length) {
                            $('.exclude_pages select').select2({
                                placeholder: 'Select Pages',
                                multiple: true,
                            });
                        }

                        //exclude pages
                        if ($('.specific_categories select').length) {
                            $('.specific_categories select').select2({
                                placeholder: 'Select Categories',
                                multiple: true,
                            });
                        }


                    });
                })(jQuery);
            </script>
		<?php }

		public function reload_page() { ?>
            <script>location.reload();</script>
			<?php
			exit();
		}

		public function is_pro_active() {
			global $wp_dark_mode_license;

			$is_pro_plan = $wp_dark_mode_license->is_valid_by( 'title', 'WP Dark Mode Pro Lifetime' )
			               || $wp_dark_mode_license->is_valid_by( 'title', 'WP Dark Mode Pro Yearly' );

			return $wp_dark_mode_license->is_valid() && $is_pro_plan;
		}

		public function header_scripts() {

			if ( ! wp_dark_mode_enabled() ) {
				return;
			}

			global $post;
			if ( isset( $post->ID ) && in_array( $post->ID, wp_dark_mode_exclude_pages() ) ) {
				return;
			}

			?>
			<script>

                var is_saved = sessionStorage.getItem('wp_dark_mode_frontend');

                if (is_saved == 1) {
                    document.getElementsByTagName('html')[0].classList.add('wp-dark-mode-active');
                }

                /** check time base */
                function wpDarkModeCheckTime(startTime, endTime) {
                    currentDate = new Date();

                    startDate = new Date(currentDate.getTime());
                    startDate.setHours(startTime.split(":")[0]);
                    startDate.setMinutes(startTime.split(":")[1]);

                    endDate = new Date(currentDate.getTime());
                    endDate.setHours(endTime.split(":")[0]);
                    endDate.setMinutes(endTime.split(":")[1]);

                    return startDate < currentDate && endDate > currentDate;
                }

                var time_based_mode = <?php echo json_encode( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_advanced', 'time_based_mode', 'off' ) ); ?>;
                var start_at = '<?php echo wp_dark_mode_get_settings( 'wp_dark_mode_advanced', 'start_at' ); ?>';
                var end_at = '<?php echo wp_dark_mode_get_settings( 'wp_dark_mode_advanced', 'end_at' ); ?>';

                if ( 0 != is_saved) {
                    if (time_based_mode && wpDarkModeCheckTime(start_at, end_at)) {
                        document.getElementsByTagName('html')[0].classList.add('wp-dark-mode-active');
                    }
                }

			</script>
		<?php }

		public function color_presets( $color_presets ) {
			$color_presets = array_merge( $color_presets, [

				[
					'bg'   => '#270000',
					'text' => '#fff',
					'link' => '#FF7878',
				],
				[
					'bg'   => '#160037',
					'text' => '#EBEBEB',
					'link' => '#B381FF',
				],
				[
					'bg'   => '#121212',
					'text' => '#E6E6E6',
					'link' => '#FF9191',
				],
				[
					'bg'   => '#000A3B',
					'text' => '#FFFFFF',
					'link' => '#3AFF82',
				],
				[
					'bg'   => '#171717',
					'text' => '#BFB7C0',
					'link' => '#F776F0',
				],
				[
					'bg'   => '#003711',
					'text' => '#FFFFFF',
					'link' => '#84FF6D',
				],
				[
					'bg'   => '#23243A',
					'text' => '#D6CB99',
					'link' => '#FF9323',
				],
				[
					'bg'   => '#151819',
					'text' => '#D5D6D7',
					'link' => '#DAA40B',
				],
			] );

			return $color_presets;
		}

		/**
		 * @param $content
		 *
		 * @return string
		 */
		public function render_post_page_switcher( $content ) {

			if ( ! wp_dark_mode_enabled() ) {
				return $content;
			}

			$above_post = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_display', 'show_above_post' );
			$above_page = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_display', 'show_above_page' );

			if ( $above_post && is_single() && in_the_loop() && is_main_query() ) {
				$content = do_shortcode( '[wp_dark_mode]' ) . $content;
			}

			if ( $above_page && is_page() && in_the_loop() && is_main_query() ) {
				$content = do_shortcode( '[wp_dark_mode]' ) . $content;
			}



			return $content;
		}

		/**
		 * @return WP_Dark_Mode_Hooks_Pro|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}
	}
}

WP_Dark_Mode_Hooks_Pro::instance();

