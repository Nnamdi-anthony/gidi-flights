<?php

class Gidi_Flights_API_Init extends WP_REST_Controller
{
	/**
	 * get the name of the plugin
	 *
	 * @var string - the name of the plugin
	 */
	protected $plugin_name;

	public function __construct($plugin_name)
	{
		$this->plugin_name = $plugin_name;
	}

	public function init_travels_endpoints()
	{
		$endpoint = new Gidi_Flights_TravelDen_Requests();
		$endpoint->set_plugin_name($this->plugin_name);
		$endpoint->register_routes();
	}

	public function init_passengers_endpoints()
	{
		$endpoint = new Gidi_Flights_Passenger_Requests();
		$endpoint->set_plugin_name($this->plugin_name);
		$endpoint->register_routes();
	}

	public function init_tempcart_endpoints()
	{
		$endpoint = new Gidi_Flights_Tempcart_Requests();
		$endpoint->set_plugin_name($this->plugin_name);
		$endpoint->register_routes();
	}
}
