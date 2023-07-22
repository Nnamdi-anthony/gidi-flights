<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://github.com/Nnamdi-anthony/
 * @since      1.0.0
 *
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/admin
 * @author     Emeodi Nnamdi <emeodi_nnamdi@yahoo.com>
 */
class Gidi_Flights_Admin
{

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version)
	{

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Gidi_Flights_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Gidi_Flights_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style('jquery-ui', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css');
		wp_enqueue_style($this->plugin_name . "-select2", "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css", array(), $this->version, 'all');
		wp_enqueue_style($this->plugin_name . "-fontawesome", "https://use.fontawesome.com/releases/v5.5.0/css/all.css", array(), $this->version, 'all');
		wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/gidi-flights-admin.bundle.css', array(), $this->version, 'all');

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Gidi_Flights_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Gidi_Flights_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		if (isset($_GET) && $_GET['tab'] == 'advanced_settings' && $_GET['page'] == 'manage-settings') {
			wp_enqueue_code_editor(array('type' => 'text/html'));
		}
		wp_enqueue_script('jquery-ui-datepicker');
		wp_enqueue_script($this->plugin_name . "-select2", "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js", array('jquery'), $this->version, false);
		wp_register_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/gidi-flights-admin.bundle.js', array('jquery', $this->plugin_name . "-select2", 'jquery-ui-datepicker'), $this->version, false);
		 // Localize the script with new data
		$translation_array = array(
			'currency_symbol' => CURRENCY_SYMBOL,
			'travelden' => get_option('gidi_flights_traveldens_options'),
			'payments' => get_option('gidi_flights_payments_options'),
			'sms_notification' => get_option('gidi_flights_sms_notification_settings'),
			'email_notification' => get_option('gidi_flights_email_notification_settings'),
			'general' => get_option('gidi_flights_general'),
			'heartbeat' => array(
				'url' => esc_url_raw(rest_url()),
				'nounce' => wp_create_nonce('wp_rest'),
			)
		);
		wp_localize_script($this->plugin_name, 'gidi_flights_data', $translation_array);
		wp_enqueue_script($this->plugin_name);

	}


	/**
	 * Adds extra attrs to the wordpress script tags
	 *
	 * @since    1.0.0
	 */
	public function add_extra_script_attr($tag, $handle)
	{
		// if ($handle == $this->plugin_name . "-fontawesome") {
		// 	return str_replace(" type='text/javascript'", ' defer="defer" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous" ', $tag);
		// }

		return $tag;
	}

	/**
	 * Adds extra attrs to the wordpress style tags
	 *
	 * @since    1.0.0
	 */
	public function add_extra_style_attr($tag, $handle)
	{
		// if( $handle == $this->plugin_name . "-fontawesome" ) {
		// 	return str_replace(" href", ' integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" href', $tag);
		// }

		return $tag;
	}

}
