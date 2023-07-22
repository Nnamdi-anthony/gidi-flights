<?php

class Gidi_Flights_Public_Menu {

	protected $plugin_name;

	public function __construct( $plugin_name ) {
		$this->plugin_name = str_replace( "-", "_", $plugin_name );
	}

	/**
	 * register a list of custom menu for the plugin's usage
	 *
	 * @return void
	 */
	public function register_menus() {
		register_nav_menu( 'tabby-navbar', __( 'Landing Page Tabs', 'gidi-flights' ) );
	}

	public function fallback_cb() {
		?>
		<div id="gidi-flights-tab-menu-wrapper" class="gidi-flights-tabs-structure">
			<ul id="gidi-flights-tab-menu" class="nav nav-tabs">
				<li id="menu-item-23930"
				    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23930">
					<a href="#"> <span>Hotels</span></a>
				</li>
				<li id="menu-item-23931"
				    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-23931">
					<a href="https://gidievents.com/flights"><span>Flights</span></a></li>
				<li id="menu-item-23932"
				    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23932"><a href="#"><span>Packages</span></a>
				</li>
				<li id="menu-item-23960"
				    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23960"><a href="#"><span>Deals</span></a>
				</li>
			</ul>
		</div>
		<?php
	}
}
