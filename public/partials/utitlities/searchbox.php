<?php

// the arrival date
ob_start();
?>
<div class="g3-one-fifth">
	<label for="arrival_date">Arrival Date</label>
	<input type="text" name="arrival_date" id="arrival_date" class="form-control" placeholder="Enter Arrival Date"
	       autocomplete="off">
</div>
<?php
$arrival_date = ob_get_clean();

// list of classes
$classes = array(
	'Premium'     => 'Premium Class',
	'Business'    => 'Business Class',
	'First Class' => 'First Class', // TODO - fix this just in case the search for first class no longer works
);

$search_page_id   = Gidi_Flights_Helpers::custom_get_page_id( 'search' );
$search_page_link = get_page_link( $search_page_id );
?>


<div class="search-overlay-wrapper">
	<form action="<?php echo $search_page_link; ?>" method="GET">
		<div class="g3-container">
			<div class="g3-hold-fort">
				<div class="flight-type g3-full set-text-left"
				     data-showarrivaldate='<?php echo esc_attr( $arrival_date ); ?>'>
					<button data-return="false" type="button" class="btn no-outline choosing-trip-button"
					        id="one_way_trip">
						One Way Trip
					</button>
					<button data-return="true" type="button"
					        class="btn btn-danger button no-outline choosing-trip-button" id="return_trip">
						Return Trip
					</button>
				</div>
			</div>
			<div class="g3-hold-fort primary-fields">
				<div class="g3-one-fifth">
					<label for="departure_city">Departure City</label>
					<select name="departure_city" id="departure_city" class="height-44 form-control"></select>
				</div>
				<div class="g3-one-fifth">
					<label for="arrival_city">Arrival City</label>
					<select name="arrival_city" id="arrival_city" class="height-44 form-control"></select>
				</div>
				<div class="g3-one-fifth">
					<label for="departure_date">Departure Date</label>
					<input type="text" name="departure_date" id="departure_date" class="form-control"
					       placeholder="Enter Departure Date" autocomplete="off">
				</div>
				<div id="arrival_date_holder">
					<?php echo $arrival_date; ?>
				</div>
				<div class="g3-one-fifth">
					<label for="num_of_travellers">Travellers</label>
					<div class="g3-container no-top-padding no-bottom-padding">
						<div class="g3-hold-fort g3-reset-fort">
							<div class="g3-two-third no-top-padding no-bottom-padding">
								<span class="form-control height-44 show-text-white" id="num_of_travellers"
								      style="padding-top: 10px;display:inline-flex;"><span class="num_amount_trallers"
								                                                           style="margin-right: 8px;font-size: 28px;position: relative; top: -10px;">1</span> <span
										class="smallerTextCont"
										style="font-size: 11px;position: relative;top:-5px;font-weight: 500;"><span
											class="travllText" style="display:block;">Traveller(s)</span> <span
											class="travllTextClass" style="display:block;">Economy</span></span> </span>
							</div>
							<div class="g3-one-third no-top-padding no-bottom-padding">
								<button class="button cmon-button" type="submit"><i class="fa fa-search"></i></button>
							</div>
						</div>
					</div>
					<input type="hidden" name="trip_type_choice" id="trip_type_choice" value="return_trip"
					       class="form-control">
					<input type="hidden" name="num_of_travellers_count" id="num_of_travellers_count"
					       class="form-control">
					<div id="num_of_travllers_content">
						<div id="num_of_travellers_content_wrapper">
							<div class="g3-container">
								<div class="g3-hold-fort">
									<div class="g3-full">
										<h3 class="set-text-center set-text-bold no-top-margin no-bottom-margin">Choose
											The Number of Travellers</h3>
									</div>
								</div>
								<div class="g3-hold-fort">
									<div class="g3-one-third">
										<label for="num_adults">Adult</label>
										<input type="number" min="1" max="9" name="num_adults" id="num_adults"
										       class="form-control" value="1">
									</div>
									<div class="g3-one-third">
										<label for="num_child">Child</label>
										<input type="number" min="0" max="9" data-maxpassengers="9" name="num_child"
										       id="num_child" class="form-control" value="0">
									</div>
									<div class="g3-one-third">
										<label for="num_infant">Infant</label>
										<input type="number" min="0" max="9" data-maxpassengers="9" name="num_infant"
										       id="num_infant" class="form-control" value="0">
									</div>
								</div>
								<div class="g3-hold-fort">
									<div class="g3-full set-text-center">
										<!-- <button class="close-button button center-block" type="button">Continue With <span class="num_amount_trallers">1</span> Traveller(s)</button> -->
									</div>
								</div>
								<div class="g3-hold-fort">
									<div class="g3-full">
										<div id="child-alert"
										     class="no-display alert alert-info no-border-radius no-bottom-margin">
											<span class="fa fa-info-circle" aria-hidden="true"></span>
											<span class="spit-content"></span>
										</div>
										<div id="capacity-alert"
										     class="no-display small-top-margin alert alert-info no-border-radius no-bottom-margin">
											<span class="fa fa-info-circle" aria-hidden="true"></span>
											<span class="spit-content"></span>
										</div>
									</div>
								</div>
							</div>
							<div class="g3-container">
								<div class="g3-hold-fort">
									<div class="g3-full">
										<h3 class="set-text-center set-text-bold no-top-margin no-bottom-margin">Choose
											Your Preferred Class</h3>
									</div>
								</div>
								<div class="g3-hold-fort">
									<div class="g3-full otherOptions-content">
										<label for="passenger_class">Preferred Class</label>
										<select name="passenger_class" id="passenger_class"
										        class="form-control height-44">
											<option value="Economy" selected>Economy</option>
											<?php foreach ( $classes as $class_value => $class_name ) : ?>
												<option
													value="<?php echo $class_value; ?>"><?php echo $class_name; ?></option>
											<?php endforeach; ?>
										</select>
									</div>
								</div>
								<div class="g3-hold-fort">
									<div class="g3-full set-text-center">
										<button class="close-button button center-block" type="button">Continue With
											Choice
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>
