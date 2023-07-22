<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://github.com/Nnamdi-anthony/
 * @since             1.0.0
 * @package           Gidi_Flights
 *
 * @wordpress-plugin
 * Plugin Name:       Gidi Flights & Booking
 * Plugin URI:        https://github.com/Nnamdi-anthony/
 * Description:       This is a plugin used to book for flights, Please activate this plugin at your own risk, it comes with temp destructive changes
 * Version:           1.0.0
 * Author:            Peter Umoke
 * Author URI:        https://github.com/Nnamdi-anthony/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       gidi-flights
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('PLUGIN_NAME_VERSION', '1.0.0');
define("CURRENCY_SYMBOL", "&#8358;");

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-gidi-flights-activator.php
 */
function activate_gidi_flights()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-gidi-flights-activator.php';
	Gidi_Flights_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-gidi-flights-deactivator.php
 */
function deactivate_gidi_flights()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-gidi-flights-deactivator.php';
	Gidi_Flights_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_gidi_flights');
register_deactivation_hook(__FILE__, 'deactivate_gidi_flights');

/**
 * composer autoloader that is used to import internationalization,
 * admin-specific hooks, and public-facing site classes.
 */
require_once plugin_dir_path(__FILE__) . "vendor/autoload.php";

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_gidi_flights()
{

	$plugin = new Gidi_Flights();
	$plugin->run();
}

run_gidi_flights(); 
