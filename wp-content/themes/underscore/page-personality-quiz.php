<?php 
	
	/**
	 * Template for Personality Quiz Page
	 * @package HUT SCTV
	 */

	get_header();
?>

	<main class="quiz <?php echo (is_mobile()) ? 'mobile' : 'desktop'; ?>" id="personality-quiz">
		<div class="container">
			<header class="clearfix">
				<div class="col-xs-12 col-sm-8">
					<h1 class="text-left"><?php the_title(); ?></h1>	
				</div>
				<div class="col-xs-12 col-sm-4">
					<button id="submitScore" class="btn btn-primary disabled" type="button">Continue</button>
				</div>
			</header>
		</div>
	</main>


<?php get_footer(); ?>