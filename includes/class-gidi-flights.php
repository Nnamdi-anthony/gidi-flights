<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://github.com/Nnamdi-anthony/
 * @since      1.0.0
 *
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/includes
 * @author     Emeodi Nnamdi <emeodi_nnamdi@yahoo.com>
 */
class Gidi_Flights
{

    /**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Gidi_Flights_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
    protected $loader;

    /**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
    protected $plugin_name;

    /**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
    protected $version;

    /**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
    public function __construct()
    {
        if (defined('PLUGIN_NAME_VERSION')) {
            $this->version = PLUGIN_NAME_VERSION;
        } else {
            $this->version = '1.0.0';
        }
        $this->plugin_name = 'gidi-flights';

        $this->load_dependencies();
        $this->set_locale();
        $this->define_admin_hooks();
        $this->define_public_hooks();
        $this->define_includes_hooks();
    }

    /**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Gidi_Flights_Loader. Orchestrates the hooks of the plugin.
	 * - Gidi_Flights_i18n. Defines internationalization functionality.
	 * - Gidi_Flights_Admin. Defines all hooks for the admin area.
	 * - Gidi_Flights_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
    private function load_dependencies()
    {

        // init the loader for the plugin
        $this->loader = new Gidi_Flights_Loader();
    }

    /**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Gidi_Flights_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
    private function set_locale()
    {

        $plugin_i18n = new Gidi_Flights_i18n();

        $this->loader->add_action('plugins_loaded', $plugin_i18n, 'load_plugin_textdomain');
    }

    /**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
    private function define_admin_hooks()
    {

        $plugin_admin = new Gidi_Flights_Admin($this->get_plugin_name(), $this->get_version());

        // add special attr to script or style tags
        $this->loader->add_filter("script_loader_tag", $plugin_admin, "add_extra_script_attr", 10, 2);
        $this->loader->add_filter("style_loader_tag", $plugin_admin, "add_extra_style_attr", 10, 2);

        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');

        // admin bar & menus
        $menu = new Gidi_Flights_Admin_Menu($this->get_plugin_name());
        $this->loader->add_action('admin_menu', $menu, 'add_menus');
        $this->loader->add_action('admin_menu', $menu, 'remove_menus');
        $this->loader->add_action('admin_head', $menu, 'set_menu_state');
        $this->loader->add_action('admin_bar_menu', $menu, 'remove_admin_bar_items', 999);
        $this->loader->add_action('admin_bar_menu', $menu, 'add_admin_bar_items', 999);
        $this->loader->add_filter("plugin_action_links", $menu, 'add_settings_menu_to_plugin_page', 10, 5);

        // settings
        $settings = new Gidi_Flights_Admin_Settings($this->get_plugin_name());
        $this->loader->add_action('admin_init', $settings, 'register_payment_settings');
        $this->loader->add_action('admin_init', $settings, 'register_travelden_api_settings');
        $this->loader->add_action('admin_init', $settings, 'register_sms_notification_settings');
        $this->loader->add_action('admin_init', $settings, 'register_general_settings');
        $this->loader->add_action('admin_init', $settings, 'register_advanced_settings');
        $this->loader->add_action('admin_init', $settings, 'register_email_notifications_settings');

        // custom post types
        $post_types = new Gidi_Flights_Admin_Post_Types($this->get_plugin_name());
        // $this->loader->add_action('init', $post_types, 'register_deals_type', 0);
        $this->loader->add_action('init', $post_types, 'register_bookings_type', 0);
        $this->loader->add_action('init', $post_types, 'register_sms_notifications_type', 0);
        $this->loader->add_action('init', $post_types, 'register_email_notifications_type', 0);
        $this->loader->add_action('init', $post_types, 'register_notifications_templates_type', 0);
        $this->loader->add_filter('bulk_actions-edit-gidi_flights_ntpls', $post_types, 'remove_subactions_notification_temp_post_type');
        $this->loader->add_filter('post_row_actions', $post_types, 'remove_quick_edit_gidi_flights_ntpls', 10, 2);
        $this->loader->add_filter('bulk_post_updated_messages', $post_types, 'bulk_update_gidi_flights_ntpls', 10, 2);
        $this->loader->add_filter('post_updated_messages', $post_types, 'update_gidi_flights_ntpls');
        $this->loader->add_filter('bulk_post_updated_messages', $post_types, 'bulk_update_gidi_flights_enotify', 10, 2);
        $this->loader->add_filter('post_updated_messages', $post_types, 'update_gidi_flights_enotify');
        $this->loader->add_filter('manage_gidi_flights_snotify_posts_columns', $post_types, 'set_custom_edit_gidi_flights_snotify_columns');
        $this->loader->add_action('manage_gidi_flights_snotify_posts_custom_column', $post_types, 'custom_gidi_flights_snotify_column', 10, 2);
        $this->loader->add_filter('manage_gidi_flights_enotify_posts_columns', $post_types, 'set_custom_edit_gidi_flights_enotify_columns');
        $this->loader->add_action('manage_gidi_flights_enotify_posts_custom_column', $post_types, 'custom_gidi_flights_enotify_column', 10, 2);
        $this->loader->add_action('admin_head-post-new.php', $post_types, 'posttype_admin_css');
        $this->loader->add_action('admin_head-post.php', $post_types, 'posttype_admin_css');
        $this->loader->add_filter('enter_title_here', $post_types, 'change_enter_title_here');

        // custom taxonomy
        $tax_type = new Gidi_Flights_Admin_Taxonomies($this->get_plugin_name());
        // $this->loader->add_action('init', $tax_type, 'register_deal_cat_tax');
        $this->loader->add_action('init', $tax_type, 'register_notification_templates_categories_tax');
        $this->loader->add_action('init', $tax_type, 'insert_notification_templates_categories_tax');

        // metaboxes
        $metabox = new Gidi_Flights_Admin_Metabox($this->get_plugin_name());
        $this->loader->add_action('admin_head', $metabox, 'remove_metaboxes');
        $this->loader->add_action('add_meta_boxes', $metabox, 'register_metaboxes');
        $this->loader->add_action('save_post', $metabox, 'save_metadatas', 10, 2);

        // cronjobs
        $cron = new Gidi_Flights_Admin_Cronjobs($this->get_plugin_name());
        $this->loader->add_action('gidi_flights_send_sms', $cron, 'send_sms');
        $this->loader->add_action('gidi_flights_send_email', $cron, 'send_email');
        $this->loader->add_action('gidi_flights_cleanup_past_email_sms', $cron, 'remove_past_email_sms_records');
        $this->loader->add_filter('cron_schedules', $cron, 'add_intervals_cron_schedules');
    }

    /**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
    private function define_includes_hooks()
    {
        $helpers = new Gidi_Flights_Helpers($this->get_plugin_name());
        $this->loader->add_filter('display_post_states', $helpers, 'set_page_states', 10, 2);

        // rest api endpoints
        $api_endpoints_init = new Gidi_Flights_API_Init($this->get_plugin_name());
        $this->loader->add_api_endpoint($api_endpoints_init, 'init_travels_endpoints');
        $this->loader->add_api_endpoint($api_endpoints_init, 'init_passengers_endpoints');
        $this->loader->add_api_endpoint($api_endpoints_init, 'init_tempcart_endpoints');
    }

    /**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
    private function define_public_hooks()
    {

        $plugin_public = new Gidi_Flights_Public($this->get_plugin_name(), $this->get_version());

        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_styles');
        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
        $this->loader->add_action('gf_after_searchbar', $plugin_public, 'add_blog_posts');
        $this->loader->add_action('wp_head', $plugin_public, 'add_things_to_head');

        $shortcodes = new Gidi_Flights_Public_Shortcodes($this->get_plugin_name());
        $this->loader->add_shortcode('gf_preview_notifications', $shortcodes, 'gf_preview_notifications');
        $this->loader->add_shortcode('gf_init_page', $shortcodes, 'init_landing_page');
        $this->loader->add_shortcode('gf_search', $shortcodes, 'search_page');
        $this->loader->add_shortcode('gf_checkout_page', $shortcodes, 'booking_page');
        $this->loader->add_shortcode('gf_process_checkout', $shortcodes, 'processing_page');

        $menus = new Gidi_Flights_Public_Menu($this->get_plugin_name());
        $this->loader->add_action('after_setup_theme', $menus, 'register_menus');
    }

    /**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
    public function run()
    {
        $this->loader->run();
    }

    /**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
    public function get_plugin_name()
    {
        return $this->plugin_name;
    }

    /**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Gidi_Flights_Loader    Orchestrates the hooks of the plugin.
	 */
    public function get_loader()
    {
        return $this->loader;
    }

    /**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
    public function get_version()
    {
        return $this->version;
    }
}
