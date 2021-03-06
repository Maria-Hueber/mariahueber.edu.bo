<?php

/** don't call the file directly */
defined( 'ABSPATH' ) || wp_die( __( 'You can\'t access this page', 'wp-dark-mode-ultimate' ) );

if ( ! class_exists( 'WP_Dark_Mode_Pro' ) ) {
	/** Define Constants */
	define( 'WP_DARK_MODE_PRO_VERSION', '1.1.2' );
	define( 'WP_DARK_MODE_PRO_FILE', __FILE__ );
	define( 'WP_DARK_MODE_PRO_PATH', dirname( WP_DARK_MODE_PRO_FILE ) );
	define( 'WP_DARK_MODE_PRO_INCLUDES', WP_DARK_MODE_PRO_PATH . '/includes/' );
	define( 'WP_DARK_MODE_PRO_URL', plugins_url( '', WP_DARK_MODE_PRO_FILE ) );
	define( 'WP_DARK_MODE_PRO_ASSETS', WP_DARK_MODE_PRO_URL . '/assets/' );
	define( 'WP_DARK_MODE_PRO_TEMPLATES', WP_DARK_MODE_PRO_PATH . '/templates/' );

	if ( ! defined( 'WP_DARK_MODE_ULTIMATE_VERSION' ) ) {
		/** do the activation stuff */
		register_activation_hook( __FILE__, function () {
			require WP_DARK_MODE_PRO_INCLUDES . 'class-install.php';
		} );
	}


	/** load the main plugin */
	add_action( 'plugins_loaded', function () {
		require WP_DARK_MODE_PRO_INCLUDES . 'base.php';
	} );
}