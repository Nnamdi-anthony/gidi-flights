<?php

/**
 * register the list of post types for the plugin usuage
 * 
 * The concept is to take advantage the wordpress default crud api so as not to write one from scatch.
 * @author Emeodi Nnamdi <emeodi_nnamdi@yahoo.com>
 */
class Gidi_Flights_Admin_Post_Types
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
	 * the id of the new post type
	 *
	 * @var string
	 */
	private $post_type;

	/**
	 * the name of the new post type
	 *
	 * @var string
	 */
	private $post_type_name;

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
		$this->post_type = "";
		$this->post_type_name = "";

	}

	public function register_deals_type()
	{
		$this->post_type = str_replace("-", "_", $this->plugin_name) . "_deals";
		$this->post_type_name = "Special Deals and Offers";
		$rewrite_slug = "deals";

		$labels = array(
			'name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'singular_name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'menu_name' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'name_admin_bar' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'archives' => __('Deal Archives', 'gidi-flights'),
			'attributes' => __('Deal Attributes', 'gidi-flights'),
			'parent_item_colon' => __('Parent Deal:', 'gidi-flights'),
			'all_items' => __('All Deals', 'gidi-flights'),
			'add_new_item' => __('Add New Deal', 'gidi-flights'),
			'add_new' => __('Add New', 'gidi-flights'),
			'new_item' => __('New Deal', 'gidi-flights'),
			'edit_item' => __('Edit Deal', 'gidi-flights'),
			'update_item' => __('Update Deal', 'gidi-flights'),
			'view_item' => __('View Deal', 'gidi-flights'),
			'view_items' => __('View Deals', 'gidi-flights'),
			'search_items' => __('Search Deal', 'gidi-flights'),
			'not_found' => __('Not found', 'gidi-flights'),
			'not_found_in_trash' => __('Not found in Trash', 'gidi-flights'),
			'featured_image' => __('Featured Image', 'gidi-flights'),
			'set_featured_image' => __('Set featured image', 'gidi-flights'),
			'remove_featured_image' => __('Remove featured image', 'gidi-flights'),
			'use_featured_image' => __('Use as featured image', 'gidi-flights'),
			'insert_into_item' => __('Insert into item', 'gidi-flights'),
			'uploaded_to_this_item' => __('Uploaded to this item', 'gidi-flights'),
			'items_list' => __('Deals list', 'gidi-flights'),
			'items_list_navigation' => __('Deals list navigation', 'gidi-flights'),
			'filter_items_list' => __('Filter items list', 'gidi-flights'),
		);
		$rewrite = array(
			'slug' => $rewrite_slug,
			'with_front' => true,
			'pages' => true,
			'feeds' => true,
		);
		$args = array(
			'label' => __(ucwords($this->post_type), 'gidi-flights'),
			'description' => __('Combine Two or More Flights into Deals', 'gidi-flights'),
			'labels' => $labels,
			'supports' => array('title', 'editor', 'thumbnail', 'revisions'),
			'taxonomies' => array(str_replace("-", "_", $this->plugin_name) . '_deals_category'),
			'hierarchical' => false,
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => false,
			'menu_position' => 5,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => false,
			'can_export' => true,
			'has_archive' => true,
			'exclude_from_search' => false,
			'publicly_queryable' => true,
			'rewrite' => $rewrite,
			'capability_type' => 'page',
			'show_in_rest' => true,
		);
		register_post_type($this->post_type, $args);
	}

	public function register_bookings_type()
	{
		$this->post_type = str_replace("-", "_", $this->plugin_name) . "_booking";
		$rewrite_slug = "bookings";
		$this->post_type_name = "Customer Bookings and Tickets";

		$labels = array(
			'name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'singular_name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'menu_name' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'name_admin_bar' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'archives' => __('Booking Archives', 'gidi-flights'),
			'attributes' => __('Booking Attributes', 'gidi-flights'),
			'parent_item_colon' => __('Parent Booking:', 'gidi-flights'),
			'all_items' => __('All Bookings', 'gidi-flights'),
			'add_new_item' => __('Add New Booking', 'gidi-flights'),
			'add_new' => __('Add New', 'gidi-flights'),
			'new_item' => __('New Booking', 'gidi-flights'),
			'edit_item' => __('Edit Booking', 'gidi-flights'),
			'update_item' => __('Update Booking', 'gidi-flights'),
			'view_item' => __('View Booking', 'gidi-flights'),
			'view_items' => __('View Bookings', 'gidi-flights'),
			'search_items' => __('Search Booking', 'gidi-flights'),
			'not_found' => __('Not found', 'gidi-flights'),
			'not_found_in_trash' => __('Not found in Trash', 'gidi-flights'),
			'featured_image' => __('Featured Image', 'gidi-flights'),
			'set_featured_image' => __('Set featured image', 'gidi-flights'),
			'remove_featured_image' => __('Remove featured image', 'gidi-flights'),
			'use_featured_image' => __('Use as featured image', 'gidi-flights'),
			'insert_into_item' => __('Insert into item', 'gidi-flights'),
			'uploaded_to_this_item' => __('Uploaded to this item', 'gidi-flights'),
			'items_list' => __('Bookings list', 'gidi-flights'),
			'items_list_navigation' => __('Bookings list navigation', 'gidi-flights'),
			'filter_items_list' => __('Filter items list', 'gidi-flights'),
		);
		$rewrite = array(
			'slug' => $rewrite_slug,
			'with_front' => true,
			'pages' => true,
			'feeds' => true,
		);
		$args = array(
			'label' => __(ucwords($this->post_type), 'gidi-flights'),
			'description' => __('Used this to add bookings of flights', 'gidi-flights'),
			'labels' => $labels,
			'supports' => array('title', 'revisions'),
			'taxonomies' => array(),
			'hierarchical' => false,
			'public' => false,
			'show_ui' => true,
			'show_in_menu' => false,
			'menu_position' => 5,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => false,
			'can_export' => true,
			'has_archive' => true,
			'exclude_from_search' => false,
			'publicly_queryable' => true,
			'rewrite' => $rewrite,
			'capability_type' => 'page',
			'show_in_rest' => true,
		);
		register_post_type($this->post_type, $args);
	}

	public function register_sms_notifications_type()
	{
		$this->post_type = str_replace("-", "_", $this->plugin_name) . "_snotify";
		$this->post_type_name = "SMS Notifications";
		$rewrite_slug = "sms_notifications";

		$labels = array(
			'name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'singular_name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'menu_name' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'name_admin_bar' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'archives' => __('SMS Notification Archives', 'gidi-flights'),
			'attributes' => __('SMS Notification Attributes', 'gidi-flights'),
			'parent_item_colon' => __('Parent SMS Notification:', 'gidi-flights'),
			'all_items' => __('All SMS Notifications', 'gidi-flights'),
			'add_new_item' => __('Compose SMS Notification', 'gidi-flights'),
			'add_new' => __('Compose', 'gidi-flights'),
			'new_item' => __('New SMS Notification', 'gidi-flights'),
			'edit_item' => __('Edit SMS Notification', 'gidi-flights'),
			'update_item' => __('Update SMS Notification', 'gidi-flights'),
			'view_item' => __('View SMS Notification', 'gidi-flights'),
			'view_items' => __('View SMS Notifications', 'gidi-flights'),
			'search_items' => __('Search SMS Notification', 'gidi-flights'),
			'not_found' => __('No SMS Notifications to Display... Please <a href="' . admin_url('post-new.php?post_type=' . $this->post_type) . '">Create</a> One', 'gidi-flights'),
			'not_found_in_trash' => __('Not found in Trash', 'gidi-flights'),
			'featured_image' => __('Featured Image', 'gidi-flights'),
			'set_featured_image' => __('Set featured image', 'gidi-flights'),
			'remove_featured_image' => __('Remove featured image', 'gidi-flights'),
			'use_featured_image' => __('Use as featured image', 'gidi-flights'),
			'insert_into_item' => __('Insert into item', 'gidi-flights'),
			'uploaded_to_this_item' => __('Uploaded to this item', 'gidi-flights'),
			'items_list' => __('SMS Notifications list', 'gidi-flights'),
			'items_list_navigation' => __('SMS Notifications list navigation', 'gidi-flights'),
			'filter_items_list' => __('Filter items list', 'gidi-flights'),
		);
		$rewrite = array(
			'slug' => $rewrite_slug,
			'with_front' => true,
			'pages' => true,
			'feeds' => true,
		);
		$args = array(
			'label' => __(ucwords($this->post_type), 'gidi-flights'),
			'description' => __('Used to Log SMS for customers', 'gidi-flights'),
			'labels' => $labels,
			'supports' => array('title', 'editor', 'revisions'),
			// 'taxonomies'            => array( str_replace("-", "_", $this->plugin_name) . '_deals_category' ),
			'taxonomies' => array(),
			'hierarchical' => false,
			'public' => false,
			'show_ui' => true,
			'show_in_menu' => false,
			'menu_position' => 5,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => false,
			'can_export' => true,
			'has_archive' => true,
			'exclude_from_search' => false,
			'publicly_queryable' => true,
			'rewrite' => $rewrite,
			'capability_type' => 'page',
			'show_in_rest' => true,
		);
		register_post_type($this->post_type, $args);
	}

	public function register_email_notifications_type()
	{
		$this->post_type = str_replace("-", "_", $this->plugin_name) . "_enotify";
		$this->post_type_name = "Email Notifications";
		$rewrite_slug = "email_notifications";

		$labels = array(
			'name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'singular_name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'menu_name' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'name_admin_bar' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'archives' => __('Email Notifcations Archives', 'gidi-flights'),
			'attributes' => __('Email Notifcations Attributes', 'gidi-flights'),
			'parent_item_colon' => __('Parent Email Notifcations:', 'gidi-flights'),
			'all_items' => __('All Email Notifcationss', 'gidi-flights'),
			'add_new_item' => __('Compose Email Notifcations', 'gidi-flights'),
			'add_new' => __('Compose', 'gidi-flights'),
			'new_item' => __('New Email Notifcations', 'gidi-flights'),
			'edit_item' => __('Edit Email Notifcations', 'gidi-flights'),
			'update_item' => __('Update Email Notifcations', 'gidi-flights'),
			'view_item' => __('View Email Notifcations', 'gidi-flights'),
			'view_items' => __('View Email Notifcations', 'gidi-flights'),
			'search_items' => __('Search Email Notifcations', 'gidi-flights'),
			'not_found' => __('No Email Notifications to Display... Please <a href="' . admin_url('post-new.php?post_type=' . $this->post_type) . '">Create</a> One', 'gidi-flights'),
			'not_found_in_trash' => __('Not found in Trash', 'gidi-flights'),
			'featured_image' => __('Featured Image', 'gidi-flights'),
			'set_featured_image' => __('Set featured image', 'gidi-flights'),
			'remove_featured_image' => __('Remove featured image', 'gidi-flights'),
			'use_featured_image' => __('Use as featured image', 'gidi-flights'),
			'insert_into_item' => __('Insert into item', 'gidi-flights'),
			'uploaded_to_this_item' => __('Uploaded to this item', 'gidi-flights'),
			'items_list' => __('Email Notifcations list', 'gidi-flights'),
			'items_list_navigation' => __('Email Notifcations list navigation', 'gidi-flights'),
			'filter_items_list' => __('Filter items list', 'gidi-flights'),
		);
		$rewrite = array(
			'slug' => $rewrite_slug,
			'with_front' => true,
			'pages' => true,
			'feeds' => true,
		);
		$args = array(
			'label' => __(ucwords($this->post_type), 'gidi-flights'),
			'description' => __('Used to Log Emails for customers', 'gidi-flights'),
			'labels' => $labels,
			'supports' => array('title', 'editor', 'revisions'),
			// 'taxonomies'            => array( str_replace("-", "_", $this->plugin_name) . '_deals_category' ),
			'taxonomies' => array(),
			'hierarchical' => false,
			'public' => false,
			'show_ui' => true,
			'show_in_menu' => false,
			'menu_position' => 5,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => false,
			'can_export' => true,
			'has_archive' => true,
			'exclude_from_search' => false,
			'publicly_queryable' => true,
			'rewrite' => $rewrite,
			'capability_type' => 'page',
			'show_in_rest' => true,
		);
		register_post_type($this->post_type, $args);
	}

	public function register_notifications_templates_type()
	{
		$this->post_type = str_replace("-", "_", $this->plugin_name) . "_ntpls";
		$this->post_type_name = "Notification Templates";
		$rewrite_slug = "notifications_templates";

		$labels = array(
			'name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'singular_name' => _x(ucwords(str_replace("_", " ", $this->post_type_name)), ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'menu_name' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'name_admin_bar' => __(ucwords(str_replace("_", " ", $this->post_type_name)), 'gidi-flights'),
			'archives' => __('Notification Template Archives', 'gidi-flights'),
			'attributes' => __('Notification Template Attributes', 'gidi-flights'),
			'parent_item_colon' => __('Parent Notification Template:', 'gidi-flights'),
			'all_items' => __('All Notification Templates', 'gidi-flights'),
			'add_new_item' => __('Add New Notification Template', 'gidi-flights'),
			'add_new' => __('Add New', 'gidi-flights'),
			'new_item' => __('New Notification Template', 'gidi-flights'),
			'edit_item' => __('Edit Notification Template', 'gidi-flights'),
			'update_item' => __('Update Notification Template', 'gidi-flights'),
			'view_item' => __('View Notification Template', 'gidi-flights'),
			'view_items' => __('View Notification Templates', 'gidi-flights'),
			'search_items' => __('Search Notification Template', 'gidi-flights'),
			'not_found' => __('Not found', 'gidi-flights'),
			'not_found_in_trash' => __('Not found in Trash', 'gidi-flights'),
			'featured_image' => __('Featured Image', 'gidi-flights'),
			'set_featured_image' => __('Set featured image', 'gidi-flights'),
			'remove_featured_image' => __('Remove featured image', 'gidi-flights'),
			'use_featured_image' => __('Use as featured image', 'gidi-flights'),
			'insert_into_item' => __('Insert into item', 'gidi-flights'),
			'uploaded_to_this_item' => __('Uploaded to this item', 'gidi-flights'),
			'items_list' => __('Notification Templates list', 'gidi-flights'),
			'items_list_navigation' => __('Notification Templates list navigation', 'gidi-flights'),
			'filter_items_list' => __('Filter items list', 'gidi-flights'),
		);
		$rewrite = array(
			'slug' => $rewrite_slug,
			'with_front' => true,
			'pages' => true,
			// 'feeds' => true,
		);
		$args = array(
			'label' => __(ucwords($this->post_type), 'gidi-flights'),
			'description' => __('Used to Log Notifications For Customers', 'gidi-flights'),
			'labels' => $labels,
			'supports' => array('title', 'editor'),
			// 'taxonomies'            => array( str_replace("-", "_", $this->plugin_name) . '_deals_category' ),
			'taxonomies' => array(),
			'hierarchical' => false,
			'public' => false,
			'show_ui' => true,
			'show_in_menu' => false,
			'menu_position' => 5,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => false,
			'can_export' => true,
			'has_archive' => true,
			'exclude_from_search' => true,
			'publicly_queryable' => true,
			'rewrite' => $rewrite,
			'capability_type' => 'page',
			'show_in_rest' => true,
		);
		register_post_type($this->post_type, $args);
	}

	public function remove_subactions_notification_temp_post_type($actions)
	{
		unset($actions['edit']);
		return $actions;
	}

	public function bulk_update_gidi_flights_ntpls($bulk_messages, $bulk_counts)
	{
		$bulk_messages['gidi_flights_ntpls'] = array(
			'updated' => _n('%s notification template updated.', '%s notification templates updated.', $bulk_counts['updated']),
			'locked' => _n('%s notification template not updated, somebody is editing it.', '%s notification templates not updated, somebody is editing them.', $bulk_counts['locked']),
			'deleted' => _n('%s notification template permanently deleted.', '%s notification templates permanently deleted.', $bulk_counts['deleted']),
			'trashed' => _n('%s notification template moved to the Trash.', '%s notification templates moved to the Trash.', $bulk_counts['trashed']),
			'untrashed' => _n('%s notification template restored from the Trash.', '%s notification templates restored from the Trash.', $bulk_counts['untrashed']),
		);

		return $bulk_messages;

	}

	public function bulk_update_gidi_flights_enotify($bulk_messages, $bulk_counts)
	{
		$bulk_messages['gidi_flights_enotify'] = array(
			'updated' => _n('%s email notification updated.', '%s email notifications updated.', $bulk_counts['updated']),
			'locked' => _n('%s email notification not updated, somebody is editing it.', '%s email notifications not updated, somebody is editing them.', $bulk_counts['locked']),
			'deleted' => _n('%s email notification permanently deleted.', '%s email notifications permanently deleted.', $bulk_counts['deleted']),
			'trashed' => _n('%s email notification moved to the Trash.', '%s email notifications moved to the Trash.', $bulk_counts['trashed']),
			'untrashed' => _n('%s email notification restored from the Trash.', '%s email notifications restored from the Trash.', $bulk_counts['untrashed']),
		);

		return $bulk_messages;

	}

	public function update_gidi_flights_ntpls($messages)
	{
		global $post;

		// get the preview link for notifications templates
		$preview_link = $this->get_preview_link($post);

		$messages['gidi_flights_ntpls'] = array(
			0 => '', // Unused. Messages start at index 1.
			1 => sprintf(__('Notification Template updated. <a href="%s">View Notification Template</a>'), esc_url($preview_link)),
			2 => __('Custom field updated.'),
			3 => __('Custom field deleted.'),
			4 => __('Notification Template updated.'),
			/* translators: %s: date and time of the revision */
			5 => isset($_GET['revision']) ? sprintf(__('Notification Template restored to revision from %s'), wp_post_revision_title((int)$_GET['revision'], false)) : false,
			6 => sprintf(__('Notification Template published. <a href="%s">View Notification Template</a>'), esc_url($preview_link)),
			7 => __('Notification Template saved.'),
			8 => sprintf(__('Notification Template submitted. <a target="_blank" href="%s">Preview Notification Template</a>'), esc_url(add_query_arg('preview', 'true', $preview_link))),
			9 => sprintf(
				__('Notification Template scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview Notification Template</a>'),
			  // translators: Publish box date format, see http://php.net/date
				date_i18n(__('M j, Y @ G:i'), strtotime($post->post_date)),
				esc_url($preview_link)
			),
			10 => sprintf(__('Notification Template draft updated. <a target="_blank" href="%s">Preview Notification Template</a>'), esc_url(add_query_arg('preview', 'true', $preview_link))),
		);

		return $messages;

	}

	public function update_gidi_flights_enotify($messages)
	{
		global $post;

		// get the preview link for notifications templates
		$preview_link = $this->get_preview_link($post);

		$messages['gidi_flights_ntpls'] = array(
			0 => '', // Unused. Messages start at index 1.
			1 => sprintf(__('Email Notification updated. <a href="%s">View Email Notification</a>'), esc_url($preview_link)),
			2 => __('Custom field updated.'),
			3 => __('Custom field deleted.'),
			4 => __('Email Notification updated.'),
			/* translators: %s: date and time of the revision */
			5 => isset($_GET['revision']) ? sprintf(__('Email Notification restored to revision from %s'), wp_post_revision_title((int)$_GET['revision'], false)) : false,
			6 => sprintf(__('Email Notification published. <a href="%s">View Email Notification</a>'), esc_url($preview_link)),
			7 => __('Email Notification saved.'),
			8 => sprintf(__('Email Notification submitted. <a target="_blank" href="%s">Preview Email Notification</a>'), esc_url(add_query_arg('preview', 'true', $preview_link))),
			9 => sprintf(
				__('Email Notification scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview Email Notification</a>'),
			  // translators: Publish box date format, see http://php.net/date
				date_i18n(__('M j, Y @ G:i'), strtotime($post->post_date)),
				esc_url($preview_link)
			),
			10 => sprintf(__('Email Notification draft updated. <a target="_blank" href="%s">Preview Email Notification</a>'), esc_url(add_query_arg('preview', 'true', $preview_link))),
		);

		return $messages;

	}

	public function remove_quick_edit_gidi_flights_ntpls($actions, $post)
	{
		 // Check for your post type.
		if ($post->post_type == "gidi_flights_ntpls") {

			unset($actions['view']);
			unset($actions['inline hide-if-no-js']);
	 
			// get the preview link for notifications templates
			$preview_link = $this->get_preview_link($post);

			/**
			 * merge the actinos all together
			 */
			$actions = array_merge($actions, array(
				'show_preview' => sprintf(
					'<a href="%1$s">%2$s</a>',
					esc_url($preview_link),
					'Preview'
				)
			));
		}

		return $actions;
	}

	/**
	 * get a preview link
	 *
	 * @return string
	 */
	public function get_preview_link($post)
	{
		// Build your links URL.
		$preview_page_id = get_option("gidi_flights_preview_notifications_page_id");
		$url = get_permalink($preview_page_id);
 
		// Maybe put in some extra arguments based on the post status.
		$preview_link = add_query_arg(
			array(
				'action' => 'preview',
				'notification_id' => $post->ID,
				'auth_form_so' => md5(uniqid('some_random')),
			),
			$url
		);

		return $preview_link;
	}

	public function set_custom_edit_gidi_flights_enotify_columns($columns)
	{

		$new_args = array();
		foreach ($columns as $key => $value) {
			if ($key == 'date') {
				$new_args['email'] = __('Email Address', 'gidi-flights');
				$new_args['to_be_sent_on'] = __('To Be Sent On', 'gidi-flights');
				$new_args['status'] = __('Status', 'gidi-flights');
			}
			$new_args[$key] = $value;
		}

		return $new_args;
	}

	function custom_gidi_flights_enotify_column($column, $post_id)
	{
		switch ($column) {

			case 'email':
				echo esc_attr(get_post_meta($post_id, 'gidi-flights-enotify_receiver_email', true));
				break;
			case 'status':
				$status = get_post_meta($post_id, 'gidi-flights-enotify_sending_status', true);
				echo !empty($status) ? esc_attr($status) : "Not Yet Done";
				break;
			case 'to_be_sent_on':
				$time = get_post_meta($post_id, 'gidi-flights-enotify_sending_time', true);
				$date = get_post_meta($post_id, 'gidi-flights-enotify_sending_date', true);

				echo (!empty($time) && !empty($date)) ? esc_attr($date) . " At " . esc_attr($time) : "Not Set";
				break;
			case 'created_on':
				echo get_the_date() . " At " . get_the_time();
				break;

		}
	}

	public function set_custom_edit_gidi_flights_snotify_columns($columns)
	{
		$new_args = array();
		foreach ($columns as $key => $value) {
			if ($key == 'date') {
				$new_args['phone_number'] = __('Phone Number', 'gidi-flights');
				$new_args['to_be_sent_on'] = __('To Be Sent On', 'gidi-flights');
				$new_args['status'] = __('Status', 'gidi-flights');
			}
			$new_args[$key] = $value;
		}

		return $new_args;
	}

	function custom_gidi_flights_snotify_column($column, $post_id)
	{
		switch ($column) {

			case 'phone_number':
				echo esc_attr(get_post_meta($post_id, 'gidi-flights-snotify_receiver_phone', true));
				break;
			case 'status':
				$status = get_post_meta($post_id, 'gidi-flights-snotify_sending_status', true);
				echo !empty($status) ? esc_attr($status) : "Not Yet Done";
				break;
			case 'to_be_sent_on':
				$time = get_post_meta($post_id, 'gidi-flights-snotify_sending_time', true);
				$date = get_post_meta($post_id, 'gidi-flights-snotify_sending_date', true);

				echo (!empty($time) && !empty($date)) ? esc_attr($date) . " At " . esc_attr($time) : "Not Set";
				break;
			case 'created_on':
				echo get_the_date() . " At " . get_the_time();
				break;

		}
	}

	public function posttype_admin_css()
	{
		global $post_type;
		$post_types = array('gidi_flights_booking', 'gidi_flights_enotify', 'gidi_flights_snotify', 'gidi_flights_ntpls');

		if (in_array($post_type, $post_types)) {
			$html = '<style type="text/css">#post-preview, #view-post-btn{display: none;}</style>';
			echo $html;
		}
	}

	public function change_enter_title_here($title)
	{
		$screen = get_current_screen();

		if ('gidi_flights_booking' == $screen->post_type) {
			$title = 'Booking Code';
		}
		if ('gidi_flights_deals' == $screen->post_type) {
			$title = 'Special Deal Title';
		}
		if ('gidi_flights_enotify' == $screen->post_type) {
			$title = 'Subject';
		}
		if ('gidi_flights_snotify' == $screen->post_type) {
			$title = 'Subject';
		}
		if ('gidi_flights_ntpls' == $screen->post_type) {
			$title = 'Template Name';
		}

		return $title;
	}

}
