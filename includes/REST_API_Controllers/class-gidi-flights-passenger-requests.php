<?php

class Gidi_Flights_Passenger_Requests extends WP_REST_Controller
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
		$base = "passengers/(?P<id>\d+)";
		register_rest_route($namespace, "/" . $base, array(
			array(
				'methods' => WP_REST_Server::DELETABLE,
				'callback' => array(
					$this,
					'delete_this_passenger'
				),
				'args' => [
					'id' => [
						'required' => true
					]
				],
				'permission_callback' => array(
					$permisions,
					'permission_checks'
				)
			)
		));
		$base = "passengers";
		register_rest_route($namespace, "/" . $base, array(
			array(
				'methods' => WP_REST_Server::CREATABLE,
				'callback' => array(
					$this,
					'create_passengers'
				),
				'args' => [],
				'permission_callback' => array(
					$permisions,
					'permission_checks'
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
	public function delete_this_passenger($request)
	{
		global $wpdb;

		$current_id = $request['id'];
		$table_name = $wpdb->prefix . "gf_passengers";

		if ($wpdb->delete($table_name, array(
			'ID' => $current_id
		)))
			return new WP_REST_Response(true, 200);

		return new WP_Error('cant-delete-passenger', __('message', 'text-domain'), array(
			'status' => 500
		));
	}

	public function create_passengers($request)
	{
		global $wpdb;

		$checkout_uid = $request['uid'];
		// booking code generation
		$booking_code = Gidi_Flights_Helpers::generate_booking_code();
		$current_flight_data = wp_remote_request(site_url("/wp-json/gidi-flights/v1/temp/checkout/{$checkout_uid}"), array(
			'method' => 'GET'
		));

		$current_flight_data = wp_remote_retrieve_body($current_flight_data);
		$curr_data = json_decode($current_flight_data);
		$selected_flight_data = $curr_data->full_search_results;

		$post_id = wp_insert_post(array(
			'post_type' => str_replace("-", "_", $this->plugin_name . "_booking"),
			'post_title' => $booking_code,
			'post_status' => 'publish',
			'meta_input' => array(
				'gidi-flights-payment_status' => 'not_paid',
				'gidi-flights-booking_status' => 'not_booked',
				'gidi-flights-selected_flight_data' => json_encode($selected_flight_data),
				'gidi-flights-payment_method' => $request['paymentMethod'],
				'gidi-flights_uuid' => $checkout_uid,
				'gidi-flights_contact_phone_number' => $request['contactInformation']['phoneNumber'],
				'gidi-flights_contact_email' => $request['contactInformation']['email'],
			)
		), true);

		if (!empty($request['passengerData'])) {
			foreach ($request['passengerData'] as $i => $passenger) {
				$table_name = $wpdb->prefix . "gf_passengers";

				$nm_xploded = explode(" ", $passenger['otherNames']);
				if (is_array($nm_xploded) && count($nm_xploded) > 1) {
					$first_name_choosen  = $nm_xploded[0];
					$middle_name_choosen = $nm_xploded[1];
				} else {
					$first_name_choosen  = $passenger['otherNames'];
					$middle_name_choosen = "";
				}

				// insertion data
				$insertion_data                              = array();
				$insertion_data['modified_on']               = date("Y-m-d h:s:i");
				$insertion_data['booking_id']                = $post_id;
				$insertion_data['first_name']                = $first_name_choosen;
				$insertion_data['middle_name']               = $middle_name_choosen;
				$insertion_data['last_name']                 = $passenger['surname'];
				$insertion_data['passenger_type']            = $passenger['passenger_type'];
				$insertion_data['document_issuance_country'] = $passenger['document_issuance_country'];
				$insertion_data['document_expiry_date']      = $passenger['document_expiration_date'];
				$insertion_data['document_number']           = $passenger['document_number'];
				$insertion_data['document_type']             = $passenger['document_type'];
				$insertion_data['date_of_birth']             = $passenger['date_of_birth'];
				$insertion_data['nationality']               = $passenger['nationality'];
				$insertion_data['gender']                    = $passenger['gender'];
				// if ($i <= 1) {
				// 	$insertion_data['phone_number']              = $request['contactInformation']['phoneNumber'];
				// 	$insertion_data['email']                     = $request['contactInformation']['email'];
				// }

				// insert
				$wpdb->insert($table_name, $insertion_data);
			}

			return new WP_REST_Response($checkout_uid, 200);
		} else {
			return new WP_Error('cant-create-passenger', __('Sorry But Your Request Sent is wrong', 'text-domain'), array(
				'status' => 500
			));
		}

		return new WP_Error('cant-init-create-passenger', __('Sorry But Your Request Sent is not complete', 'text-domain'), array(
			'status' => 500
		));
	}
}
