<?php

// list of classes
$classes = array(
	'Economy' => 'Economy Class',
	'Premium' => 'Premium Class',
	'Business' => 'Business Class',
	'First' => 'First Class',
);

// list of trip types
$trip_types = array(
	'one_way' => 'One Way',
	'return_trip' => 'Return Trip',
);

?>

<div class="g3-container">
	<div class="g3-hold-fort">
		<div class="g3-one-third">
			<label for="passenger_trip_type">Trip type</label>
			<br>
			<select name="passenger_trip_type" id="passenger_trip_type" class="widefat">
				<option value="">Choose Trip Type</option>
				<?php foreach ($trip_types as $key => $name) : ?>
				<option value="<?php echo $key; ?>"><?php echo $name; ?></option>
				<?php endforeach; ?>
			</select>
		</div>
		<div class="g3-one-third">
			<label for="passenger_origin">Origin</label>
			<br>
			<select name="passenger_origin" id="passenger_origin" class="widefat"></select>
		</div>
		<div class="g3-one-third">
			<label for="passenger_destination">Destination</label>
			<br>
			<select name="passenger_destination" id="passenger_destination" class="widefat"></select>
		</div>
	</div>
	<div class="g3-hold-fort">
		<div class="g3-one-third">
			<label for="passenger_departure_date">Departure date</label>
			<br>
			<input type="text" name="passenger_departure_date" id="passenger_departure_date" class="widefat" autocomplete="off">
		</div>
		<div class="g3-one-third">
			<label for="passenger_arrival_date">Arrival date</label>
			<br>
			<input type="text" name="passenger_arrival_date" id="passenger_arrival_date" class="widefat" autocomplete="off">
		</div>
		<div class="g3-one-third">
			<label for="passenger_class">Travellers Class</label>
			<br>
			<select name="passenger_class" id="passenger_class" class="widefat">
				<option value="">All Classes</option>
				<?php foreach ($classes as $class_value => $class_name) : ?>
				<option value="<?php echo $class_value; ?>"><?php echo $class_name; ?></option>
				<?php endforeach; ?>
			</select>
		</div>
	</div>
	<div class="g3-hold-fort">
		<div class="g3-one-third">
			<label for="number_adult_passengers">No. of Adult Passenger</label>
			<br>
			<input type="number" value="1" min="1" max="200" name="number_adult_passengers" id="number_adult_passengers" class="widefat">
		</div>
		<div class="g3-one-third">
			<label for="number_child_passengers">No. of Child Passenger</label>
			<br>
			<input type="number" value="0" min="0" max="200" name="number_child_passengers" id="number_child_passengers" class="widefat">
		</div>
		<div class="g3-one-third">
			<label for="number_infant_passengers">No. of Infant Passenger</label>
			<br>
			<input type="number"value="0" min="0" max="200"  name="number_infant_passengers" id="number_infant_passengers" class="widefat">
		</div>
	</div>
	<div class="g3-hold-fort">
		<div class="g3-full"><input type="button" value="Search For Flight" class="search-for-flights button button-primary button-large take-right" id="searchFlightsBtn"></div>
	</div>
</div>
