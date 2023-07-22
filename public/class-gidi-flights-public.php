<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://github.com/Nnamdi-anthony/
 * @since      1.0.0
 *
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/public
 * @author     EMeodi Nnamdi <emeodi_nnamdi@yahoo.com>
 */
class Gidi_Flights_Public
{

    /**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string $plugin_name The ID of this plugin.
	 */
    private $plugin_name;

    /**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string $version The current version of this plugin.
	 */
    private $version;

    /**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 *
	 * @param      string $plugin_name The name of the plugin.
	 * @param      string $version The version of this plugin.
	 */
    public function __construct($plugin_name, $version)
    {

        $this->plugin_name = $plugin_name;
        $this->version     = $version;
    }

    /**
	 * Register the stylesheets for the public-facing side of the site.
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
        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/gidi-flights-public.bundle.css', array(), $this->version, 'all');
    }

    /**
	 * Register the JavaScript for the public-facing side of the site.
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

        wp_enqueue_script('jquery-ui-datepicker');
        wp_enqueue_script($this->plugin_name . "-select2", "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js", array('jquery'), $this->version, false);
        wp_register_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/gidi-flights-public.bundle.js', array(
            'jquery',
            $this->plugin_name . "-select2",
            'jquery-ui-datepicker'
        ), $this->version, false);
        wp_enqueue_style($this->plugin_name . "-fontawesome5", "https://use.fontawesome.com/releases/v5.5.0/css/all.css", array(), $this->version, 'all');
        // Localize the script with new data
        $booking_id        = Gidi_Flights_Helpers::custom_get_page_id('checkout');
        $booking_link      = get_page_link($booking_id);
        $translation_array = array(
            'currency_symbol'    => CURRENCY_SYMBOL,
            'travelden'          => get_option('gidi_flights_traveldens_options'),
            'payments'           => get_option('gidi_flights_payments_options'),
            'sms_notification'   => get_option('gidi_flights_sms_notification_settings'),
            'email_notification' => get_option('gidi_flights_email_notification_settings'),
            'general'            => get_option('gidi_flights_general_options'),
            'heartbeat'          => array(
                'url'          => esc_url_raw(rest_url()),
                'checkout_url' => esc_url_raw($booking_link),
                'nounce'       => wp_create_nonce('wp_rest'),
                'terms_conditions'       => get_page_link(Gidi_Flights_Helpers::custom_get_page_id('terms_conditions')),
                'airline_fare_rules'       => get_page_link(Gidi_Flights_Helpers::custom_get_page_id('airline_fare_rules')),
            )
        );
        wp_localize_script($this->plugin_name, 'gidi_flights_data', $translation_array);
        wp_enqueue_script($this->plugin_name);
    }

    /**
	 * add blog from the blog part of the multitiste
	 *
	 * @return void
	 */
    public function add_blog_posts()
    {
        if (is_multisite()) { // check that we are runnint multisite first
            ob_start();
            include plugin_dir_path(__FILE__) . "partials/landing-page/from-the-world.php";
            $forTravelBlog = ob_get_clean();

            echo $forTravelBlog;
        }
    }

    public function add_things_to_head()
    {
        $plugin_name = str_replace("-", "_", $this->plugin_name);
        $options     = get_option($plugin_name . "_advanced_options");
        echo '<script>' . wp_unslash($options['js_file']) . '</script>';
        echo '<style>' . wp_unslash($options['css_file']) . '</style>';
    }
}
