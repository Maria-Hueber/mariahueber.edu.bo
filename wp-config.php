<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'A{&&?oRAjFT$MI0vND<!$$Or(3Xn6-d!wC?k+Is:r,.|>+CHqfqJdSqYt!`j&F=#' );
define( 'SECURE_AUTH_KEY',  'ml|f8,4&_j`Y0P45r;@s;]nz*b=Qvu-_RK$8E{S4D$j>l^A_AO_<uTVzt&^)4Z-M' );
define( 'LOGGED_IN_KEY',    ' )PnVz/dyHG?.Y`.$;xJjDxACB_oLvlO*7A]OThRZ>Q;W9hBc3L`z0F#W2tp CA_' );
define( 'NONCE_KEY',        'Q&U$&2w=^:K;`1lvPhp~*`,q,jXpW.fT#s]%Mf<?zZ5u HLs (&9jaki`[9w^lc>' );
define( 'AUTH_SALT',        '@Yha;n$~CeEkx)#]EzMBnvuKWi+hs}x;.uotHad9M|,s_%t[jNMC.@xiG4WLQvjH' );
define( 'SECURE_AUTH_SALT', '`.e;Pphk6b|huo7OYEbY*mCZnkq0hXK#D(%8*2`0#_`p*R*8%AL?ONL-Wf_.acUr' );
define( 'LOGGED_IN_SALT',   '`eIwn7`XNFe!}#;DP10E60aH4tX=CR+,=4?|l27_ Z..Vce3X1Q%G|lg;y_ 6bp(' );
define( 'NONCE_SALT',       ',5|4AQV%fg0wxWOqEK-NzGVm:GUAJenp.5Kyes-}/ >-I*Qj==m6%S8O$[7lj^d[' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
