<?php 

/*
 *	Sponsor List section Template 
 */

 ?>

 <section class="clearfix" id="sponsor">
	<div class="container spacepad-15">
		<img class="img-responsive center-block" src="<?php echo get_template_directory_uri() . '/asset/our_sponsor.png' ?>" alt="our sponsor">
		<div class="slick-container">
			<?php get_sponsor() ?>
		</div>
	</div>
</section>