<?php

/**
 * Fired during plugin activation
 *
 * @link       https://github.com/Nnamdi-anthony/
 * @since      1.0.0
 *
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/includes
 * @author     Emeodi Nnamdi <emeodi_nnamdi@yahoo.com>
 */
class Gidi_Flights_Activator
{

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate()
	{
		self::create_pages();
		self::set_frontpage_meta();
		self::create_passengers_tables();
		self::create_flights_tempcart_tables();
		self::cronjobs();
		self::add_roles();
	}

	public static function create_pages()
	{
		$helpers = new Gidi_Flights_Helpers('gidi_flights');
		$inner_args = $helpers->page_templates_data;
		$pages = apply_filters(
			'gidi_flights_create_pages',
			$inner_args
		);

		foreach ($pages as $key => $page) {
			// create the pages
			$helpers::custom_create_page(esc_sql($page['name']), 'gidi_flights_' . $key . '_page_id', $page['title'], $page['content'], !empty($page['parent']) ? $helpers::custom_get_page_id($page['parent']) : '');
		}
	}

	public static function set_frontpage_meta()
	{
		$frontpage = get_option('gidi_flights_landing_page_id');
		update_option('page_on_front', $frontpage);
		update_option('show_on_front', 'page');
	}

	public static function create_passengers_tables()
	{
		global $wpdb;

		$table_name = $wpdb->prefix . "gf_passengers";
		$collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			booking_id mediumint(9) NOT NULL,
			first_name VARCHAR(100) NOT NULL,
			middle_name VARCHAR(100) DEFAULT '' NOT NULL,
			last_name VARCHAR(100) NOT NULL,
			passenger_type VARCHAR(100) DEFAULT 'adult' NOT NULL,
			-- email VARCHAR(100) NULL,
			gender VARCHAR(100) NULL,
			-- phone_number VARCHAR(100) NULL,
			-- phone_number_alt VARCHAR(100) DEFAULT '' NULL,
			nationality VARCHAR(100) NOT NULL,
			date_of_birth VARCHAR(100) NOT NULL,
			document_type VARCHAR(100) NOT NULL,
			document_number VARCHAR(100) NOT NULL,
			document_expiry_date VARCHAR(100) NOT NULL,
			document_issuance_country VARCHAR(100) NOT NULL,
			created_on datetime DEFAULT NOW() NOT NULL,
			modified_on datetime DEFAULT NOW() NOT NULL,
			PRIMARY KEY  (id)
		) $collate;";

		require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
		dbDelta($sql);
	}

	public static function create_flights_tempcart_tables()
	{
		global $wpdb;

		$table_name = $wpdb->prefix . "gf_flights_tempcart";
		$collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			ip_address VARCHAR(200) NOT NULL,
			uuid VARCHAR(200) NOT NULL,
			full_search_params TEXT NOT NULL,
			full_search_results TEXT NOT NULL,
			adult_count VARCHAR(100) DEFAULT '1' NOT NULL,
			child_count VARCHAR(100) DEFAULT '0' NOT NULL,
			infant_count VARCHAR(100) DEFAULT '0' NULL,
			d_airport VARCHAR(100) NOT NULL,
			a_airport VARCHAR(100) NOT NULL,
			trip_type VARCHAR(100) DEFAULT '' NOT NULL,
			class_type VARCHAR(100) DEFAULT 'ECONOMY' NOT NULL,
			ticket_locale VARCHAR(100) NOT NULL,
			expires_at datetime DEFAULT NOW() NOT NULL,
			created_on datetime DEFAULT NOW() NOT NULL,
			modified_on datetime DEFAULT NOW() NOT NULL,
			PRIMARY KEY  (id)
		) $collate;";

		require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
		dbDelta($sql);
	}

	public static function add_roles()
	{
		$roles = array('passenger');
		foreach ($roles as $i => $role) :
			add_role($role, ucwords($role), array(
				'edit_posts' => true,
				'delete_posts' => true,
				'read' => false,
			));
		endforeach;
	}

	public static function cronjobs()
	{
		// init cronjobs
		$cron = new Gidi_Flights_Admin_Cronjobs('gidi-flights');
		$cron::house_schedules();
	}
}
