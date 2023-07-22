<?php

/**
 * This class houses the menus and settings api for the plugin
 */
class Gidi_Flights_Admin_Settings
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
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name)
	{

		$this->plugin_name = str_replace("-", "_", $plugin_name);
	}

	public function register_payment_settings()
	{
		$base_name = "_payment_api";
		register_setting($this->plugin_name . $base_name, $this->plugin_name . '_payments_options');

		// register section
		add_settings_section(
			$this->plugin_name . $base_name . '_section',
			__('Flutterwave Payment Gateway.', 'gidi-flights'),
			array($this, 'flutterwave_api_section_cb'),
			$this->plugin_name . $base_name
		);

		// set the payment mode
		add_settings_field(
			'flutterwave_mode',
			__('Payment Environment', 'gidi-flights'),
			array($this, 'flutterwave_mode_mode_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'payment_environment',
				'class' => 'public_key_row',
			]
		);

		// set the secret key
		add_settings_field(
			'flutterwave_secret_key',
			__('Secret Key', 'gidi-flights'),
			array($this, 'flutterwave_mode_secret_key_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'secret_key',
				'class' => 'secret_key_row',
			]
		);

		// set the public key
		add_settings_field(
			'flutterwave_public_key',
			__('Public Key', 'gidi-flights'),
			array($this, 'flutterwave_mode_public_key_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'public_key',
				'class' => 'public_key_row',
			]
		);

		/*--------------------------------------------------------------
		## Bank Deposits
		--------------------------------------------------------------*/
		
		// register section
		add_settings_section(
			$this->plugin_name . "_wire_transfer" . '_section',
			__('Wire Transfer/ Bank Deposit Payment.', 'gidi-flights'),
			array($this, 'wire_transfer_section_cb'),
			$this->plugin_name . $base_name
		);

		add_settings_field(
			'wire_transfer_bank_name',
			__('Bank Name`', 'gidi-flights'),
			array($this, 'wire_transfer_bank_name_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . "_wire_transfer" . '_section',
			[
				'label_for' => 'bank_name',
				'class' => 'bank_name_row',
			]
		);

		add_settings_field(
			'wire_transfer_bank_acc_type',
			__('Bank Account Type', 'gidi-flights'),
			array($this, 'wire_transfer_bank_acc_type_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . "_wire_transfer" . '_section',
			[
				'label_for' => 'bank_acc_type',
				'class' => 'bank_acc_type_row',
			]
		);

		add_settings_field(
			'wire_transfer_bank_acc_number',
			__('Bank Account Number', 'gidi-flights'),
			array($this, 'wire_transfer_bank_acc_number_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . "_wire_transfer" . '_section',
			[
				'label_for' => 'bank_acc_number',
				'class' => 'bank_acc_number_row',
			]
		);

		add_settings_field(
			'wire_transfer_bank_deposit_instruction',
			__('After Payment Instructions', 'gidi-flights'),
			array($this, 'wire_transfer_bank_deposit_instruction_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . "_wire_transfer" . '_section',
			[
				'label_for' => 'bank_deposit_instruction',
				'class' => 'bank_deposit_instruction_row',
			]
		);
	}

	public function register_travelden_api_settings()
	{
		$base_name = "_travelden_api";
		register_setting($this->plugin_name . $base_name, $this->plugin_name . '_traveldens_options');

		// register section
		add_settings_section(
			$this->plugin_name . $base_name . '_section',
			__('TravelDen API Credentials.', 'gidi-flights'),
			array($this, 'travelden_api_section_cb'),
			$this->plugin_name . $base_name
		);

		// set the api url
		add_settings_field(
			'travelden_api_url',
			__('Base API URL', 'gidi-flights'),
			array($this, 'travelden_api_url_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'travelden_api_base_url',
				'class' => 'travelden_api_base_url_row',
			]
		);

		// set the secret key
		add_settings_field(
			'travelden_api_token',
			__('API Token', 'gidi-flights'),
			array($this, 'travelden_api_token_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'travelden_api_token',
				'class' => 'travelden_api_token_row',
			]
		);

		// set the public key
		add_settings_field(
			'travelden_api_key',
			__('API Key', 'gidi-flights'),
			array($this, 'travelden_api_key_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'travelden_api_key',
				'class' => 'travelden_api_key_row',
			]
		);
	}

	public function register_general_settings()
	{
		$base_name = "_general";
		register_setting($this->plugin_name . $base_name, $this->plugin_name . '_general_options');

		// register section
		add_settings_section(
			$this->plugin_name . $base_name . '_section',
			__('General Options.', 'gidi-flights'),
			array($this, 'general_section_cb'),
			$this->plugin_name . $base_name
		);

		// set the api url
		add_settings_field(
			'slider_shortcode',
			__('Slider Shortcode/ Background Image Url', 'gidi-flights'),
			array($this, 'slider_shortcode_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'slider_shortcode',
				'class' => 'slider_shortcode_row',
			]
		);		

		// set the api url
		add_settings_field(
			'google_map_key',
			__('Google Map API Key', 'gidi-flights'),
			array($this, 'google_map_key_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'google_map_key',
				'class' => 'google_map_key_row',
			]
		);

		// set the api url
		add_settings_field(
			'landing_page_welcome_text',
			__('Landing Page Welcome Text', 'gidi-flights'),
			array($this, 'landing_page_welcome_text_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'landing_page_welcome_text',
				'class' => 'landing_page_welcome_text_row',
			]
		);
	}

	public function register_advanced_settings()
	{
		$base_name = "_advanced_settings";
		register_setting($this->plugin_name . $base_name, $this->plugin_name . '_advanced_options');

		// register section
		add_settings_section(
			$this->plugin_name . $base_name . '_section',
			__('Appearance Settings.', 'gidi-flights'),
			array($this, 'advanced_section_cb'),
			$this->plugin_name . $base_name
		);

		// set the api url
		add_settings_field(
			'css_file',
			__('Insert Your CSS Code', 'gidi-flights'),
			array($this, 'css_file_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'css_file',
				'class' => 'css_file_row',
			]
		);

		// set the api url
		add_settings_field(
			'js_file',
			__('Insert Your Javascript Code', 'gidi-flights'),
			array($this, 'js_file_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_section',
			[
				'label_for' => 'js_file',
				'class' => 'js_file_row',
			]
		);
	}


	public function register_sms_notification_settings()
	{
		$base_name = "_sms_notification_settings";
		register_setting($this->plugin_name . $base_name, $this->plugin_name . '_sms_notification_settings');

		// register section
		add_settings_section(
			$this->plugin_name . $base_name . '_settings_section',
			__('SMS Notifications API Settings.', 'gidi-flights'),
			array($this, 'sms_notification_settings_cb'),
			$this->plugin_name . $base_name
		);

		add_settings_section(
			$this->plugin_name . $base_name . '_customer_section',
			__('Customer SMS Notifications Settings.', 'gidi-flights'),
			array($this, 'sms_notification_customer_settings_cb'),
			$this->plugin_name . $base_name
		);

		add_settings_section(
			$this->plugin_name . $base_name . '_owner_section',
			__('Owner SMS Notifications Settings.', 'gidi-flights'),
			array($this, 'sms_notification_owner_settings_cb'),
			$this->plugin_name . $base_name
		);

		// set the customer fields
		add_settings_field(
			'customer_ticket_purchase',
			__('New Tickets Purchased', 'gidi-flights'),
			array($this, 'customer_ticket_purchase_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_section',
			[
				'label_for' => 'customer_ticket_purchase',
				'class' => 'customer_ticket_purchase_row',
			]
		);

		add_settings_field(
			'customer_promo_deals',
			__('New Promo/Deals', 'gidi-flights'),
			array($this, 'customer_promo_deals_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_section',
			[
				'label_for' => 'customer_promo_deals',
				'class' => 'customer_promo_deals_row',
			]
		);

		add_settings_field(
			'customer_cancellation',
			__('Tickets Cancellation', 'gidi-flights'),
			array($this, 'customer_cancellation_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_section',
			[
				'label_for' => 'customer_cancellation',
				'class' => 'customer_cancellation_row',
			]
		);

		add_settings_field(
			'customer_booking_successful',
			__('Successful Bookings', 'gidi-flights'),
			array($this, 'customer_booking_successful_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_section',
			[
				'label_for' => 'customer_booking_successful',
				'class' => 'customer_booking_successful_row',
			]
		);

		add_settings_field(
			'customer_booking_failed',
			__('Failed Bookings', 'gidi-flights'),
			array($this, 'customer_booking_failed_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_section',
			[
				'label_for' => 'customer_booking_failed',
				'class' => 'customer_booking_failed_row',
			]
		);

		add_settings_field(
			'customer_payment_successful',
			__('Successful Payments', 'gidi-flights'),
			array($this, 'customer_payment_successful_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_section',
			[
				'label_for' => 'customer_payment_successful',
				'class' => 'customer_payment_successful_row',
			]
		);

		add_settings_field(
			'customer_payment_failed',
			__('Failed Payments', 'gidi-flights'),
			array($this, 'customer_payment_failed_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_section',
			[
				'label_for' => 'customer_payment_failed',
				'class' => 'customer_payment_failed_row',
			]
		);

		// set the owner fields
		add_settings_field(
			'owner_ticket_purchase',
			__('New Tickets Purchased', 'gidi-flights'),
			array($this, 'owner_ticket_purchase_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_section',
			[
				'label_for' => 'owner_ticket_purchase',
				'class' => 'owner_ticket_purchase_row',
			]
		);

		add_settings_field(
			'owner_cancellation',
			__('Tickets Cancellation', 'gidi-flights'),
			array($this, 'owner_cancellation_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_section',
			[
				'label_for' => 'owner_cancellation',
				'class' => 'owner_cancellation_row',
			]
		);

		add_settings_field(
			'owner_booking_successful',
			__('Successful Bookings', 'gidi-flights'),
			array($this, 'sms_owner_booking_successful_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_section',
			[
				'label_for' => 'owner_booking_successful',
				'class' => 'owner_booking_successful_row',
			]
		);

		add_settings_field(
			'owner_booking_failed',
			__('Failed Bookings', 'gidi-flights'),
			array($this, 'owner_booking_failed_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_section',
			[
				'label_for' => 'owner_booking_failed',
				'class' => 'owner_booking_failed_row',
			]
		);

		add_settings_field(
			'owner_payment_successful',
			__('Successful Payments', 'gidi-flights'),
			array($this, 'owner_payment_successful_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_section',
			[
				'label_for' => 'owner_payment_successful',
				'class' => 'owner_payment_successful_row',
			]
		);

		add_settings_field(
			'owner_payment_failed',
			__('Failed Payments', 'gidi-flights'),
			array($this, 'owner_payment_failed_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_section',
			[
				'label_for' => 'owner_payment_failed',
				'class' => 'owner_payment_failed_row',
			]
		);

		// set api settings for sms
		add_settings_field(
			'sms_gateway_display_name',
			__('Gateway Display Name', 'gidi-flights'),
			array($this, 'sms_gateway_display_name_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_settings_section',
			[
				'label_for' => 'sms_gateway_display_name',
				'class' => 'sms_gateway_display_name_row',
			]
		);

		add_settings_field(
			'sms_gateway_username',
			__('Gateway Username', 'gidi-flights'),
			array($this, 'sms_gateway_username_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_settings_section',
			[
				'label_for' => 'sms_gateway_username',
				'class' => 'sms_gateway_username_row',
			]
		);

		add_settings_field(
			'sms_gateway_password',
			__('Gateway Password', 'gidi-flights'),
			array($this, 'sms_gateway_password_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_settings_section',
			[
				'label_for' => 'sms_gateway_password',
				'class' => 'sms_gateway_password_row',
			]
		);
	}

	public function register_email_notifications_settings()
	{
		$base_name = "_email_notification_settings";
		register_setting($this->plugin_name . $base_name, $this->plugin_name . '_email_notification_settings');

		// register section
		add_settings_section(
			$this->plugin_name . $base_name . '_settings_section',
			__('Email Notification Settings.', 'gidi-flights'),
			array($this, 'email_notification_section_cb'),
			$this->plugin_name . $base_name
		);

		// customer email notifications type setup
		add_settings_section(
			$this->plugin_name . $base_name . '_customer_email_section',
			__('Customer Email Notification Settings.', 'gidi-flights'),
			array($this, 'customer_email_notification_section_cb'),
			$this->plugin_name . $base_name
		);

		// owner email notifications type setup
		add_settings_section(
			$this->plugin_name . $base_name . '_owner_email_section',
			__('Owner Email Notification Settings.', 'gidi-flights'),
			array($this, 'owner_email_notification_section_cb'),
			$this->plugin_name . $base_name
		);

		// set the api url
		add_settings_field(
			'email_sender_display_name',
			__('Display Name', 'gidi-flights'),
			array($this, 'email_sender_display_name_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_settings_section',
			[
				'label_for' => 'email_sender_display_name',
				'class' => 'email_sender_display_name_row',
			]
		);

		add_settings_field(
			'email_sender_mail',
			__('From Email', 'gidi-flights'),
			array($this, 'email_sender_mail_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_settings_section',
			[
				'label_for' => 'email_sender_mail',
				'class' => 'email_sender_mail_row',
			]
		);

		// owner
		add_settings_field(
			'owner_new_ticket',
			__('New Ticket', 'gidi-flights'),
			array($this, 'owner_new_ticket_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_email_section',
			[
				'label_for' => 'owner_new_ticket',
				'class' => 'owner_new_ticket_row',
			]
		);

		add_settings_field(
			'owner_booking_successful',
			__('Successful Bookings', 'gidi-flights'),
			array($this, 'email_owner_booking_successful_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_email_section',
			[
				'label_for' => 'owner_booking_successful',
				'class' => 'owner_booking_successful_row',
			]
		);

		add_settings_field(
			'owner_booking_failed',
			__('Failed Bookings', 'gidi-flights'),
			array($this, 'email_owner_booking_failed_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_email_section',
			[
				'label_for' => 'owner_booking_failed',
				'class' => 'owner_booking_failed_row',
			]
		);

		add_settings_field(
			'owner_payment_successful',
			__('Successful Payments', 'gidi-flights'),
			array($this, 'email_owner_payment_successful_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_email_section',
			[
				'label_for' => 'owner_payment_successful',
				'class' => 'owner_payment_successful_row',
			]
		);

		add_settings_field(
			'owner_payment_failed',
			__('Failed Payments', 'gidi-flights'),
			array($this, 'email_owner_payment_failed_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_email_section',
			[
				'label_for' => 'owner_payment_failed',
				'class' => 'owner_payment_failed_row',
			]
		);

		add_settings_field(
			'owner_ticket_cancellation',
			__('Ticket Cancellations', 'gidi-flights'),
			array($this, 'owner_ticket_cancellation_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_owner_email_section',
			[
				'label_for' => 'owner_ticket_cancellation',
				'class' => 'owner_ticket_cancellation_row',
			]
		);
		
		// customer 
		add_settings_field(
			'customer_new_ticket',
			__('New Ticket', 'gidi-flights'),
			array($this, 'customer_new_ticket_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_email_section',
			[
				'label_for' => 'customer_new_ticket',
				'class' => 'customer_new_ticket_row',
			]
		);

		add_settings_field(
			'customer_booking_successful',
			__('Successful Bookings', 'gidi-flights'),
			array($this, 'email_customer_booking_successful_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_email_section',
			[
				'label_for' => 'customer_booking_successful',
				'class' => 'customer_booking_successful_row',
			]
		);

		add_settings_field(
			'customer_booking_failed',
			__('Failed Bookings', 'gidi-flights'),
			array($this, 'email_customer_booking_failed_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_email_section',
			[
				'label_for' => 'customer_booking_failed',
				'class' => 'customer_booking_failed_row',
			]
		);

		add_settings_field(
			'customer_payment_successful',
			__('Successful Payments', 'gidi-flights'),
			array($this, 'email_customer_payment_successful_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_email_section',
			[
				'label_for' => 'customer_payment_successful',
				'class' => 'customer_payment_successful_row',
			]
		);

		add_settings_field(
			'customer_payment_failed',
			__('Failed Payments', 'gidi-flights'),
			array($this, 'email_customer_payment_failed_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_email_section',
			[
				'label_for' => 'customer_payment_failed',
				'class' => 'customer_payment_failed_row',
			]
		);

		add_settings_field(
			'customer_promos',
			__('Promos/Deals', 'gidi-flights'),
			array($this, 'customer_promos_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_email_section',
			[
				'label_for' => 'customer_promos',
				'class' => 'customer_promos_row',
			]
		);

		add_settings_field(
			'customer_ticket_cancellation',
			__('Ticket Cancellations', 'gidi-flights'),
			array($this, 'customer_ticket_cancellation_cb'),
			$this->plugin_name . $base_name,
			$this->plugin_name . $base_name . '_customer_email_section',
			[
				'label_for' => 'customer_ticket_cancellation',
				'class' => 'customer_ticket_cancellation_row',
			]
		);
	}

	public function sms_notification_settings_cb()
	{
		$html = "<h4> Configure The MavisSMS Gateway: display name, username and password. </h4>";
		echo $html;
	}

	public function sms_notification_owner_settings_cb()
	{
		$html = "<h4> Setup How Owner Notifications are sent for cetain actions. </h4>";
		echo $html;
	}

	public function sms_notification_customer_settings_cb()
	{
		$html = "<h4> Setup Customer Notifications to be sent for cetain actions. </h4>";
		echo $html;
	}

	public function email_notification_section_cb()
	{
		$html = "<h4>Setup the display name for email to be sent, alongside the email customers should reply to.</h4>";
		echo $html;
	}

	public function customer_email_notification_section_cb()
	{
		$html = "<h4>Setup the notification templates for different events for Customers</h4>";
		echo $html;
	}

	public function owner_email_notification_section_cb()
	{
		$html = "<h4>Setup the notification templates for different events for Onwers</h4>";
		echo $html;
	}

	public function advanced_section_cb()
	{
		$html = "<h4>Change how the site looks, or customizing certain experiences on the fly</h4>";
		echo $html;
	}

	public function general_section_cb()
	{
		$html = "<h4> Setup the Sliders, Landing page Text, e.t.c</h4>";
		echo $html;
	}

	public function travelden_api_section_cb()
	{
		$html = "<h4> Please Kindly Enter TravelDen's API Credentials.</h4>";
		echo $html;
	}

	public function wire_transfer_section_cb()
	{
		$html = "<h4> Please Kindly Enter the Bank Name, Account Number and Account Type, Also Input Instructions needed for successful bookings.</h4>";
		echo $html;
	}

	public function flutterwave_api_section_cb()
	{
		$html = "<h4> Please Kindly Enter the API Keys You got from the flutterwave dashboard, and choose the Payment Environment/mode that correspond to those API Keys</h4>";
		echo $html;
	}

	public function customer_ticket_purchase_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function customer_promo_deals_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function customer_cancellation_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1, 'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function customer_booking_successful_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1, 'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function customer_booking_failed_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1, 'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function customer_payment_successful_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function customer_payment_failed_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1, 'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function owner_ticket_purchase_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1, 'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function owner_cancellation_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function sms_owner_booking_successful_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1, 'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function owner_booking_failed_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function owner_payment_successful_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1, 'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function owner_payment_failed_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1, 'gidi_flights_ntpls_cat' => 'sms'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_sms_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function owner_new_ticket_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function email_owner_booking_successful_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function email_owner_booking_failed_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function email_owner_payment_successful_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function email_owner_payment_failed_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function owner_ticket_cancellation_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function customer_new_ticket_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function email_customer_booking_successful_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function email_customer_booking_failed_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function email_customer_payment_successful_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function email_customer_payment_failed_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function customer_promos_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}

	public function customer_ticket_cancellation_cb($args)
	{
		$qargs = array(
			"post_type" => 'gidi_flights_ntpls',
			'posts_per_page' => -1,
			'gidi_flights_ntpls_cat' => 'email'
		);
		$query = new WP_Query($qargs);
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";

		// html proper
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_email_notification_settings[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		while ($query->have_posts()) {
			$query->the_post();
			$html .= "<option " . selected($option, get_the_ID(), false) . " value='" . get_the_ID() . "'>" . ucwords(get_the_title()) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}


	public function sms_gateway_display_name_cb($args)
	{
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_sms_notification_settings[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text" maxlength="11">';
		$html .= "<p class='description'>Enter the Display Name you wish to show when a text message is received. 11 characters max</p>";
		echo $html;
	}

	public function sms_gateway_username_cb($args)
	{
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_sms_notification_settings[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function sms_gateway_password_cb($args)
	{
		$options = get_option($this->plugin_name . "_sms_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_sms_notification_settings[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function email_sender_display_name_cb($args)
	{
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_email_notification_settings[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}


	public function email_sender_mail_cb($args)
	{
		$options = get_option($this->plugin_name . "_email_notification_settings");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_email_notification_settings[' . esc_attr($args['label_for']) . ']" type="email" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function css_file_cb($args)
	{
		$options = get_option($this->plugin_name . "_advanced_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<textarea name="' . $this->plugin_name . '_advanced_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" class="regular-text" rows="20" style="width: 70%">' . wp_unslash($option) . '</textarea>';
		echo $html;
	}

	public function js_file_cb($args)
	{
		$options = get_option($this->plugin_name . "_advanced_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<textarea name="' . $this->plugin_name . '_advanced_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" class="regular-text" rows="20" style="width: 70%">' . wp_unslash($option) . '</textarea>';
		echo $html;
	}

	public function slider_shortcode_cb($args)
	{
		$options = get_option($this->plugin_name . "_general_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_general_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value=\'' . sanitize_text_field($option) . '\' class="regular-text">';
		echo $html;
	}

	public function google_map_key_cb($args)
	{
		$options = get_option($this->plugin_name . "_general_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_general_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value=\'' . sanitize_text_field($option) . '\' class="regular-text">';
		echo $html;
	}

	public function landing_page_welcome_text_cb($args)
	{
		$options = get_option($this->plugin_name . "_general_options");

		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$settings = array(
			'teeny' => false,
			'textarea_rows' => 8,
			'textarea_name' => $this->plugin_name . '_general_options[' . esc_attr($args['label_for']) . ']',
			'tabindex' => 1,
			'media_buttons' => false,
		);
		wp_editor($option, esc_attr($args['label_for']), $settings);
	}

	public function travelden_api_url_cb($args)
	{
		$options = get_option($this->plugin_name . "_traveldens_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_traveldens_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function travelden_api_token_cb($args)
	{
		$options = get_option($this->plugin_name . "_traveldens_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_traveldens_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function travelden_api_key_cb($args)
	{
		$options = get_option($this->plugin_name . "_traveldens_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_traveldens_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function wire_transfer_bank_acc_type_cb($args)
	{
		$options = get_option($this->plugin_name . "_payments_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_payments_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function wire_transfer_bank_name_cb($args)
	{
		$options = get_option($this->plugin_name . "_payments_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_payments_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function wire_transfer_bank_acc_number_cb($args)
	{
		$options = get_option($this->plugin_name . "_payments_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_payments_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function wire_transfer_bank_deposit_instruction_cb($args)
	{
		$options = get_option($this->plugin_name . "_payments_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		echo $option;
		$settings = array(
			'teeny' => false,
			'textarea_rows' => 8,
			'textarea_name' => $this->plugin_name . '_payments_options[' . esc_attr($args['label_for']) . ']',
			'tabindex' => 1,
			'media_buttons' => false,
		);
		wp_editor($option, esc_attr($args['label_for']), $settings);
	}

	public function flutterwave_mode_secret_key_cb($args)
	{
		$options = get_option($this->plugin_name . "_payments_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_payments_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function flutterwave_mode_public_key_cb($args)
	{
		$options = get_option($this->plugin_name . "_payments_options");
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = '<input autocomplete="off" name="' . $this->plugin_name . '_payments_options[' . esc_attr($args['label_for']) . ']" type="text" id="' . esc_attr($args['label_for']) . '" value="' . $option . '" class="regular-text">';
		echo $html;
	}

	public function flutterwave_mode_mode_cb($args)
	{
		$options = get_option($this->plugin_name . "_payments_options");
		$options_array = array(
			'live_environment' => 'Live Environment',
			'test_environment' => 'Test Environment',
		);
		$option = isset($options[$args['label_for']]) ? $options[$args['label_for']] : "";
		$html = "<select id='" . esc_attr($args['label_for']) . "' name='{$this->plugin_name}_payments_options[" . esc_attr($args['label_for']) . "]'>";
		$html .= "<option> None </option>";
		foreach ($options_array as $key => $val) {
			$html .= "<option " . selected($option, $key, false) . " value='" . $key . "'>" . ucwords($val) . " </option>";
		}
		$html .= "</select>";
		echo $html;
	}
}
