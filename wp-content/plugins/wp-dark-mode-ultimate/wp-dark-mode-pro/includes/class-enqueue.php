<?php

/** block direct access */
defined( 'ABSPATH' ) || exit();

/** check if class `WP_Dark_Mode_Pro_Enqueue` not exists yet */
if ( ! class_exists( 'WP_Dark_Mode_Pro_Enqueue' ) ) {
	class WP_Dark_Mode_Pro_Enqueue {

		/**
		 * @var null
		 */
		private static $instance = null;

		/**
		 * WP_Dark_Mode_Pro_Enqueue constructor.
		 */
		public function __construct() {
			add_action( 'wp_enqueue_scripts', [ $this, 'frontend_scripts' ] );
			add_action( 'admin_enqueue_scripts', [ $this, 'admin_scripts' ] );
		}

		/**
		 * Frontend Scripts
		 *
		 * @param $hook
		 */
		public function frontend_scripts( $hook ) {

			if ( ! wp_dark_mode_enabled() ) {
				return;
			}

			/** wp-dark-mode frontend js */
			wp_enqueue_script( 'wp-dark-mode-pro-frontend', wp_dark_mode_pro()->plugin_url( 'assets/js/frontend.min.js' ),
				wp_dark_mode_pro()->version, true );


			/** localize array */
			$localize_array = [
				'pluginUrl'         => wp_dark_mode_pro()->plugin_url(),
				'match_os_mode'     => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_os_mode', 'on' ),
				'time_based_mode'   => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_advanced', 'time_based_mode', 'off' ),
				'start_at'          => wp_dark_mode_get_settings( 'wp_dark_mode_advanced', 'start_at' ),
				'end_at'            => wp_dark_mode_get_settings( 'wp_dark_mode_advanced', 'end_at' ),
			];

			wp_localize_script( 'wp-dark-mode-frontend', 'wpDarkModeProFrontend', $localize_array );
			wp_localize_script( 'wp-dark-mode-pro-frontend', 'wpDarkModeProFrontend', $localize_array );

		}

		/**
		 * Admin scripts
		 *
		 * @param $hook
		 */
		public function admin_scripts( $hook ) {

			/** wp-dark-mode-pro admin css */
			wp_enqueue_style( 'wp-dark-mode-pro-admin', wp_dark_mode_pro()->plugin_url( 'assets/css/admin.css' ), false,
				wp_dark_mode_pro()->version );

			/** wp-dark-mode-pro admin js */
			wp_enqueue_script( 'wp-dark-mode-pro-admin', wp_dark_mode_pro()->plugin_url( 'assets/js/admin.min.js' ), [], wp_dark_mode_pro()->version, true );

			global $current_screen, $wp_dark_mode_license;

			$current_screen = get_current_screen();

			wp_localize_script( 'wp-dark-mode-admin', 'wpDarkModeProAdmin', [
				'pluginUrl'      => wp_dark_mode_pro()->plugin_url(),
				'enable_backend' => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'off' ),
				'is_block_editor' => method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor(),
				'is_valid_license'  => $wp_dark_mode_license->is_valid(),
			] );

		}

		/**
		 * @return WP_Dark_Mode_Pro_Enqueue|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

	}
}

WP_Dark_Mode_Pro_Enqueue::instance();





