<?php

/**
 * Register all actions and filters for the plugin
 *
 * @link       https://github.com/Nnamdi-anthony/
 * @since      1.0.0
 *
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/includes
 */

/**
 * Register all actions and filters for the plugin.
 *
 * Maintain a list of all hooks that are registered throughout
 * the plugin, and register them with the WordPress API. Call the
 * run function to execute the list of actions and filters.
 *
 * @package    Gidi_Flights
 * @subpackage Gidi_Flights/includes
 * @author     Emeodi Nanmdi <emeodi_nnamdi@yahoo.com>
 */
class Gidi_Flights_Loader
{

	/**
	 * The array of actions registered with WordPress.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      array    $actions    The actions registered with WordPress to fire when the plugin loads.
	 */
	protected $actions;

	/**
	 * The array of filters registered with WordPress.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      array    $filters    The filters registered with WordPress to fire when the plugin loads.
	 */
	protected $filters;

	/**
	 * The array of shortcodes registered with WordPress.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      array    $shortcodes    The shortcodes registered with WordPress to fire when the plugin loads.
	 */
	protected $shortcodes;

	/**
	 * The array of ajax_events registered with WordPress.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      array    $ajax_events    The ajax events registered with WordPress to fire when the plugin loads.
	 */
	protected $ajax_events;

	/**
	 * The array of rest_api_inits registered with WordPress.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      array    $rest_api_inits    The api endpoints to be registered with WordPress to fire when the plugin loads.
	 */
	protected $rest_api_inits;

	/**
	 * Initialize the collections used to maintain the actions, shortcodes, ajax events and filters.
	 *
	 * @since    1.0.0
	 */
	public function __construct()
	{

		$this->actions = array();
		$this->filters = array();
		$this->shortcodes = array();
		$this->ajax_events = array();
		$this->rest_api_inits = array();

	}

	/**
	 * Add a new action to the collection to be registered with WordPress.
	 *
	 * @since    1.0.0
	 * @param    string               $hook             The name of the WordPress action that is being registered.
	 * @param    object               $component        A reference to the instance of the object on which the action is defined.
	 * @param    string               $callback         The name of the function definition on the $component.
	 * @param    int                  $priority         Optional. The priority at which the function should be fired. Default is 10.
	 * @param    int                  $accepted_args    Optional. The number of arguments that should be passed to the $callback. Default is 1.
	 */
	public function add_action($hook, $component, $callback, $priority = 10, $accepted_args = 1)
	{
		$this->actions = $this->add($this->actions, $hook, $component, $callback, $priority, $accepted_args);
	}

	/**
	 * Add a new filter to the collection to be registered with WordPress.
	 *
	 * @since    1.0.0
	 * @param    string               $hook             The name of the WordPress filter that is being registered.
	 * @param    object               $component        A reference to the instance of the object on which the filter is defined.
	 * @param    string               $callback         The name of the function definition on the $component.
	 * @param    int                  $priority         Optional. The priority at which the function should be fired. Default is 10.
	 * @param    int                  $accepted_args    Optional. The number of arguments that should be passed to the $callback. Default is 1
	 */
	public function add_filter($hook, $component, $callback, $priority = 10, $accepted_args = 1)
	{
		$this->filters = $this->add($this->filters, $hook, $component, $callback, $priority, $accepted_args);
	}

	/**
	 * Add a new filter to the collection to be registered with WordPress.
	 *
	 * @since    1.0.0
	 * @param    object               $component        A reference to the instance of the object on which the filter is defined.
	 * @param    string               $callback         The name of the function definition on the $component.
	 * @param    int                  $priority         Optional. The priority at which the function should be fired. Default is 10.
	 * @param    int                  $accepted_args    Optional. The number of arguments that should be passed to the $callback. Default is 1
	 */
	public function add_api_endpoint($component, $callback, $priority = 10, $accepted_args = 1)
	{
		$this->rest_api_inits = $this->add($this->rest_api_inits, "rest_api_init", $component, $callback, $priority, $accepted_args);
	}

	/**
	 * Add a new shortcodes to the collection to be registered with WordPress.
	 *
	 * @since    1.0.0
	 * @param    string               $hook             The name of the WordPress shortcodes that is being registered.
	 * @param    object               $component        A reference to the instance of the object on which the shortcodes is defined.
	 * @param    string               $callback         The name of the function definition on the $component.
	 */
	public function add_shortcode($hook, $component, $callback)
	{
		$this->shortcodes = $this->add($this->shortcodes, $hook, $component, $callback, '', '');
	}

	/**
	 * Add a new ajax_event to the collection to be registered with WordPress.
	 *
	 * @since    1.0.0
	 * @param    string               $hook             The name of the WordPress ajax_event that is being registered.
	 * @param    object               $component        A reference to the instance of the object on which the ajax_event is defined.
	 * @param    string               $callback         The name of the function definition on the $component.
	 */
	public function add_ajax_event($hook, $component, $callback, $priority = 10, $accepted_args = 1)
	{
		$this->ajax_events = $this->add($this->ajax_events, $hook, $component, $callback, $priority, $accepted_args);
	}

	/**
	 * A utility function that is used to register the actions and hooks into a single
	 * collection.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @param    array                $hooks            The collection of hooks that is being registered (that is, actions or filters).
	 * @param    string               $hook             The name of the WordPress filter that is being registered.
	 * @param    object               $component        A reference to the instance of the object on which the filter is defined.
	 * @param    string               $callback         The name of the function definition on the $component.
	 * @param    int                  $priority         The priority at which the function should be fired.
	 * @param    int                  $accepted_args    The number of arguments that should be passed to the $callback.
	 * @return   array                                  The collection of actions and filters registered with WordPress.
	 */
	private function add($hooks, $hook, $component, $callback, $priority, $accepted_args)
	{

		$hooks[] = array(
			'hook' => $hook,
			'component' => $component,
			'callback' => $callback,
			'priority' => $priority,
			'accepted_args' => $accepted_args
		);

		return $hooks;

	}

	/**
	 * Register the filters and actions with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run()
	{

		foreach ($this->filters as $hook) {
			add_filter($hook['hook'], array($hook['component'], $hook['callback']), $hook['priority'], $hook['accepted_args']);
		}

		foreach ($this->actions as $hook) {
			add_action($hook['hook'], array($hook['component'], $hook['callback']), $hook['priority'], $hook['accepted_args']);
		}

		foreach ($this->shortcodes as $hook) {
			add_shortcode($hook['hook'], array($hook['component'], $hook['callback']));
		}

		foreach ($this->ajax_events as $hook) {
			add_action("wp_ajax_" . $hook['hook'], array($hook['component'], $hook['callback']), $hook['priority'], $hook['accepted_args']);
		}

		foreach ($this->rest_api_inits as $hook) {
			add_action("rest_api_init", array($hook['component'], $hook['callback']), $hook['priority'], $hook['accepted_args']);
		}

	}

}
