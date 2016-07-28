<?php 
	
	/**
	 * Template for Livestream Page
	 * @package HUT SCTV
	 */

	get_header();
?>

	<div id="primary" class="content-area frontpage">
		<main id="main" class="site-main" role="main">
			<?php 

				$livestreamURL = get_field('livestream_url');
				echo $livestreamURL;

			?>
		</main>
	</div>


<?php get_footer(); ?>