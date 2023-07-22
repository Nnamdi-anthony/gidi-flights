<?php

class Gidi_Flights_Admin_Cronjobs
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
	 * @param      string    $plugin_name The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name)
	{

		$this->plugin_name = str_replace("-", "_", $plugin_name);

	}

	public function send_sms()
	{


	}

	public function send_email()
	{
		// mail options
		$mail_options = get_option("gidi_flights_email_notification_settings");
		$sender_mail = !empty($mail_options['email_sender_mail']) ? $mail_options['email_sender_mail'] : 'gidi-flights Plugin';
		$sender_display_name = !empty($mail_options['email_sender_display_name']) ? $mail_options['email_sender_display_name'] : 'no-reply@gidievents.com';

		// headers
		$headers[] = 'Content-Type: text/html; charset=UTF-8';
		$headers[] = "From: {$sender_display_name}<{$sender_mail}>";
		$headers[] = "Return-Path: {$sender_mail}";
		$headers[] = "MIME-Version: 1.0";

		// get the list of email templates
		$args = array(
			'post_type' => 'gidi_flights_enotify',
			'posts_per_page' => -1,
		);
		$query = new WP_Query($args);

		while ($query->have_posts()) {
			$query->the_post();
			$post_id = get_the_ID();

			$time = get_post_meta($post_id, 'gidi-flights-enotify_sending_time', true);
			$date = get_post_meta($post_id, 'gidi-flights-enotify_sending_date', true);
			$status_ttl = get_post_meta($post_id, 'gidi-flights-enotify_sending_status_tag', true);

			// CURENT DATETIME
			// TODO - quick fix for the 1 hour time lag between reality adn where the server is 
			$an_hour_from_now = strtotime("+1 hour");
			$datetime = date("Y-m-d H:i", $an_hour_from_now);
			$chainedExpectedTime = $date . " " . $time;

			// converted to pure date objects
			$expected = new DateTime($chainedExpectedTime);
			$current = new DateTime($datetime);

			if ($expected == $current) {
				$mail_contents = wpautop(get_the_content());
				$title = get_the_title();
				$receiver_mail = get_post_meta($post_id, 'gidi-flights-enotify_receiver_email', true);

				$status_mail = wp_mail($receiver_mail, $title, $mail_contents, $headers);
				if ($status_mail) {
					update_post_meta($post_id, 'gidi-flights-enotify_sending_status', "Mail has been sent!");
					update_post_meta($post_id, 'gidi-flights-enotify_sending_status_tag', 1);
				} else {
					update_post_meta($post_id, 'gidi-flights-enotify_sending_status', "Error Sending Mail, Please Check Configurations");
				}
			} elseif ($expected < $current && !$status_ttl) {
				update_post_meta($post_id, 'gidi-flights-enotify_sending_status', "Mail Sending Time Is Past Gone!!");
			} elseif ($expected > $current && !$status_ttl) {
				update_post_meta($post_id, 'gidi-flights-enotify_sending_status', "Mail Will Be Sent Soon!!");
			}
		}
		wp_reset_postdata();
	}

	/**
	 * delete email and sms records that are greater than one year
	 *
	 * @return void
	 */
	public function remove_past_email_sms_records()
	{
		// get the list of email templates
		$args = array(
			'post_type' => ['gidi_flights_enotify', 'gidi_flights_snotify'],
			'posts_per_page' => -1,
			'date_query' => [
				array(
					'column' => 'post_date_gmt',
					'before' => '1 year ago',
				),
			]
		);
		$query = new WP_Query($args);

		while ($query->have_posts()) {
			wp_delete_post(get_the_ID());
		}
		wp_reset_postdata();
	}

	public static function house_schedules()
	{
		if (!wp_next_scheduled('gidi_flights_send_sms')) {
			wp_schedule_event(time(), 'gf_every_1mins', 'gidi_flights_send_sms');
		}

		if (!wp_next_scheduled('gidi_flights_send_email')) {
			wp_schedule_event(time(), 'gf_every_1mins', 'gidi_flights_send_email');
		}

		if (!wp_next_scheduled('gidi_flights_cleanup_past_email_sms')) {
			wp_schedule_event(time(), 'gf_every_30mins', 'gidi_flights_cleanup_past_email_sms');
		}
	}

	public function add_intervals_cron_schedules($schedules)
	{
		// add a 'weekly' schedule to the existing set
		$schedules['gf_every_1mins'] = array(
			'interval' => 1 * 60,
			'display' => __('Once Every 1 Mins')
		);
		$schedules['gf_every_5mins'] = array(
			'interval' => 5 * 60,
			'display' => __('Once Every 5 Mins')
		);
		$schedules['gf_every_10mins'] = array(
			'interval' => 10 * 60,
			'display' => __('Once Every 10 Mins')
		);
		$schedules['gf_every_30mins'] = array(
			'interval' => 30 * 60,
			'display' => __('Once Every 30mins')
		);
		return $schedules;
	}
}
