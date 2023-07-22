<?php

class Gidi_Flights_Admin_Metabox {
	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string $plugin_name The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 *
	 * @param      string $plugin_name The name of this plugin.
	 * @param      string $version The version of this plugin.
	 */
	public function __construct( $plugin_name ) {

		$this->plugin_name = str_replace( "-", "_", $plugin_name );

	}

	public function remove_metaboxes() {
		remove_meta_box( 'gidi_flights_ntpls_catdiv', 'gidi_flights_ntpls', 'side' );
	}

	public function register_metaboxes() {
		add_meta_box( 'gidi_flights_ntpls_cat', 'Choose Template Type', array(
			$this,
			'show_template_type_html'
		), $this->plugin_name . "_ntpls", 'side' );
		add_meta_box( 'gidi_flights_ntpls_helpers', 'List of Variable Placeholders', array(
			$this,
			'show_placeholders_list_html'
		), $this->plugin_name . "_ntpls", 'side', 'high' );

		// email notifications box
		add_meta_box( 'gidi_flights_email_notification_emailfield', 'Receiver Email', array(
			$this,
			'show_receiever_email_html'
		), $this->plugin_name . "_enotify", 'side', 'high' );

		// sms notifcation box
		add_meta_box( 'gidi_flights_sms_notification_smsfield', 'Notification Configuration', array(
			$this,
			'show_receiever_sms_html'
		), $this->plugin_name . "_snotify", 'side', 'high' );

		// bookings metaboxes
		add_meta_box( 'gidi_flights_bookings_booking_search_flight_data', 'Search For Flight', array(
			$this,
			'show_search_flight_html'
		), $this->plugin_name . "_booking", 'normal', 'high' );
		add_meta_box( 'gidi_flights_bookings_booking_search_data', 'Search Results', array(
			$this,
			'show_search_data_html'
		), $this->plugin_name . "_booking", 'normal', 'high' );
		add_meta_box( 'gidi_flights_bookings_booking_flight_data', 'Selected Flight Data', array(
			$this,
			'show_flight_html'
		), $this->plugin_name . "_booking", 'normal', 'high' );
		add_meta_box( 'gidi_flights_bookings_customer_details', 'Passengers Data', array(
			$this,
			'show_customer_details_html'
		), $this->plugin_name . "_booking", 'normal', 'high' );
		//aside metabox
		add_meta_box( 'gidi_flights_bookings_booking_price', 'Flight Cost Breakdown', array(
			$this,
			'show_booking_price_html'
		), $this->plugin_name . "_booking", 'side', 'high' );
		add_meta_box( 'gidi_flights_bookings_booking_actions', 'Booking Actions', array(
			$this,
			'show_booking_actions_html'
		), $this->plugin_name . "_booking", 'side', 'high' );
	}

