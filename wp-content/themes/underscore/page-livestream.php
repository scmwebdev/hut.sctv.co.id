<?php 
	
	/**
	 * Template for Livestream Page
	 * @package HUT SCTV
	 */

	get_header();
	$livestreamURL = get_field('livestream_url'); //grab the livestream URL

?>

	<div id="primary" class="content-area frontpage livestream">
		<main id="main" class="site-main" role="main">
			<div class="entry-header">
				<div class="container">
					<iframe src="<?php echo $livestreamURL?>"></iframe>	
				</div>
			</div>
		</main>
	</div>


<?php get_footer(); ?>