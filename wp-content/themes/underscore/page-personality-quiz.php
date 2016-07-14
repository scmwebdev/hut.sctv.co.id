<?php 
	
	/**
	 * Template for Personality Quiz Page
	 * @package HUT SCTV
	 */

	get_header();
?>

	<main class="quiz" id="personality-quiz">
		<div class="container">
			<h1 class="text-center"><?php the_title(); ?></h1>
			<div>
				<button id="submitScore" type="button" class="btn btn-primary">Get Score</button>
			</div>
		</div>
	</main>


<?php get_footer(); ?>