	/**
	 * Save the Meta Fields Created and other needed data
	 *
	 * @param int $post_id
	 * @param mixed $post
	 *
	 * @return int
	 */
	public function save_metadatas( $post_id, $post ) {
		global $wpdb;
		$selected_flight_data = isset( $_POST['selected_flights_data'] ) ? $_POST['selected_flights_data'] : "";

		if ( ! isset( $_POST['gidi_flights_metaboxes'] ) || ! wp_verify_nonce( $_POST['gidi_flights_metaboxes'], basename( __FILE__ ) ) ) {
			return $post_id;
		}

		// update the email receiver field
		update_post_meta( $post_id, "gidi-flights-enotify_receiver_email", isset( $_POST['gidi-flights-enotify_receiver_email'] ) ? sanitize_email( $_POST['gidi-flights-enotify_receiver_email'] ) : "" );
		update_post_meta( $post_id, "gidi-flights-enotify_sending_time", isset( $_POST['gidi-flights-enotify_sending_time'] ) ? $_POST['gidi-flights-enotify_sending_time'] : "" );
		update_post_meta( $post_id, "gidi-flights-enotify_sending_date", isset( $_POST['gidi-flights-enotify_sending_date'] ) ? sanitize_html_class( $_POST['gidi-flights-enotify_sending_date'] ) : "" );
		update_post_meta( $post_id, "gidi-flights-enotify_sending_status", isset( $_POST['gidi-flights-enotify_sending_status'] ) ? sanitize_html_class( $_POST['gidi-flights-enotify_sending_status'] ) : "" );

		// sms
		update_post_meta( $post_id, "gidi-flights-snotify_receiver_phone", isset( $_POST['gidi-flights-snotify_receiver_phone'] ) ? sanitize_html_class( $_POST['gidi-flights-snotify_receiver_phone'] ) : "" );
		update_post_meta( $post_id, "gidi-flights-snotify_sending_time", isset( $_POST['gidi-flights-snotify_sending_time'] ) ? $_POST['gidi-flights-snotify_sending_time'] : "" );
		update_post_meta( $post_id, "gidi-flights-snotify_sending_date", isset( $_POST['gidi-flights-snotify_sending_date'] ) ? sanitize_html_class( $_POST['gidi-flights-snotify_sending_date'] ) : "" );
		update_post_meta( $post_id, "gidi-flights-snotify_sending_status", isset( $_POST['gidi-flights-snotify_sending_status'] ) ? sanitize_html_class( $_POST['gidi-flights-snotify_sending_status'] ) : "" );

		// bookings
		update_post_meta( $post_id, "gidi-flights-booking_status", isset( $_POST['gidi-flights-booking_status'] ) ? sanitize_html_class( $_POST['gidi-flights-booking_status'] ) : "" );
		update_post_meta( $post_id, "gidi-flights-payment_status", isset( $_POST['gidi-flights-payment_status'] ) ? sanitize_html_class( $_POST['gidi-flights-payment_status'] ) : "" );
		update_post_meta( $post_id, "gidi-flights-booked_by", isset( $_POST['gidi-flights-booked_by'] ) ? sanitize_html_class( $_POST['gidi-flights-booked_by'] ) : "" );
		update_post_meta( $post_id, "gidi-flights-selected_flight_data", $selected_flight_data );

		// saving the passenger
		// passenger type starts the whole eqn
		if ( isset( $_POST['passenger_type'] ) ) {
			$passenger_type = $_POST['passenger_type'];

			// algorithm here is pick a value is bound to be repeated and then using the respectable keys, insert the records
			foreach ( $passenger_type as $i => $passenger_t ) {
				$passenger_type_choosen                         = ! empty( $_POST['passenger_type'][ $i ] ) ? $_POST['passenger_type'][ $i ] : 'adult';
				$gidi_flights_passenger_surname_choosen         = $_POST['gidi_flights_passenger_surname'][ $i ];
				$gidi_flights_passenger_other_names_choosen     = $_POST['gidi_flights_passenger_other_names'][ $i ];
				$gidi_flights_passenger_gender_choosen          = $_POST['gidi_flights_passenger_gender'][ $i ];
				$gidi_flights_passenger_nationality_choosen     = $_POST['gidi_flights_passenger_nationality'][ $i ];
				$gidi_flights_date_of_birth_choosen             = $_POST['gidi_flights_date_of_birth'][ $i ];
				$gidi_flights_passenger_document_type_choosen   = $_POST['gidi_flights_passenger_document_type'][ $i ];
				$gidi_flights_passenger_document_number_choosen = $_POST['gidi_flights_passenger_document_number'][ $i ];
				$gidi_flights_document_expiry_date_choosen      = $_POST['gidi_flights_document_expiry_date'][ $i ];
				$gidi_flights_document_issunace_country_choosen = $_POST['gidi_flights_document_issunace_country'][ $i ];
				$gidi_flights_passenger_email_choosen           = ! empty( $_POST['gidi_flights_passenger_email'][ $i ] ) ? $_POST['gidi_flights_passenger_email'][ $i ] : "";
				$gidi_flights_passenger_phone_number_choosen    = ! empty( $_POST['gidi_flights_passenger_phone_number'][ $i ] ) ? $_POST['gidi_flights_passenger_phone_number'][ $i ] : "";
				$current_item_id                                = $_POST['current_id'][ $i ];

				$nm_xploded = explode( " ", $gidi_flights_passenger_other_names_choosen );
				if ( is_array( $nm_xploded ) && count( $nm_xploded ) > 1 ) {
					$first_name_choosen  = $nm_xploded[0];
					$middle_name_choosen = $nm_xploded[1];
				} else {
					$first_name_choosen  = $gidi_flights_passenger_other_names_choosen;
					$middle_name_choosen = "";
				}

				// name of table
				$table_name = $wpdb->prefix . "gf_passengers";

				// insertion data
				$insertion_data                              = array();
				$insertion_data['booking_id']                = $post_id;
				$insertion_data['first_name']                = $first_name_choosen;
				$insertion_data['last_name']                 = $gidi_flights_passenger_surname_choosen;
				$insertion_data['middle_name']               = $middle_name_choosen;
				$insertion_data['passenger_type']            = $passenger_type_choosen;
				$insertion_data['modified_on']               = date( "Y-m-d h:s:i" );
				$insertion_data['document_issuance_country'] = $gidi_flights_document_issunace_country_choosen;
				$insertion_data['document_expiry_date']      = $gidi_flights_document_expiry_date_choosen;
				$insertion_data['document_number']           = $gidi_flights_passenger_document_number_choosen;
				$insertion_data['document_type']             = $gidi_flights_passenger_document_type_choosen;
				$insertion_data['date_of_birth']             = $gidi_flights_date_of_birth_choosen;
				$insertion_data['nationality']               = $gidi_flights_passenger_nationality_choosen;
				$insertion_data['phone_number']              = $gidi_flights_passenger_phone_number_choosen;
				$insertion_data['gender']                    = $gidi_flights_passenger_gender_choosen;
				$insertion_data['email']                     = $gidi_flights_passenger_email_choosen;

				// insert or update the exiting data
				if ( ! empty( $current_item_id ) ) {
					$wpdb->update( $table_name, $insertion_data, array( 'id' => $current_item_id ) );
				} else {
					$wpdb->insert( $table_name, $insertion_data );
				}
			}
		}

		// save the flight data
		// $deFlightSelData = json_decode($selected_flight_data); // decode the selected flight data


	}

