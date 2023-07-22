<?php

/**
 * register the list of post types for the plugin usuage
 * 
 * The concept is to take advantage the wordpress default crud api so as not to write one from scatch.
 * @author 
 */
class Gidi_Flights_Admin_Taxonomies
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

	public function register_deal_cat_tax()
	{

		$labels = array (
		 'name' => _x('Deals Category', 'Deals Category', 'gidi-flights'),
		 'singular_name' => _x('Deals Category', 'Deals Category', 'gidi-flights'),
		 'menu_name' => __('Deals Category', 'gidi-flights'),
		 'all_items' => __('All Deals Category', 'gidi-flights'),
		 'parent_item' => __('Parent Deals Category', 'gidi-flights'),
		 'parent_item_colon' => __('Parent Deals Category:', 'gidi-flights'),
		 'new_item_name' => __('New Deals Category Name', 'gidi-flights'),
		 'add_new_item' => __('Add New Deals Category', 'gidi-flights'),
		 'edit_item' => __('Edit Deals Category', 'gidi-flights'),
		 'update_item' => __('Update Deals Category', 'gidi-flights'),
		 'view_item' => __('View Deals Category', 'gidi-flights'),
		 'separate_items_with_commas' => __('Separate items with commas', 'gidi-flights'),
		 'add_or_remove_items' => __('Add or remove items', 'gidi-flights'),
		 'choose_from_most_used' => __('Choose from the most used', 'gidi-flights'),
		 'popular_items' => __('Popular Deals Categories', 'gidi-flights'),
		 'search_items' => __('Search Deals Categories', 'gidi-flights'),
		 'not_found' => __('Not Found', 'gidi-flights'),
		 'no_terms' => __('No items', 'gidi-flights'),
		 'items_list' => __('Deals Categories list', 'gidi-flights'),
		 'items_list_navigation' => __('Deals Categories list navigation', 'gidi-flights'),
		);
		$rewrite = array (
		 'slug' => 'special-deals-category',
		 'with_front' => true,
		 'hierarchical' => false,
		);
		$args = array (
		 'labels' => $labels,
		 'hierarchical' => true,
		 'public' => false,
		 'show_ui' => true,
		 'show_admin_column' => true,
		 'show_in_nav_menus' => true,
		 'show_tagcloud' => false,
		 'rewrite' => $rewrite,
		 'show_in_rest' => true,
		);
		register_taxonomy(str_replace("-", "_", $this->plugin_name) . "_deals_category", array ('gidi_flights_deals'), $args);

	}

	public function register_notification_templates_categories_tax()
	{

		$labels = array (
		 'name' => _x('Notification Templates Category', 'Notification Templates Category', 'gidi-flights'),
		 'singular_name' => _x('Notification Templates Category', 'Notification Templates Category', 'gidi-flights'),
		 'menu_name' => __('Notification Templates Category', 'gidi-flights'),
		 'all_items' => __('All Templates Category', 'gidi-flights'),
		 'parent_item' => __('Parent Templates Category', 'gidi-flights'),
		 'parent_item_colon' => __('Parent Templates Category:', 'gidi-flights'),
		 'new_item_name' => __('New Templates Category Name', 'gidi-flights'),
		 'add_new_item' => __('Add New Templates Category', 'gidi-flights'),
		 'edit_item' => __('Edit Templates Category', 'gidi-flights'),
		 'update_item' => __('Update Templates Category', 'gidi-flights'),
		 'view_item' => __('View Templates Category', 'gidi-flights'),
		 'separate_items_with_commas' => __('Separate items with commas', 'gidi-flights'),
		 'add_or_remove_items' => __('Add or remove items', 'gidi-flights'),
		 'choose_from_most_used' => __('Choose from the most used', 'gidi-flights'),
		 'popular_items' => __('Popular Templates Categories', 'gidi-flights'),
		 'search_items' => __('Search Templates Categories', 'gidi-flights'),
		 'not_found' => __('Not Found', 'gidi-flights'),
		 'no_terms' => __('No items', 'gidi-flights'),
		 'items_list' => __('Templates Categories list', 'gidi-flights'),
		 'items_list_navigation' => __('Templates Categories list navigation', 'gidi-flights'),
		);
		$rewrite = array (
		 'slug' => 'notification-templates-categories',
		 'with_front' => true,
		 'hierarchical' => true,
		);
		$args = array (
		 'labels' => $labels,
		 'hierarchical' => true,
		 'public' => true,
		 'show_ui' => true,
		 'show_admin_column' => true,
		 'show_in_nav_menus' => true,
		 'show_tagcloud' => true,
		 'rewrite' => $rewrite,
		 'show_in_rest' => true,
		);
		register_taxonomy(str_replace("-", "_", $this->plugin_name) . "_ntpls_cat", array ('gidi_flights_ntpls'), $args);

	}

	public function insert_notification_templates_categories_tax()
	{
		// insert the defaul tersm for notification types
		$args = array ('Email', 'SMS');
		foreach ($args as $index => $tax_type)
		{
			$tax_id = wp_insert_term($tax_type, 'gidi_flights_ntpls_cat');

		}
	}



}
