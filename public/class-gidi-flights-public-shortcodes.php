<?php

class Gidi_Flights_Public_Shortcodes {

	private $plugin_name;

	public function __construct( $plugin_name ) {
		$this->plugin_name = str_replace( "-", "_", $plugin_name );
	}

	public function gf_preview_notifications() {
		if ( ! isset( $_GET['action'] ) && ! isset( $_GET['notification_id'] ) && ! isset( $_GET['auth_form_so'] ) ) {
			die( "sorry no direct to this page" );
		}

		// extract the keys to variables
		extract( $_GET );
		$notification_id   = $_GET['notification_id'];
		$linked_tax        = wp_get_post_terms( $notification_id, 'gidi_flights_ntpls_cat' );
		$notification_type = ! empty( $linked_tax ) ? $linked_tax[0]->slug : "default";
		$qargs             = array(
			'post_type' => 'gidi_flights_ntpls',
			'p'         => $notification_id
		);
		$query             = new WP_Query( $qargs );

		while ( $query->have_posts() ) {
			$query->the_post();

			$content = get_the_content();
			$find    = array( "{{fullname}}", "{{email}}", "{{phone_number}}", "{{ticket_id}}", "{{ticket_name}}" );
			$replace = array(
				"John Smith",
				"abc@example.com",
				"08091234567",
				"COM-221-21234",
				"TRAVEL TO LAND OF CODITES, Englinde"
			);
			$content = str_replace( $find, $replace, $content );
			if ( $notification_type == 'email' ) {
				$content = wpautop( $content );
			}

			echo $content;
		}

		wp_reset_postdata();

	}

	public function init_landing_page() {
		require_once plugin_dir_path( __FILE__ ) . "partials/landing-page/homepage.php";
	}

	public function search_page() {
		require_once plugin_dir_path( __FILE__ ) . "partials/search-page/search-html.php";
	}

	public function booking_page() {
		require_once plugin_dir_path( __FILE__ ) . "partials/bookings-page/bookings-page.php";
	}
}
