<?php

class Gidi_Flights_Admin_Menu
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
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name)
	{

		$this->plugin_name = $plugin_name;
	}

	public function add_menus()
	{
		add_menu_page('Flights & Tourism', 'Flights & Tourism', 'manage_options', $this->plugin_name . '-settings', null, 'dashicons-dashboard', 5);
		add_submenu_page($this->plugin_name . '-settings', 'Bookings & Tickets', 'Bookings/Tickets', 'manage_options', 'edit.php?post_type=gidi_flights_booking', null);
		// add_submenu_page($this->plugin_name . '-settings', 'Special Deals', 'Special Deals', 'manage_options', 'edit.php?post_type=gidi_flights_deals', null);
		// add_submenu_page($this->plugin_name . '-settings', 'Deals Category', 'Deals Category', 'manage_options', 'edit-tags.php?taxonomy=gidi_flights_deals_category', null);
		add_submenu_page($this->plugin_name . '-settings', 'Email Notifications', 'Email Notifications', 'manage_options', 'edit.php?post_type=gidi_flights_enotify', null);
		add_submenu_page($this->plugin_name . '-settings', 'SMS Notifications', 'SMS Notifications', 'manage_options', 'edit.php?post_type=gidi_flights_snotify', null);
		add_submenu_page($this->plugin_name . '-settings', 'Notification Templates', 'Notification Templates', 'manage_options', 'edit.php?post_type=gidi_flights_ntpls', null);
		add_submenu_page($this->plugin_name . '-settings', 'Settings', 'Settings', 'manage_options', 'manage-settings', array($this, 'show_settings_html'));
		add_submenu_page($this->plugin_name . '-settings', 'Help & FAQ', 'Help & FAQ', 'manage_options', 'faq', array($this, 'show_flights_help_html'));

		// blank page holder
		add_submenu_page(null, 'Quick Compose Mail', 'Quick Compose Mail', 'manage_options', 'quick-mail', array($this, 'quick_compose_mail'));
		add_submenu_page(null, 'Quick Notifications', 'Quick Notifications', 'manage_options', 'quick-notifications', array($this, 'quick_notifications'));
	}

	public function remove_menus()
	{
		remove_menu_page('edit.php');
		remove_submenu_page($this->plugin_name . '-settings', $this->plugin_name . '-settings');
		remove_menu_page('edit-comments.php');
	}

	/**
	 * Set active menu for post type color
	 *
	 * @hook parent_file
	 * @access public
	 * @return void
	 */
	public function set_menu_state()
	{
		global $parent_file, $submenu_file, $post_type, $taxonomy;

		switch ($post_type) {
			case 'gidi_flights_booking':
			case 'gidi_flights_issues':
			case 'gidi_flights_deals':
			case 'gidi_flights_enotify':
			case 'gidi_flights_snotify':
			case 'gidi_flights_ntpls':
				$parent_file = $this->plugin_name . '-settings'; // WPCS: override ok.
				break;
		}

		switch ($taxonomy) {
			case 'gidi_flights_deals_category':
			case 'gidi_flights_ntpls_cat':
				$parent_file = $this->plugin_name . '-settings'; // WPCS: override ok.
				break;
		}
	}

	/**
	 * add html for plugin help page
	 *
	 * @author Peterson umoke <umoke10@hotmail.com>
	 * @return void
	 */
	public function show_flights_help_html()
	{
		require_once plugin_dir_path(__FILE__) . "partials/settings-menu/help/show-flights-help-html.php";
	}

	/**
	 * add html for plugin help page
	 *
	 * @author Peterson umoke <umoke10@hotmail.com>
	 * @return void
	 */
	public function quick_compose_mail()
	{
		require_once plugin_dir_path(__FILE__) . "partials/admin-menu-bar/quick-compose-mail-html.php";
	}

	/**
	 * add html for plugin help page
	 *
	 * @author Peterson umoke <umoke10@hotmail.com>
	 * @return void
	 */
	public function quick_notifications()
	{
		require_once plugin_dir_path(__FILE__) . "partials/admin-menu-bar/quick_notifications-html.php";
	}

	/**
	 * add html for settings page
	 *
	 * @author Peterson umoke <umoke10@hotmail.com>
	 * @return void
	 */
	public function show_settings_html()
	{
		require_once plugin_dir_path(__FILE__) . "partials/settings-menu/settings/show-settings-html.php";
	}

	/**
	 * remove unwanted nodes from the admin menu bar
	 * 
	 * @author Peterson Umoke
	 * @return void
	 */
	public function remove_admin_bar_items()
	{
		global $wp_admin_bar, $post, $pagenow, $current_screen;
		$wp_admin_bar->remove_node("new-content");
		$wp_admin_bar->remove_node("new-post");
		$wp_admin_bar->remove_node("new-link");
		$wp_admin_bar->remove_node("new-media");
		$wp_admin_bar->remove_node("wp-logo");
		$wp_admin_bar->remove_node("comments");

		if (isset($_GET['action']) && $_GET['action'] == 'preview') {
			$wp_admin_bar->remove_node('edit');
		}
	}

	/**
	 * add a custom node to the admin menu bar
	 * 
	 * @author Peterson
	 */
	public function add_admin_bar_items()
	{
		global $wp_admin_bar, $post, $current_screen, $pagenow;

		$post_types = new Gidi_Flights_Admin_Post_Types($this->plugin_name);

		// show preview for edit screen only
		if (!empty($current_screen)) {
			if ($current_screen->id == 'gidi_flights_ntpls' && $current_screen->base == 'post') {
				$args = array(
					'id' => 'show_preview_button',
					'title' => 'Preview This Notification',
					'href' => $post_types->get_preview_link($post),
				);
				$wp_admin_bar->add_node($args);
			}
		}

		if (isset($_GET['action']) && $_GET['action'] == 'preview') {
			$args = array(
				'id' => 'edit_preview_button',
				'title' => 'Edit This Notification',
				'href' => admin_url('post.php?post=' . $_GET['notification_id'] . '&&action=edit')
			);
			$wp_admin_bar->add_node($args);
		}

		// add new
		$args = array(
			'id' => 'new-content',
			'title' => sprintf('%s  Add A New', '<i class="fas fa-plus make-fontawesome-importo"></i>'),
			'href' => "#",
		);
		$wp_admin_bar->add_node($args);

		// quick compose mail
		$args = array(
			'id' => 'quick-compose-mail',
			'title' => sprintf('%s  Quick Compose Mail', '<i class="fas fa-envelope make-fontawesome-importo"></i>'),
			'href' => admin_url("admin.php?page=quick-mail"),
		);
		$wp_admin_bar->add_node($args);

		// notifications
		$args = array(
			'id' => 'notifications',
			'title' => sprintf('0 %s  Notifications', '<i class="fas fa-bell make-fontawesome-importo"></i>'),
			'href' => admin_url("admin.php?page=quick-notifications"),
		);
		$wp_admin_bar->add_node($args);
	}

	public function add_settings_menu_to_plugin_page($actions, $plugin_file)
	{
		static $plugin;

		if (!isset($plugin)) {
			$plugin = plugin_basename(dirname(dirname(__FILE__)) . "/gidi-flights.php");
		}

		if ($plugin == $plugin_file) {

			$settings = array('settings' => '<a href="admin.php?page=manage-settings">' . __('Settings', 'gidi-flights') . '</a>');
			$help = array('support' => '<a href="admin.php?page=faq" target="_blank">Help</a>');

			$actions = array_merge($settings, $actions);
			$actions = array_merge($help, $actions);

		}

		return $actions;
	}
}
