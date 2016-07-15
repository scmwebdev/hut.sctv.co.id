<?php 
	
	/**
	 * Template for Personality Quiz Page
	 * @package HUT SCTV
	 */

	get_header();
?>

	<main class="quiz <?php echo (is_mobile()) ? 'mobile' : 'desktop'; ?>" id="personality-quiz">
		<div class="container-fluid">
			<h1 class="text-center"><?php the_title(); ?></h1>
		</div>
	</main>


<?php get_footer(); ?>