	public function show_flight_html( $post ) {
		wp_nonce_field( basename( __FILE__ ), 'gidi_flights_metaboxes' );
		$booking_option = get_post_meta( $post->ID, 'gidi-flights-selected_flight_data', true );
		$html           = '<input name="selected_flights_data" type="hidden" value="" />';
		$html           .= "<div id='primary-selected-flight-data'><div class='g3-container'>";

		if ( empty( $booking_option ) ) {
			$html .= "<div class='sample-flexxy'><h1> <i class='fa-3x fas fa-briefcase'></i> <br /> Please Search and Select A Flight </h1></div>";
		} else {
			$booking_option = json_decode( $booking_option );
			$html           .= "<div class='g3-hold-fort'>
							<div class='g3-four-fifth'>";
			foreach ( $booking_option->airItineraryWSResponse->originDestinationWSResponses as $i => $response ) :
				$time_format   = "h:s a";
				$departureTime = date( $time_format, strtotime( $response->departureDateTime ) );
				$arrivalTime   = date( $time_format, strtotime( $response->arrivalDateTime ) );
				$html          .= "<div class='g3-hold-fort g3-reset-fort'>
									<div class='g3-two-third'>
										<h1 class='airline-name'> " . $booking_option->airline . "</h1>
										<h4 class='itinery-title'> Departing From 	{$response->originAirport} </h4>
										<h4>By {$departureTime} </h4>
										
										<hr class='plain-lina'>
										
										<h4 class='itinery-title'> Arriving at 	{$response->destinationAirport} </h4>
										<h4>By {$arrivalTime} </h4>
									</div>
									<div class='g3-one-third'>
										<h2> <i class='fas fa-clock'></i>  {$response->duration} </h2>
										<h2>{$response->numberOfStops} Stops </h2><h2> <i class='fas fa-briefcase'></i>  {$response->cabin} </h2>
									</div>
								</div>";
			endforeach;
			$html .= "</div>
							<div class='g3-one-fifth'>
								<div class='parent-0-wrap'>
									<div class='parent-1-wrap'>
										<h1>₦{$booking_option->pricingInfoWSResponse->totalFare}</h1>
									</div>
								</div>
							</div>
						</div>";

		}
		$html .= "</div></div>";
		echo $html;

	}

	public function show_search_data_html( $post ) {
		require_once plugin_dir_path( __FILE__ ) . "partials/search-metabox/search-results.php";
	}

	public function show_search_flight_html( $post ) {
		require_once plugin_dir_path( __FILE__ ) . "partials/search-metabox/search-fields.php";
	}

	public function show_booking_price_html( $post ) {
		if ( ! empty( get_post_meta( $post->ID, 'gidi-flights-selected_flight_data', true ) ) ) {
			$swing_monooding = json_decode( get_post_meta( $post->ID, 'gidi-flights-selected_flight_data', true ) );
			$price_option    = "Total Fare: " . CURRENCY_SYMBOL . $swing_monooding->pricingInfoWSResponse->totalFare;
		} else {
			$price_option = "Not Set";
		}
		?>
		<p>
		<h1 style="text-align: center;"><strong><?php echo $price_option; ?> </strong></h1>
		</p>
		<?php

	}

