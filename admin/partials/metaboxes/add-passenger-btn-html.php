<div class="g3 container small-bottom-margin smaller-padding no-background-color no-box-shadow">
	<div class="g3-hold-fort">
		<div class="g3-full">
			<button type="button" class="button insert-new-passenger" data-row="
					<?php
				$name = '';
				$value = "";
				ob_start();
				include plugin_dir_path(__FILE__) . "booking-passenger-repeater-html.php";
				echo esc_attr(ob_get_clean());
				?>">
				<i class="fas fa-user-plus"></i> Add New Passenger
			</button>
		</div>
	</div>
</div>
