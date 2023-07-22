<?php

// get the blog details
$blog_id = get_blog_details("g-blog");
$g_blog_id = $blog_id->blog_id;

// switch to the blog
switch_to_blog($g_blog_id);

// blog args
$args = array(
	'post_type' => 'post',
	'posts_per_page' => 10,
	'tax_query' => array(
		array(
			'taxonomy' => 'travel_cat',
			'field' => 'slug',
			'terms' => 'travel-blog',
		),
	),
);
$query = new WP_Query($args);
?>

<section class="from-the-world">
	<?php if ($query->have_posts()) : ?>

	<div class="g3-container">
		<div class="g3-hold-fort">
			<div class="g3-full set-text-center">
				<h2 class="set-base-text-color no-bottom-margin no-top-margin set-text-bold intro-title">Discover Nigeria</h2>
				<a href="<?php echo get_site_url(); ?>" id="set-piece" class="set-piece text-it-right button set-base-bg-color no-background-image">
					Read The Travel Blog <i class="fa fa-right-arrow"></i>
				</a>
			</div>
		</div>

		<div class="g3-hold-fort">
			<?php while ($query->have_posts()) : $query->the_post(); ?>
				<a href="<?php the_permalink(); ?>">
					<div class="g3-one-fourth loopy-same-height">
						<div class="g3-hold-fort g3-reset-fort">
								<div class="g3-full">
									<div class="loopy-img-with-btn">
										<?php if (empty(get_the_post_thumbnail_url())) : ?>
											<img id="real-img" src="https://via.placeholder.com/300x200" class="img-responsive img-thumbnail samy-loopy-img">
										<?php else : ?>
											<img id="real-img" src="<?php echo get_the_post_thumbnail_url() ?>" class="img-responsive img-thumbnail samy-loopy-img">
										<?php endif; ?>
										<div class="floating-middle-button show-as-flex">
											<span class="button set-base-bg-color no-background-image">
												Read Now
											</span>
										</div>
									</div>
								</div>
								<div class="g3-full">
									<div class="loopy-header">
										<h4 class="set-base-text-color set-text-center set-text-bold"><?php echo get_the_title(); ?></h4>
									</div>
									<p class="loopy-description set-text-center">
									Are you here for the holiday or simply looking for a place to unwind and commune with nature at its peak?
									</p>
								</div>
						</div>
					</div>
				</a>
			<?php endwhile;
		wp_reset_postdata(); ?>
		</div>
	</div>

	<?php else : ?>
		
	<?php endif; ?>
</section>

<?php restore_current_blog(); ?>
