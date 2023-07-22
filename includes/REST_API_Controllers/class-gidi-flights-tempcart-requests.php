<?php

class Gidi_Flights_Tempcart_Requests extends WP_REST_Controller
{

	protected $plugin_name;

	public function set_plugin_name($plugin_name)
	{
		$this->plugin_name = $plugin_name;
	}

	/**
	 * register the routes for the objects of the controller
	 *
	 * @return void
	 */
	public function register_routes()
	{
		$permisions = new Gidi_Flights_API_Permission_Checker();

		$version = "1";
		$namespace = $this->plugin_name . "/v" . $version;
		$base = "temp/checkout";
		register_rest_route($namespace, "/" . $base, array(
			array(
				'methods' => WP_REST_Server::CREATABLE,
				'callback' => array(
					$this,
					'create_temp_cart'
				),
				'args' => [
					'arriving_airport' => [
						'required' => true,
					],
					'departing_airport' => [
						'required' => true,
					],
					'adult_count' => [
						'required' => true,
						'default' => '1'
					],
					'child_count' => [
						'required' => false,
						'default' => '0'
					],
					'infant_count' => [
						'required' => false,
						'default' => '0'
					],
					'class_type' => [
						'required' => false,
						'default' => 'ECONOMY'
					],
					'full_search_params' => [
						'required' => false,
					],
					'full_search_results' => [
						'required' => false,
					],
					'ticket_locale' => [
						'required' => false,
					],
					'trip_type' => [
						'required' => false,
						'default' => 'RETURN'
					],
				],
				'permission_callback' => array(
					$permisions,
					'no_priv_permission_check'
				)
			)
		));
		$base = "temp/checkout/(?P<uuid>[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})";
		register_rest_route($namespace, "/" . $base, array(
			array(
				'methods' => WP_REST_Server::READABLE,
				'callback' => array(
					$this,
					'fetch_temp_cart'
				),
				'args' => [
					'uuid' => [
						'required' => true,
					],
				],
				'permission_callback' => array(
					$permisions,
					'no_priv_permission_check'
				)
			)
		));
	}

	/**
	 * use to delete unwanted passengers
	 *
	 * @param string $request
	 * @return void
	 */
	public function create_temp_cart($request)
	{

		global $wpdb;

		$table_name = $wpdb->prefix . "gf_flights_tempcart";

		$temp_stamp = strtotime('+1day'); // TODO dynamic set time in admin settings
		$expires_at = date('Y-m-d H:i:s', $temp_stamp);
		$uuid = wp_generate_uuid4();

		$dataToSend = [
			'ip_address' => Gidi_Flights_Helpers::get_client_ip(),
			'uuid' => $uuid,
			'expires_at' => $expires_at,
			'full_search_params' => $request['full_search_params'],
			'full_search_results' => $request['full_search_results'],
			'adult_count' => $request['adult_count'],
			'child_count' => $request['child_count'],
			'infant_count' => $request['infant_count'],
			'd_airport' => $request['departing_airport'],
			'a_airport' => $request['arriving_airport'],
			'trip_type' => $request['trip_type'],
			'class_type' => $request['class_type'],
			'ticket_locale' => $request['ticket_locale'],
		];

		if ($wpdb->insert($table_name, $dataToSend)) {
			return new WP_REST_Response(['uuid' => $uuid], 200);
		}

		return new WP_Error('cant-create-tempcheckout', __('Cant Create Temporary Checkout, Please Try again', 'text-domain'), array(
			'status' => 500,
			'error' => $wpdb->last_error
		));
	}

	public function fetch_temp_cart($request)
	{
		global $wpdb;

		$table_name = $wpdb->prefix . "gf_flights_tempcart";
		$uuid = $request['uuid'];

		$query = $wpdb->get_row("SELECT * FROM {$table_name} where uuid='{$uuid}'", ARRAY_A);

		$query['full_search_results'] = json_decode($query['full_search_results']);
		$query['full_search_params'] = json_decode($query['full_search_params']);

		$args = array(
			'meta_value' => $uuid,
			'post_type' => str_replace("-", "_", $this->plugin_name . "_booking"),
			'meta_key' => 'gidi-flights_uuid',
			'posts_per_page' => 1,
		);
		$qclass = new WP_Query($args);

		while ($qclass->have_posts()) : $qclass->the_post();
			$table_namea = $wpdb->prefix . "gf_passengers";
			$id = $qclass->post->ID;
			$results    = $wpdb->get_results("SELECT first_name, last_name, date_of_birth  from {$table_namea} where booking_id='{$id}'");
			$query['passengers'] = $results;
			$query['booking_code'] = get_the_title();
			$query['email'] = get_post_meta($id, 'gidi-flights_contact_email', true);
			$query['phone_number'] = get_post_meta($id, 'gidi-flights_contact_phone_number', true);
			$query['payment_method'] = get_post_meta($id, 'gidi-flights-payment_method', true);
		endwhile;
		wp_reset_postdata();

		if ($query) {
			// return new WP_REST_Response($query, 200);
			return new WP_REST_Response($query, 200);
		}

		return new WP_Error('cant-fetch-current-tempcheckout', __('Cant Fetch Current Temporary Checkout Data', 'text-domain'), array(
			'status' => 500,
		));
	}
}
