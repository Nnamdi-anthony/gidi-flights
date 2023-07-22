<?php
// loopables items
$gender_args = array('male' => 'Male', 'female' => 'Female');
$passenger_type_args = array('adult', 'child', 'infant');

// choosen answers
$first_name_option = isset($value->first_name) ? $value->first_name : "";
$middle_name_option = isset($value->middle_name) ? $value->middle_name : "";

$passenger_type_option = isset($value->passenger_type) ? $value->passenger_type : "";
$last_name_option = isset($value->last_name) ? $value->last_name : "";
$gender_option = isset($value->gender) ? $value->gender : "";
$email_option = isset($value->email) ? $value->email : "";
$phone_number_option = isset($value->phone_number) ? $value->phone_number : "";
$nationality_option = isset($value->nationality) ? $value->nationality : "";
$date_of_birth_option = isset($value->date_of_birth) ? $value->date_of_birth : "";
$document_type_option = isset($value->document_type) ? $value->document_type : "";
$document_expiry_date_option = isset($value->document_expiry_date) ? $value->document_expiry_date : "";
$document_number_option = isset($value->document_number) ? $value->document_number : "";
$document_issuance_country_option = isset($value->document_number) ? $value->document_number : "";
$id = isset($value->id) ? $value->id : "";

// other options
$other_names = $first_name_option . " " . $middle_name_option;

?>


<div class="g3-container border medium-bottom-margin repeated-column">
	<div class="g3-hold-fort">
		<div class="g3-two-third">
			<h1 class="no-margin no-padding">
				Add a Passenger
				<select name="passenger_type[]" id="passenger_type" class="choose_passenger_type" data-contact='
							<?php
						$name = '';
						$value = "";
						ob_start();
						include plugin_dir_path(__FILE__) . "special-content-html.php";
						echo esc_attr(ob_get_clean());
						?>'>
					<option value="">Passenger Type</option>
					<?php foreach ($passenger_type_args as $i => $passenger_type) : ?>
						<option value="<?php echo esc_attr($passenger_type); ?>" <?php echo selected($passenger_type_option, $passenger_type, false); ?>><?php echo ucwords($passenger_type); ?></option>
					<?php endforeach; ?>
				</select>
			</h1>
		</div>
		<div class="g3-one-third">
			<div class="set-text-right">
				<input type="hidden" name="current_id[]" value="<?php echo $id; ?>" />
				<button type="button" data-deletable="<?php echo $id; ?>" class="button delete-form"><i class="fas fa-trash"></i></button>
			</div>
		</div>
	</div>
	<div class="g3-hold-fort">
		<div class="g3-one-third">
			<label for="gidi_flights_passenger_surname"><?php _e("Surname", 'gidi-flights'); ?></label>
			<br />
			<input class="widefat" type="text" name="gidi_flights_passenger_surname[]" id="gidi_flights_passenger_surname" value="<?php echo esc_attr($last_name_option); ?>" size="30" />
		</div>
		<div class="g3-two-third">
			<label for="gidi_flights_passenger_other_names"><?php _e("First Name and Middle Name", 'gidi-flights'); ?></label>
			<br />
			<input class="widefat" type="text" name="gidi_flights_passenger_other_names[]" id="gidi_flights_passenger_other_names" value="<?php echo esc_attr($other_names); ?>" size="30" />
		</div>
	</div>
	<div class="g3-hold-fort">
		<div class="g3-one-third">
				<label for="gidi_flights_passenger_gender"><?php _e("Gender", 'gidi-flights'); ?></label>
				<br />
				<select name="gidi_flights_passenger_gender[]" id="gidi_flights_passenger_gender" class="widefat">
					<option value="">Choose Gender</option>
					<?php foreach ($gender_args as $key => $title) : ?>
						<option value="<?php echo esc_attr($key); ?>" <?php echo selected($gender_option, $key, false); ?>><?php echo $title; ?></option>
					<?php endforeach; ?>
				</select>
			</div>
		<div class="g3-one-third">
			<label for="gidi_flights_passenger_nationality"><?php _e("Nationality", 'gidi-flights'); ?></label>
			<br />
			<input class="widefat" type="text" name="gidi_flights_passenger_nationality[]" id="gidi_flights_passenger_nationality" value="<?php echo esc_attr($nationality_option); ?>" size="30" />
		</div>
		<div class="g3-one-third">
			<label for="gidi_flights_date_of_birth"><?php _e("Date of Birth", 'gidi-flights'); ?></label>
			<br />
			<input class="widefat small-date-birther" type="date" min="<?php echo date("Y-01-01", strtotime('-100 years')); ?>" max="<?php echo date('Y-m-d'); ?>" autocomplete="off" name="gidi_flights_date_of_birth[]" id="gidi_flights_date_of_birth" value="<?php echo esc_attr($date_of_birth_option); ?>" size="30" />
		</div>
	</div>
	<div class="g3-hold-fort">
		<div class="g3-half">
			<label for="gidi_flights_passenger_document_type"><?php _e("Document Type", 'gidi-flights'); ?></label>
			<br />
			<input class="widefat" type="text" name="gidi_flights_passenger_document_type[]" id="gidi_flights_passenger_document_type" value="<?php echo esc_attr($document_type_option); ?>" size="30" />
		</div>
		<div class="g3-half">
			<label for="gidi_flights_passenger_document_number"><?php _e("Document Number", 'gidi-flights'); ?></label>
			<br />
			<input class="widefat" type="text" name="gidi_flights_passenger_document_number[]" id="gidi_flights_passenger_document_number" value="<?php echo esc_attr($document_number_option); ?>" size="30" />
		</div>
	</div>
	<div class="g3-hold-fort">
		<div class="g3-half">
			<label for="gidi_flights_document_expiry_date"><?php _e("Document Expiry Date", 'gidi-flights'); ?></label>
			<br />
			<input class="widefat" type="text" name="gidi_flights_document_expiry_date[]" id="gidi_flights_document_expiry_date" value="<?php echo esc_attr($document_expiry_date_option); ?>" size="30" />
		</div>
		<div class="g3-half">
			<label for="gidi_flights_document_issunace_country"><?php _e("Document Issunace Country", 'gidi-flights'); ?></label>
			<br />
			<input class="widefat" type="text" name="gidi_flights_document_issunace_country[]" id="gidi_flights_document_issunace_country" value="<?php echo esc_attr($document_issuance_country_option); ?>" size="30" />
		</div>
	</div>

	<div class="g3-hold-fort special-contact-wrapper">
		<div class="special-contact-wr">
				<?php 
			if ($passenger_type_option == 'adult') {
				include plugin_dir_path(__FILE__) . "special-content-html.php";
			}
			?>
		</div>
	</div>
</div>
