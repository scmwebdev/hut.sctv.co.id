<?php

include('env.php');

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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', $env_config['db_name']);

/** MySQL database username */
// define('DB_USER', 'root');
define('DB_USER', $env_config['db_user']);

/** MySQL database password */
define('DB_PASSWORD', $env_config['db_pass']);

/** MySQL hostname */
define('DB_HOST', $env_config['db_host']);

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('WP_HOME',  'http://' . $env_config['home_url'] );
define('WP_SITEURL', 'http://' . $env_config['site_url'] );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '.so6^]$%!ok7F*4#NkLf%rE9o@p7Q39i;.S9qOL}RnMj(^RPE3a(X`^4]*Ce)^[j');
define('SECURE_AUTH_KEY',  'Ur+oAv(+<Vd~967VVSQ!2  `maPOu@P)~(W!vY$+_K.sl!ATDgCl;Vr}wiiQa>9e');
define('LOGGED_IN_KEY',    '&PL/@zKju9:~rD**u|u*1Cl&_*ak4 wR9B[>2l=;E}HqV;Ix*Plq1nBkh-sW0qDo');
define('NONCE_KEY',        '7xAy|O>&TL4rQmk~~~G-3KJLAO}9L]@`R_&f9v mdf-?yx;suUmXQ/kOw=?l=ap0');
define('AUTH_SALT',        '?Lbo;EyLbnL*w<kyt<J09K$# 2[B}?;R@dYB:1RF4.X#Qapkr&9@xBRZR{|,dc*m');
define('SECURE_AUTH_SALT', 'vl)7hZYc`fCn7c17<rO7x/ej^:,t+x#_bFu!.QdrJALnGpyV*N.[h,AAG #lBh4S');
define('LOGGED_IN_SALT',   'fZqnr&(Hsv>lVd>(xf~BpsL|T/cp<GRLsVduie1/ d97Ad=)mw8ijdwTCbq6ffb4');
define('NONCE_SALT',       'R2)x0.nt?}6F[=lm/CJ)*]?]u:6JDoBlPwCzK`_tFs,(~UCWN`SOVd}V{>,17anV');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
