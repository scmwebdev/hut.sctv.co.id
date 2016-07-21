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

						if ( have_posts() ) : while ( have_posts() ) : the_post();
							the_content();
						endwhile;
						endif;

					 ?>

				</section>
			</div>
		</main>
		<section class="" id="show-schedule">
			<?php get_show_schedule(); ?>
		</section>
		<section class="" id="video-on-demand">
			<div class="container-fluid">
					<?php 
						$vod = new Vidio();	
						$vod->display_latest();
					?>
			</div>

		</section>
		<section class="" id="sponsor">
		</section>
	</div>


<?php get_footer(); ?>