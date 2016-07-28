<?php 
	
	/**
	 * Template for Livestream Page
	 * @package HUT SCTV
	 */

	get_header();
	$livestreamURL = get_field('livestream_url'); //grab the livestream URL

?>

	<div id="primary" class="content-area frontpage type-video livestream">
		<main id="main" class="site-main" role="main">
			<div class="entry-header">
				<div class="container">
					<iframe src="<?php echo $livestreamURL?>"></iframe>	
				</div>
			</div>
		</main>
		<section class="clearfix" id="video-on-demand">
			<div class="section-title">
				<div class="container spacepad-15">
					<img class="img-responsive center-block" src="<?php echo get_stylesheet_directory_uri() ?>/asset/latest_video.png" alt="latest video">
				</div>
			</div>
			<div class="slick-container">
					<?php 
						$vod = new Vidio();	
						$vod->display_latest();
					?>
			</div>
		</section>
	</div>


<?php get_footer(); ?>