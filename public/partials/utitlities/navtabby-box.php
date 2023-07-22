<?php

$menu_locations = "tabby-navbar";
$navMenu = new Gidi_Flights_Public_Menu('gidi-flights');
wp_nav_menu(array(
	"theme_location" => $menu_locations,
	"container_class" => "gidi-flights-tabs-structure",
	"container_id" => "gidi-flights-tab-menu-wrapper",
	"menu_id" => "gidi-flights-tab-menu",
	"menu_class" => "nav nav-tabs",
	"fallback_cb" => array($navMenu, 'fallback_cb')
));
