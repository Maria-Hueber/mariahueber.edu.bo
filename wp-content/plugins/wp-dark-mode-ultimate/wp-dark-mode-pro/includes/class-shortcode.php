<?php

/** Block direct access */
defined( 'ABSPATH' ) || exit();

/** check if class `WP_Dark_Mode_Pro_Shortcode` not exists yet */
if ( ! class_exists( 'WP_Dark_Mode_Pro_Shortcode' ) ) {
	class WP_Dark_Mode_Pro_Shortcode {

		/**
		 * @var null
		 */
		private static $instance = null;

		/**
		 * WP_Dark_Mode_Pro_Shortcode constructor.
		 */
		public function __construct() {
			add_shortcode( 'wp_dark_mode_switch', [ $this, 'render_dark_mode_btn' ] );
		}

		/**
		 * render the dark mode switcher button
		 */
		public function render_dark_mode_btn( $atts ) {

			if ( ! wp_dark_mode_enabled() ) {
				return false;
			}

			$atts = shortcode_atts( [
				'floating' => 'no',
				'style'    => 1,
			], $atts );

			ob_start();
			if ( file_exists( wp_dark_mode()->plugin_path( "templates/btn-{$atts['style']}.php" ) ) ) {
				wp_dark_mode()->get_template( "btn-{$atts['style']}", $atts );
			} else {
				wp_dark_mode()->get_template( "btn-1", $atts );
			}

			return ob_get_clean();
		}

		/**
		 * @return WP_Dark_Mode_Pro_Shortcode|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}


	}
}

WP_Dark_Mode_Pro_Shortcode::instance();

