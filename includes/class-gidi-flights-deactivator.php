<?php

/**
 * Fired during plugin deactivation
 *
 * @link       https://github.com/Nnamdi-anthony/
 * @since      1.0.0
 *
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/includes
 * @author     Emeodi Nnamdi <emeodi_nnamdi@yahoo.com>
 */
class Gidi_Flights_Deactivator
{

	/**
	 * What haapens when things are deactivate
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function deactivate()
	{
		self::deactivate_cronjobs();
		self::flush_rewrite();
		self::remove_role();
	}

	public static function deactivate_cronjobs()
	{
		wp_clear_scheduled_hook('gidi_flights_send_sms');
		wp_clear_scheduled_hook('gidi_flights_send_email');
		wp_clear_scheduled_hook('gidi_flights_cleanup_past_email_sms');
	}

	public static function flush_rewrite()
	{
		flush_rewrite_rules();
	}

	public static function remove_role()
	{
		$roles = array('passenger');
		foreach ($roles as $i => $role) :
			//check if role exist before removing it
		if (get_role($role)) {
			remove_role($role);
		}
		endforeach;
	}

}
