<?php

if (!current_user_can('manage_options')) {
	return;
}

?>

<div class="wrap">
	<h1>
		<?php echo esc_html(get_admin_page_title()); ?>
	</h1>
		<?php
	if (isset($_GET['settings-updated'])) {
		add_settings_error('gidi_flights_messages', 'gidi_flights_message', __('Flight Settings Saved', 'gidi-flights'), 'updated');
	}
	settings_errors('gidi_flights_messages');

	$nav_args = array(
		'general_settings' => 'General Settings',
		'payment_gateway' => 'Payment Gateway Options',
		'travel_den_api' => 'Travel Den API',
		'sms_notification_settings' => 'SMS Notifications',
		'email_notification_settings' => 'Email Notifications',
		'advanced_settings' => 'Appearance Settings',
	);
	$active_tab = isset($_GET['tab']) ? $_GET['tab'] : 'general_settings';
	?>
	<h2 class="nav-tab-wrapper">
		<?php foreach ($nav_args as $key => $title) { ?>
		<a href="?page=manage-settings&tab=<?php echo $key; ?>" class="nav-tab <?php echo $active_tab == $key ? 'nav-tab-active' : ''; ?>"><?php echo $title; ?></a>
		<?php 
} ?>
	</h2>

	<form action="options.php" method="post">
		<?php
	if ($active_tab == 'payment_gateway') {
		settings_fields('gidi_flights_payment_api');
		do_settings_sections('gidi_flights_payment_api');
	} elseif ($active_tab == 'travel_den_api') {
		settings_fields('gidi_flights_travelden_api');
		do_settings_sections('gidi_flights_travelden_api');
	} elseif ($active_tab == 'advanced_settings') {
		settings_fields('gidi_flights_advanced_settings');
		do_settings_sections('gidi_flights_advanced_settings');
	} elseif ($active_tab == 'sms_notification_settings') {
		settings_fields('gidi_flights_sms_notification_settings');
		do_settings_sections('gidi_flights_sms_notification_settings');
	} elseif ($active_tab == 'email_notification_settings') {
		settings_fields('gidi_flights_email_notification_settings');
		do_settings_sections('gidi_flights_email_notification_settings');
	} else {
		settings_fields('gidi_flights_general');
		do_settings_sections('gidi_flights_general');
	}
	submit_button('Save Settings'); ?>
	</form>
</div> 
