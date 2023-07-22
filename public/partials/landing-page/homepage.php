<?php

$options       = get_option( $this->plugin_name . "_general_options" );
$slider_option = $options['slider_shortcode'];
$landing_text  = ! empty( $options['landing_page_welcome_text'] ) ? $options['landing_page_welcome_text'] : "<h1 class='set-text-center'> Welcome to Flights </h1>";
$is_image      = false;

// require the searchbox file into a variable
ob_start();
include plugin_dir_path( __FILE__ ) . "../utitlities/searchbox.php";
$searchbox = ob_get_clean();

// require the tabby box  into a variable
ob_start();
include plugin_dir_path( __FILE__ ) . "../utitlities/navtabby-box.php";
$tabbybox = ob_get_clean();

// require the tabby box  into a variable
ob_start();
?>
	<div class="intro-landing-text">
		<?php echo $landing_text; ?>
	</div>
<?php do_action( "gf_before_landing_page_tab" ); ?>
	<div class="intro-tabby-navbar">
		<?php echo $tabbybox; ?>
	</div>
<?php do_action( "gf_after_landing_page_tab" ); ?>
	<div class="intro-searchbox">
		<?php echo $searchbox; ?>
	</div>
<?php
$whole_content = ob_get_clean();

// get sliders or background image
if ( strpos( $slider_option, '[' ) !== false && strpos( $slider_option, ']' ) !== false ) { // check if $slider_option contains the [ key
	ob_start(); // delay the output for later
	do_shortcode( $slider_option );
	$bg_image = esc_attr( ob_get_clean() ); // clean the html string
	$is_image = false;
} else {
	$bg_image = $slider_option;
	$is_image = true;
}

// common padding and class
$class_jumbotron = "fp-landing-wrapper set-position-as-relative";

do_action( 'gf_before_searchbar' );

if ( $is_image ) {
	?>
	<div class="<?php echo $class_jumbotron; ?>  large-top-padding is-bg-image"
	     style="background-image: url('<?php echo $bg_image; ?>');">
		<?php echo $whole_content; ?>
	</div>
	<?php

} else {
	?>

	<div class="<?php echo $class_jumbotron; ?> is-slider-image">
		<div class="slider-wrapper">
			<?php echo do_shortcode( $slider_option ); ?>
		</div>
		<div class="slider-content-holder">
			<div class="inner-holder-content">
				<?php echo $whole_content; ?>
			</div>
		</div>
	</div>
	<?php
}

do_action( 'gf_after_searchbar' );
