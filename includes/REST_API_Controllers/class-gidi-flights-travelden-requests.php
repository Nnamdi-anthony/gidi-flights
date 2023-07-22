<?php

class Gidi_Flights_TravelDen_Requests extends WP_REST_Controller
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
		$base = "search-for-flight";
		register_rest_route($namespace, "/" . $base, array(
			array(
				'methods' => WP_REST_Server::CREATABLE,
				'callback' => array($this, 'search_flights'),
				'args' => array(),
				'permission_callback' => array($permisions, 'permission_checks'),
			)
		));

		$base = "get-airports";
		register_rest_route($namespace, "/" . $base, array(
			array(
				'methods' => WP_REST_Server::READABLE,
				'callback' => array($this, 'get_airports'),
				'args' => array(),
				'permission_callback' => array($permisions, 'permission_checks'),
			)
		));

		$base = "get-last-search-results";
		register_rest_route($namespace, "/" . $base, array(
			array(
				'methods' => WP_REST_Server::READABLE,
				'callback' => array($this, 'get_search_results'),
				'args' => array(),
				'permission_callback' => array($permisions, 'permission_checks'),
			)
		));

	}

	public function get_airports($request)
	{

		$curl = curl_init();
		$travelden_options = get_option('gidi_flights_traveldens_options');

		curl_setopt_array($curl, array(
			CURLOPT_URL => $travelden_options['travelden_api_base_url'] . "/airports?city=" . $request['city'],
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 0,
			CURLOPT_FOLLOWLOCATION => false,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "GET",
			CURLOPT_HTTPHEADER => array(
				"cache-control: no-cache",
				"Content-Type: application/json",
				"X-API-KEY: " . $travelden_options['travelden_api_key'],
				"X-Auth-Token: " . $travelden_options['travelden_api_token']
			),
		));

		$response = curl_exec($curl);
		$err = curl_error($curl);

		curl_close($curl);

		if ($err) {
			return new WP_Error('cant-find-airports', __($err, 'gidi-flights'), array('status' => 500));
		}

		$nwRes = json_decode($response);
		return new WP_REST_Response($nwRes, 200);
	}

	public function search_flights($request)
	{

		$curl = curl_init();
		$travelden_options = get_option('gidi_flights_traveldens_options');

		// option_pieces
		$travel_class = !empty($request['travel_class']) ? $request['travel_class'] : "Economy";
		$num_of_adults = !empty($request['num_of_adults']) ? $request['num_of_adults'] : 1;
		$num_of_children = !empty($request['num_of_children']) ? $request['num_of_children'] : 0;
		$num_of_infants = !empty($request['num_of_infants']) ? $request['num_of_infants'] : 0;
		$trip_type = !empty($request['trip_type']) ? $request['trip_type'] : "one_way";
		$departure_city = !empty($request['departure_city']) ? $request['departure_city'] : "LOS";
		$departure_time = !empty($request['departure_time']) ? $request['departure_time'] : date("Y-m-d");
		$arrival_city = !empty($request['arrival_city']) ? $request['arrival_city'] : "DXB";
		$arrival_time = !empty($request['arrival_time']) ? $request['arrival_time'] : date("Y-m-d");

		$settData = "{";
		$settData .= "\n\t\"segments\": [\n\t\t";
		$settData .= "{\n\t\t\t\"origin\": \"" . $departure_city . "\",\n\t\t\t\"arriving\": \"" . $arrival_city . "\",\n\t\t\t\"departureDate\": \"" . $departure_time . "T00:00:00\"\n\t\t}";
		if ($trip_type == 'return_trip' || $trip_type == 'return') $settData .= ",\n\t\t{\n\t\t\t\"arriving\": \"" . $departure_city . "\",\n\t\t\t\"origin\": \"" . $arrival_city . "\",\n\t\t\t\"departureDate\": \"" . $arrival_time . "T00:00:00\"\n\t\t}";
		$settData .= "\n\t]";
		$settData .= ",\n\t\"passengers\": [";
		$settData .= "{\n\t\t\t\"quantity\": $num_of_adults,\n\t\t\t\"code\": \"ADULT\"\n\t\t}";
		$settData .= ",{\n\t\t\t\"quantity\": $num_of_children,\n\t\t\t\"code\": \"CHILD\"\n\t\t}";
		$settData .= ",{\n\t\t\t\"quantity\": $num_of_infants,\n\t\t\t\"code\": \"INFANT\"\n\t\t}";
		$settData .= "\n\t]";
		$settData .= ",\n\t\"sessionId\": \"unique_session_id\"";
		$settData .= ",\n\t\"preferredCabin\": \"$travel_class\"\n";
		$settData .= "}";

		curl_setopt_array($curl, array(
			CURLOPT_URL => $travelden_options['travelden_api_base_url'] . "/search/itineraries",
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_SSL_VERIFYPEER => false,
			CURLOPT_SSL_VERIFYHOST => false,
			CURLOPT_FOLLOWLOCATION => false,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "POST",
			CURLOPT_POSTFIELDS => $settData,
			CURLOPT_HTTPHEADER => array(
				"cache-control: no-cache",
				"Content-Type: application/json",
				"X-API-KEY: " . $travelden_options['travelden_api_key'],
				"X-Auth-Token: " . $travelden_options['travelden_api_token']
			),
		));

		$response = curl_exec($curl);
		$err = curl_error($curl);

		curl_close($curl);

		if ($err) {
			return new WP_Error('cant-fetch-flight-plan', __($err, 'gidi-flights'), array('status' => 500));
		}

		$nwRes = json_decode($response);
		return new WP_REST_Response($nwRes, 200);
	}

	public function get_search_results($request)
	{

		$curl = curl_init();
		$travelden_options = get_option('gidi_flights_traveldens_options');

		curl_setopt_array($curl, array(
			CURLOPT_URL => $travelden_options['travelden_api_base_url'] . "/itinerary/avail?sessionId=unique_session_id&refId=is",
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 0,
			CURLOPT_FOLLOWLOCATION => false,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "GET",
			CURLOPT_HTTPHEADER => array(
				"cache-control: no-cache",
				"Content-Type: application/json",
				"X-API-KEY: " . $travelden_options['travelden_api_key'],
				"X-Auth-Token: " . $travelden_options['travelden_api_token']
			),
		));

		$response = curl_exec($curl);
		$err = curl_error($curl);

		curl_close($curl);

		if ($err) {
			// echo "cURL Error #:" . $err;
			return new WP_Error('cant-delete', __($err, 'gidi-flights'), array('status' => 500));
		}

		$nwRes = json_decode($response);

		return new WP_REST_Response($nwRes, 200);
	}
}
