<?php

defined( 'ABSPATH' ) || wp_die( __( 'You can\'t access this page', 'wp-dark-mode-ultimate' ) );

if ( ! class_exists( 'WP_Dark_Mode_Pro' ) ) {
	final class WP_Dark_Mode_Pro {

		/**
		 * Sets up and initializes the plugin.
		 * Main initiation class
		 *
		 * @since 1.0.0
		 */

		/**
		 * A reference to an instance of this class.
		 *
		 * @since  1.0.0
		 * @access private
		 * @var    object
		 */
		private static $instance = null;

		/**
		 * Plugin version.
		 *
		 * @since  1.0.0
		 * @access private
		 * @var string
		 */
		public $version = WP_DARK_MODE_PRO_VERSION;

		/**
		 * Holder for base plugin URL
		 *
		 * @since  1.0.0
		 * @access private
		 * @var    string
		 */
		private $plugin_url = null;

		/**
		 * Holder for base plugin path
		 *
		 * @since  1.0.0
		 * @access private
		 * @var    string
		 */
		private $plugin_path = null;

		/**
		 * Minimum PHP version required
		 *
		 * @var string
		 */
		private static $min_php = '5.6.0';

		/**
		 * Sets up needed actions/filters for the plugin to initialize.
		 *
		 * @return void
		 * @since  1.0.0
		 * @access public
		 */
		public function __construct() {

			if ( $this->check_environment() ) {

				$this->load_files();
				add_action( 'init', [ $this, 'lang' ] );

				if ( ! defined( 'WP_DARK_MODE_ULTIMATE_VERSION' ) ) {
					add_action( 'admin_init', [ $this, 'activation_redirect' ] );
					add_action( 'admin_notices', [ $this, 'print_notices' ], 15 );
					add_filter( 'plugin_action_links_' . plugin_basename( WP_DARK_MODE_PRO_FILE ), array( $this, 'plugin_action_links' ) );
					$this->appsero_init_tracker_wp_dark_mode_pro();
				}

			}
		}

		/**
		 * redirect to settings page after activation the plugin
		 */
		public static function activation_redirect() {

			if ( get_option( 'wp_dark_mode_pro_do_activation_redirect', false ) ) {
				delete_option( 'wp_dark_mode_pro_do_activation_redirect' );

				wp_redirect( admin_url( 'options-general.php?page=wp-dark-mode-settings' ) );
			}
		}

		/**
		 * Initialize the plugin tracker
		 *
		 * @return void
		 */
		public function appsero_init_tracker_wp_dark_mode_pro() {

			if ( ! class_exists( 'Appsero\Client' ) ) {
				require_once WP_PLUGIN_DIR . '/wp-dark-mode/appsero/src/Client.php';
			}

			$client = new Appsero\Client( '44e81435-c0f1-4149-983b-eb8d9f7a9a66', 'WP Dark Mode Pro', WP_DARK_MODE_PRO_FILE );

			// Active insights
			$client->insights()->hide_notice()->init();

			// Active automatic updater
			$client->updater();

			global $wp_dark_mode_license;
			$wp_dark_mode_license = $client->license();

		}

		/**
		 * Ensure theme and server variable compatibility
		 *
		 * @return boolean
		 * @since  1.0.0
		 * @access private
		 */
		private function check_environment() {

			$return = true;

			/** Check the PHP version compatibility */
			if ( version_compare( PHP_VERSION, self::$min_php, '<=' ) ) {
				$return = false;

				$notice = sprintf( esc_html__( 'Unsupported PHP version Min required PHP Version: "%s"', 'wp-dark-mode-ultimate' ),
					self::$min_php );
			}

			if ( ! class_exists( 'WP_Dark_Mode' ) ) {

				if ( defined( 'WP_DARK_MODE_ULTIMATE_VERSION' ) ) {
					return false;
				}

				$return = false;

				$notice
					= sprintf( /* translators: 1: Plugin name 2: WP Dark Mode 3: Elementor installation link */ __( '%1$s requires %2$s to be installed and activated to function properly. %3$s',
					'wp-dark-mode-ultimate' ), '<strong>' . __( 'WP Dark Mode PRO', 'wp-dark-mode-ultimate' ) . '</strong>',
					'<strong>' . __( 'WP Dark Mode', 'wp-dark-mode-ultimate' ) . '</strong>',
					'<a href="' . esc_url( admin_url( 'plugin-install.php?s=WP Dark Mode&tab=search&type=term' ) ) . '">'
					. __( 'Please click on this link and install WP Dark Mode', 'wp-dark-mode-ultimate' ) . '</a>' );
			}

			/** Add notice and deactivate the plugin if the environment is not compatible */
			if ( ! $return ) {

				add_action( 'admin_notices', function () use ( $notice ) { ?>
                    <div class="notice is-dismissible notice-error">
                        <p><?php echo $notice; ?></p>
                    </div>
				<?php } );

				return $return;
			} else {
				return $return;
			}

		}

		public function load_files() {
			require $this->plugin_path( 'includes/class-enqueue.php' );
			require $this->plugin_path( 'includes/functions.php' );
			require $this->plugin_path( 'includes/class-widget.php' );
			require $this->plugin_path( 'includes/class-hooks.php' );
			require $this->plugin_path( 'includes/class-shortcode.php' );

			if ( is_admin() ) {
				require $this->plugin_path( 'includes/class-admin.php' );
			}
		}

		/**
		 * Initialize plugin for localization
		 *
		 * @return void
		 * @since 1.0.0
		 *
		 */
		public function lang() {
			load_plugin_textdomain( 'wp-dark-mode-pro', false, dirname( plugin_basename( WP_DARK_MODE_PRO_FILE ) ) . '/languages/' );
		}

		/**
		 * Plugin action links
		 *
		 * @param   array  $links
		 *
		 * @return array
		 */
		public function plugin_action_links( $links ) {

			$links[] = sprintf( '<a href="%1$s">%2$s</a>', admin_url( 'options-general.php?page=wp-dark-mode-settings' ),
				__( 'Settings', 'wp-dark-mode-ultimate' ) );


			global $wp_dark_mode_license;

			if ( ! $wp_dark_mode_license->is_valid() ) {
				$links[] = sprintf( '<a href="%1$s">%2$s</a>',
					admin_url( 'options-general.php?page=wp-dark-mode-settings#wp_dark_mode_license' ),
					__( 'Activate License', 'wp-dark-mode-ultimate' ) );
			}

			return $links;
		}

		/**
		 * Returns path to file or dir inside plugin folder
		 *
		 * @param   string  $path  Path inside plugin dir.
		 *
		 * @return string
		 */
		public function plugin_path( $path = null ) {

			if ( ! $this->plugin_path ) {
				$this->plugin_path = trailingslashit( plugin_dir_path( WP_DARK_MODE_PRO_FILE ) );
			}

			return $this->plugin_path . $path;
		}

		/**
		 * Returns url to file or dir inside plugin folder
		 *
		 * @param   string  $path  Path inside plugin dir.
		 *
		 * @return string
		 */
		public function plugin_url( $path = null ) {

			if ( ! $this->plugin_url ) {
				$this->plugin_url = trailingslashit( plugin_dir_url( WP_DARK_MODE_PRO_FILE ) );
			}

			return $this->plugin_url . $path;
		}

		/**
		 * Get the template path.
		 *
		 * @return string
		 * @since 1.0.0
		 */
		public function template_path() {
			return apply_filters( 'wp_dark_mode_template_path', 'wp-dark-mode/' );
		}

		/**
		 * Returns path to template file.
		 *
		 * @param   null           $name
		 * @param   boolean|array  $args
		 *
		 * @return bool|string
		 * @since 1.0.0
		 */
		public function get_template( $name = null, $args = false ) {
			if ( ! empty( $args ) && is_array( $args ) ) {
				extract( $args );
			}

			$template = locate_template( $this->template_path() . $name . '.php' );

			if ( ! $template ) {
				$template = $this->plugin_path( "templates/$name.php" );
			}

			if ( file_exists( $template ) ) {
				include $template;
			} else {
				return false;
			}
		}

		/**
		 * add admin notices
		 *
		 * @param           $class
		 * @param           $message
		 *
		 * @return void
		 */
		public function add_notice( $class, $message ) {

			$notices = get_option( sanitize_key( 'wp_dark_mode_pro_notices' ), [] );

			if ( is_string( $message ) && is_string( $class ) && ! wp_list_filter( $notices, array( 'message' => $message ) ) ) {

				$notices[] = array(
					'message' => $message,
					'class'   => $class,
				);

				update_option( sanitize_key( 'wp_dark_mode_pro_notices' ), $notices );
			}

		}

		/**
		 * Print the admin notices
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function print_notices() {

			if ( defined( 'WP_DARK_MODE_ULTIMATE_VERSION' ) ) {
				return;
			}

			$notices = get_option( sanitize_key( 'wp_dark_mode_pro_notices' ), [] );

			foreach ( $notices as $notice ) { ?>
                <div class="notice notice-<?php echo $notice['class']; ?>">
					<?php echo $notice['message']; ?>
                </div>
				<?php
				update_option( sanitize_key( 'wp_dark_mode_pro_notices' ), [] );
			}
		}

		/**
		 * Main WP_Dark_Mode Instance.
		 *
		 * Ensures only one instance of WP_Dark_Mode is loaded or can be loaded.
		 *
		 * @return WP_Dark_Mode_Pro - Main instance.
		 * @since 1.0.0
		 * @static
		 */
		public static function instance() {

			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

	}
}

/** if function `wp_dark_mode_pro` doesn't exists yet. */
if ( ! function_exists( 'wp_dark_mode_pro' ) ) {
	function wp_dark_mode_pro() {
		return WP_Dark_Mode_Pro::instance();
	}
}

wp_dark_mode_pro();