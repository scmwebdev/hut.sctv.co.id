<?php 
	
	/**
	 * Template for Frontpage
	 * @package HUT SCTV
	 */

	get_header();
?>

	<div id="primary" class="content-area frontpage">
		<main id="main" class="site-main" role="main">
			<div class="container-fluid no-spacepad-side">
				<section class="main-banner">
					<?php
						//call the frontpage slider 
						masterslider(1); 
					?>
				</section>
			</div>
		</main>
		<?php if(!is_mobile()) { ?>
		<section class="underbanner">
			<div class="container">
				<img class="img-responsive center-block" src="<?php echo get_template_directory_uri() . '/asset/26_hours.jpg'?>" alt="">
			</div>
		</section>
		<?php } //endif ?>
		<section class="clearfix" id="show-schedule">
			<div class="slick-container">
				<?php get_show_schedule(); ?>
			</div>
		</section>
		<section class="clearfix" id="video-on-demand">
			<div class="slick-container">
					<?php 
						$vod = new Vidio();	
						$vod->display_latest();
					?>
			</div>

		</section>

		<!-- display the sponsor list -->
		<?php get_template_part('section/page', 'sponsor'); ?>
	</div>


<?php get_footer(); ?>