	public function show_booking_actions_html( $post ) {
		wp_nonce_field( basename( __FILE__ ), 'gidi_flights_metaboxes' );

		$booking_status = array(
			'not_booked'         => 'Not Booked',
			'booked'             => 'Booked Successfully',
			'booking_processing' => 'Still in Process',
		);
		$payment_status = array(
			'not_paid'           => 'Not Paid',
			'paid'               => 'Paid Successfully',
			'payment_processing' => 'Still in Process',
		);

		$booking_option = get_post_meta( $post->ID, 'gidi-flights-booking_status', true );
		$payment_option = get_post_meta( $post->ID, 'gidi-flights-payment_status', true );
		?>
		<p>
			<label for="gidi-flights-booking_status"><?php _e( "Booking Status", 'gidi-flights' ); ?></label>
			<br/>
			<select name="gidi-flights-booking_status" id="gidi-flights-booking_status" class="widefat">
				<option> ---</option>
				<?php foreach ( $booking_status as $key => $value ) : ?>
					<option
						value="<?php echo $key; ?>" <?php echo selected( $booking_option, $key, false ); ?>> <?php echo $value; ?> </option>
				<?php endforeach; ?>
			</select>
		</p>

		<p>
			<label for="gidi-flights-payment_status"><?php _e( "Payment Status", 'gidi-flights' ); ?></label>
			<br/>
			<select name="gidi-flights-payment_status" id="gidi-flights-payment_status" class="widefat">
				<option> ---</option>
				<?php foreach ( $payment_status as $key => $value ) : ?>
					<option
						value="<?php echo $key; ?>" <?php echo selected( $payment_option, $key, false ); ?>> <?php echo $value; ?> </option>
				<?php endforeach; ?>
			</select>
		</p>
		<?php

	}

	public function show_customer_details_html( $post ) {
		wp_nonce_field( basename( __FILE__ ), 'gidi_flights_metaboxes' );
		global $wpdb;
		$table_name = $wpdb->prefix . "gf_passengers";
		$query      = "select * from {$table_name} where booking_id='{$post->ID}'";
		$results    = $wpdb->get_results( $query );

		?>
		<div class="gidi-flights-repeater-container">
			<div class="repeater-container-wrap">
				<div class="passenger-repeater-body">
					<?php


					if ( $results ) {
						foreach ( $results as $name => $value ) {
							include plugin_dir_path( __FILE__ ) . "partials/metaboxes/booking-passenger-repeater-html.php";
						}
					}
					?>
				</div>
				<?php include plugin_dir_path( __FILE__ ) . "partials/metaboxes/add-passenger-btn-html.php"; ?>
			</div>
		</div>
		<?php

	}

	public function show_receiever_sms_html( $post ) {
		wp_nonce_field( basename( __FILE__ ), 'gidi_flights_metaboxes' );
		$status = get_post_meta( $post->ID, 'gidi-flights-snotify_sending_status', true );
		?>

		<p>
			<label for="gidi-flights-snotify"><?php _e( "Reciever Phone Number", 'gidi-flights' ); ?></label>
			<br/>
			<input class="widefat" type="tel" name="gidi-flights-snotify_receiver_phone" id="gidi-flights-snotify"
			       value="<?php echo esc_attr( get_post_meta( $post->ID, 'gidi-flights-snotify_receiver_phone', true ) ); ?>"
			       size="30" required/>
		</p>

		<p>

			<label for="gidi-flights-snotify_sending_time"><?php _e( "Time To Be Sent", 'gidi-flights' ); ?></label>
			<br/>
			<input class="widefat" type="time" name="gidi-flights-snotify_sending_time"
			       id="gidi-flights-snotify_sending_time"
			       value="<?php echo esc_attr( get_post_meta( $post->ID, 'gidi-flights-snotify_sending_time', true ) ); ?>"
			       required/>
		</p>

		<p>
			<label for="gidi-flights-snotify_sending_date"><?php _e( "Date To Be Sent", 'gidi-flights' ); ?></label>
			<br/>
			<input class="widefat" type="date" name="gidi-flights-snotify_sending_date"
			       id="gidi-flights-snotify_sending_date"
			       value="<?php echo esc_attr( get_post_meta( $post->ID, 'gidi-flights-snotify_sending_date', true ) ); ?>"
			       required/>
		</p>

		<p>
			<label for="gidi-flights-snotify_sending_status"><?php _e( "CronJob Status", 'gidi-flights' ); ?></label>
			<br/>
			<input class="widefat" type="status" readonly disabled name="gidi-flights-snotify_sending_status"
			       id="gidi-flights-snotify_sending_status"
			       value="<?php echo ! empty( $status ) ? esc_attr( $status ) : "Not Yet Done"; ?>"/>
		</p>
		<?php

	}

