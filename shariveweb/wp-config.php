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
define( 'DB_NAME', 'shariveweb_dev' );

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
define( 'AUTH_KEY',         'yuGk0v#[;;he29V?OW<pZu$u@q4}hj<-.MKw=0mR8UN%}d|pfLD7;RKIaYWF~Bo%' );
define( 'SECURE_AUTH_KEY',  ';xHC7}xX^aP%kV=ii0kJ]1b2@/_<X_@LB;wJzeOu42Bb>ggS<%Rcg#y3CX?R(C5s' );
define( 'LOGGED_IN_KEY',    '$r*w_Z)5[QrXc|;pa6_b_33u[xK:=3NB+}co1M?R>:~wqQ(ouMRrc;HVW>2|pb7}' );
define( 'NONCE_KEY',        '85C0*7|eGuY0Y/t$8N=JE4Q:>gQ?x414(%1,FOX>V~CB@V=L(o9)_c&hs~@^_?pi' );
define( 'AUTH_SALT',        'Z^x0Yf~YMi0t]oR,+V0msEVyWHqRL#^SKHf9} B|j7I]G3 $,vX1pzd,Tb{U5mWJ' );
define( 'SECURE_AUTH_SALT', '? sZjQQY|3b@Ua<]Dc%M2xY*:D+Dw]jxU4eD[ADm_2E*:|iB|T.-ZPyDWor0UoSd' );
define( 'LOGGED_IN_SALT',   '$gV^{c/lspE,LaO4W#NH+ChFmxUaeYQIu-&ZjAye@Jr,*UwvIbB<-TXI/+QaOo2a' );
define( 'NONCE_SALT',       'WXt}{+&1s@*dN41d4=p-$phfX{ mQ*a)}[ZH]qwJP4Tt!=U4s}T6y;vh,1x(Jg3y' );

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
