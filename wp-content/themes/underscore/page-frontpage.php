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
			    		$frontpage = new Page();
			    		$frontpage->display_banner();
			    	?>
				</section>
			</div>
		</main>
		<section class="" id="show-schedule">
		</section>
		<section class="" id="video-on-demand">
		</section>
		<section class="" id="sponsor">
		</section>
	</div>


<?php get_footer(); ?>