	public function show_receiever_email_html( $post ) {
		wp_nonce_field( basename( __FILE__ ), 'gidi_flights_metaboxes' );
		$status = get_post_meta( $post->ID, 'gidi-flights-enotify_sending_status', true );
		?>

		<p>
			<label for="gidi-flights-enotify"><?php _e( "Reciever Email Address", 'gidi-flights' ); ?></label>
			<br/>
			<input class="widefat" type="email" name="gidi-flights-enotify_receiver_email" id="gidi-flights-enotify"
			       value="<?php echo esc_attr( get_post_meta( $post->ID, 'gidi-flights-enotify_receiver_email', true ) ); ?>"
			       size="30" required/>
		</p>

		<p>

			<label for="gidi-flights-enotify_sending_time"><?php _e( "Time To Be Sent", 'gidi-flights' ); ?></label>
			<br/>
			<input class="widefat" type="time" name="gidi-flights-enotify_sending_time"
			       id="gidi-flights-enotify_sending_time"
			       value="<?php echo esc_attr( get_post_meta( $post->ID, 'gidi-flights-enotify_sending_time', true ) ); ?>"
			       required/>
		</p>

		<p>
			<label for="gidi-flights-enotify_sending_date"><?php _e( "Date To Be Sent", 'gidi-flights' ); ?></label>
			<br/>
			<input class="widefat" type="date" name="gidi-flights-enotify_sending_date"
			       id="gidi-flights-enotify_sending_date"
			       value="<?php echo esc_attr( get_post_meta( $post->ID, 'gidi-flights-enotify_sending_date', true ) ); ?>"
			       required/>
		</p>

		<p>
			<label for="gidi-flights-enotify_sending_status"><?php _e( "CronJob Status", 'gidi-flights' ); ?></label>
			<br/>
			<input class="widefat" type="status" readonly disabled name="gidi-flights-enotify_sending_status"
			       id="gidi-flights-enotify_sending_status"
			       value="<?php echo ! empty( $status ) ? esc_attr( $status ) : "Not Yet Done"; ?>"/>
		</p>
		<?php

	}

	public function show_placeholders_list_html() {
		echo "
			<ol>
			<li> {{fullname}} </li>
			<li> {{email}} </li>
			<li> {{phone_number}} </li>
			<li> {{ticket_id}} </li>
			<li> {{ticket_name}} </li>
			</ol>
		";
	}

	public function show_template_type_html( $post ) {
		//Set up the taxonomy object and get terms
		$taxonomy = 'gidi_flights_ntpls_cat';

		//The name of the form
		$name = 'tax_input[' . $taxonomy . ']';

		//Get all the terms for this taxonomy
		$terms     = get_terms( $taxonomy, array( 'hide_empty' => 0 ) );
		$postterms = get_the_terms( $post->ID, $taxonomy );
		$current   = ( $postterms ? array_pop( $postterms ) : false );
		$current   = ( $current ? $current->term_id : 0 );
		?>
		<ul id="<?php echo $taxonomy; ?>checklist" class="list:<?php echo $taxonomy ?> categorychecklist form-no-clear">
			<?php foreach ( $terms as $term ) {
				$id = $taxonomy . '-' . $term->term_id;
				echo "<li id='$id'><label class='selectit'>";
				echo "<input type='radio' id='in-$id' name='{$name}'" . checked( $current, $term->term_id, false ) . "value='$term->term_id' />$term->name<br />";
				echo "</label></li>";
			}
			?>
		</ul>
		<?php

	}

	public function add_new_booking_btn( $post ) {
		$html = "<button id='add_passenger' class='button button-large button-primary' type='button'> Add New Passenger </button>";
		$html .= "\t<button id='sms-notification' class='button button-large button-primary' type='button'> Send SMS Notification </button>";
		$html .= "\t<button id='email-notification' class='button button-large button-primary' type='button'> Send Email Notification </button>";
		$html .= "\t<button class='button button-large button-primary type='button''> Add a new Leg </button>";
		echo $html;
	}
}
