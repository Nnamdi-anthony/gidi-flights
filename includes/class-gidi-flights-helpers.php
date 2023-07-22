<?php

/**
 * gather a list of helpers for the site
 * 
 * @version 1.0.2
 */
class Gidi_Flights_Helpers
{

	/**
	 * store an array of pages needed for the travels page to work effectively
	 *
	 * @var array
	 */
	public $page_templates_data = array();

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private static $plugin_name;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name)
	{

		self::$plugin_name = $plugin_name;
		$this->page_templates_data = array(
			'preview_notifications' => array(
				'name' => _x('preview-notifications', 'Page slug', self::$plugin_name),
				'title' => _x('Preview Notifications', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_preview_notifications_shortcode_tag', 'gf_preview_notifications') . ']',
				'post_state_name' => 'Sneek Peek Notifications',
			),
			'landing' => array(
				'name' => _x('landing-page', 'Page slug', self::$plugin_name),
				'title' => _x('Welcome - gidievents.com Flights', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_init_shortcode_tag', 'gf_init_page') . ']',
				'post_state_name' => 'Landing Page',
			),
			'checkout' => array(
				'name' => _x('checkout', 'Page slug', self::$plugin_name),
				'title' => _x('Checkout', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_checkout_shortcode_tag', 'gf_checkout_page') . ']',
				'post_state_name' => 'Checkout Page',
			),
			'view_ticket' => array(
				'name' => _x('view-ticket', 'Page slug', self::$plugin_name),
				'title' => _x('View Ticket', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_view_ticket_shortcode_tag', 'gf_view_ticket') . ']',
				'post_state_name' => 'View A Single Ticket Page',
			),
			'my_account' => array(
				'name' => _x('account', 'Page slug', self::$plugin_name),
				'title' => _x('My Account', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_view_my_account_shortcode_tag', 'gf_view_my_account') . ']',
				'post_state_name' => 'View Customer Account',
			),
			'airline_fare_rules' => array(
				'name' => _x('airline-conditions-fare-rules', 'Page slug', self::$plugin_name),
				'title' => _x('Airline Conditions and Fare Rules', 'Page title', self::$plugin_name),
				'content' => '',
				'post_state_name' => 'Airline Fare Rules Page',
			),
			'terms_conditions' => array(
				'name' => _x('terms-and-conditions', 'Page slug', self::$plugin_name),
				'title' => _x('Terms and Conditions', 'Page title', self::$plugin_name),
				'content' => '',
				'post_state_name' => 'Terms and Conditions Page',
			),
			'bookings' => array(
				'name' => _x('manage-bookings', 'Page slug', self::$plugin_name),
				'title' => _x('Bookings', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_manage_bookings_shortcode_tag', 'gf_manage_bookings') . ']',
				'post_state_name' => 'Bookings Page',
			),
			'login' => array(
				'name' => _x('auth-login', 'Page slug', self::$plugin_name),
				'title' => _x('Login', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_login_shortcode_tag', 'gf_login') . ']',
				'post_state_name' => 'Login Page',
			),
			'register' => array(
				'name' => _x('auth-register', 'Page slug', self::$plugin_name),
				'title' => _x('Register', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_register_shortcode_tag', 'gf_register') . ']',
				'post_state_name' => 'Register Page',
			),
			'search' => array(
				'name' => _x('search', 'Page slug', self::$plugin_name),
				'title' => _x('Search', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_search_shortcode_tag', 'gf_search') . ']',
				'post_state_name' => 'Search Page',
			),
			'trocess_checkout' => array(
				'name' => _x('process-tranx-checkouts', 'Page slug', self::$plugin_name),
				'title' => _x('Process Checkouts', 'Page title', self::$plugin_name),
				'content' => '[' . apply_filters('gidi_flights_process_checkouts', 'gf_process_checkout') . ']',
				'post_state_name' => 'Used to Process Checkouts and Redirects',
			),
		);
	}

	/**
	 * Create a page and store the ID in an option.
	 *
	 * @param mixed  $slug Slug for the new page
	 * @param string $option Option name to store the page's ID
	 * @param string $page_title (default: '') Title for the new page
	 * @param string $page_content (default: '') Content for the new page
	 * @param int    $post_parent (default: 0) Parent for the new page
	 * @return int page ID
	 */
	public static function custom_create_page($slug, $option = '', $page_title = '', $page_content = '', $post_parent = 0)
	{
		global $wpdb;

		$option_value = get_option($option);

		if ($option_value > 0 && ($page_object = get_post($option_value))) {
			if ('page' === $page_object->post_type && !in_array($page_object->post_status, array('pending', 'trash', 'future', 'auto-draft'))) {
				// Valid page is already in place
				return $page_object->ID;
			}
		}

		if (strlen($page_content) > 0) {
			// Search for an existing page with the specified page content (typically a shortcode)
			$valid_page_found = $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE post_type='page' AND post_status NOT IN ( 'pending', 'trash', 'future', 'auto-draft' ) AND post_content LIKE %s LIMIT 1;", "%{$page_content}%"));
		} else {
			// Search for an existing page with the specified page slug
			$valid_page_found = $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE post_type='page' AND post_status NOT IN ( 'pending', 'trash', 'future', 'auto-draft' )  AND post_name = %s LIMIT 1;", $slug));
		}

		$valid_page_found = apply_filters(str_replace("-", "_", self::$plugin_name) . '_create_page_id', $valid_page_found, $slug, $page_content);

		if ($valid_page_found) {
			if ($option) {
				update_option($option, $valid_page_found);
			}
			return $valid_page_found;
		}

		// Search for a matching valid trashed page
		if (strlen($page_content) > 0) {
			// Search for an existing page with the specified page content (typically a shortcode)
			$trashed_page_found = $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE post_type='page' AND post_status = 'trash' AND post_content LIKE %s LIMIT 1;", "%{$page_content}%"));
		} else {
			// Search for an existing page with the specified page slug
			$trashed_page_found = $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE post_type='page' AND post_status = 'trash' AND post_name = %s LIMIT 1;", $slug));
		}

		if ($trashed_page_found) {
			$page_id = $trashed_page_found;
			$page_data = array(
				'ID' => $page_id,
				'post_status' => 'publish',
			);
			wp_update_post($page_data);
		} else {
			$page_data = array(
				'post_status' => 'publish',
				'post_type' => 'page',
				'post_author' => 1,
				'post_name' => $slug,
				'post_title' => $page_title,
				'post_content' => $page_content,
				'post_parent' => $post_parent,
				'comment_status' => 'closed',
			);
			$page_id = wp_insert_post($page_data);
		}

		if ($option) {
			update_option($option, $page_id);
		}

		return $page_id;
	}


	/**
	 * Retrieve page ids - used for myaccount, edit_address, shop, cart, checkout, pay, view_order, terms. returns -1 if no page is found.
	 *
	 * @param string $page Page slug.
	 * @return int
	 */
	public static function custom_get_page_id($page)
	{

		$page = apply_filters(str_replace("-", "_", self::$plugin_name) . '_get_' . $page . '_page_id', get_option(str_replace("-", "_", self::$plugin_name) . '_' . $page . '_page_id'));

		return $page ? absint($page) : -1;
	}

	/**
	 * insert or update post meta
	 *
	 * @param integer $post_id
	 * @param string $key
	 * @param string $value
	 * @return void
	 */
	public static function post_meta_update(int $post_id, string $key, string $value)
	{
		update_post_meta($post_id, $key, $value);
	}

	/**
	 * set the page states for the user to easily identify which page is for which
	 *
	 * @param mixed $post_states
	 * @param mixed $post
	 * @return $post_states
	 */
	public function set_page_states($post_states, $post)
	{
		$inner_args = $this->page_templates_data;
		$pages = apply_filters(
			'gidi_travels_set_pages_states',
			$inner_args
		);

		foreach ($pages as $key => $page) {

			// get the id
			$page_args = get_page_by_path($page['name'], ARRAY_A);
			$page_idd = $page_args['ID'];

			if ($page_idd === $post->ID) {
				$post_states[$page['name']] = __($page['post_state_name'], self::$plugin_name);
			}
		}

		return $post_states;
	}

	// Function to get the client IP address
	public static function get_client_ip()
	{
		$ipaddress = '';
		if (getenv('HTTP_CLIENT_IP'))
			$ipaddress = getenv('HTTP_CLIENT_IP');
		else if (getenv('HTTP_X_FORWARDED_FOR'))
			$ipaddress = getenv('HTTP_X_FORWARDED_FOR');
		else if (getenv('HTTP_X_FORWARDED'))
			$ipaddress = getenv('HTTP_X_FORWARDED');
		else if (getenv('HTTP_FORWARDED_FOR'))
			$ipaddress = getenv('HTTP_FORWARDED_FOR');
		else if (getenv('HTTP_FORWARDED'))
			$ipaddress = getenv('HTTP_FORWARDED');
		else if (getenv('REMOTE_ADDR'))
			$ipaddress = getenv('REMOTE_ADDR');
		else
			$ipaddress = 'UNKNOWN';
		return $ipaddress;
	}

	public static function generate_booking_code()
	{
		$current_site_id = get_current_blog_id();
		$current_year_month = date("ym");

		$query = array(
			"post_type" => str_replace("-", "_", self::$plugin_name . "_booking"),
			"posts_per_page" => -1,
		);
		$q = new WP_Query($query);
		$count_old_bookings = $q->post_count;
		$unique_code = str_pad($count_old_bookings + 1, 6, '0', STR_PAD_LEFT);

		return "GF" . $current_site_id . $current_year_month . $unique_code;
	}
}
