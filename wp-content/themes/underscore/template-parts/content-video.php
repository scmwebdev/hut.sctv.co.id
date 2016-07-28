<?php
/**
 * Template part for displaying videos page.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package HUT_SCTV_Underscore
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="entry-header">
		<div class="container">
			<?php 
				$video = new Vidio(); 
				$video->vidio_page();
			?>
		</div>
	</header><!-- .entry-header -->

	<section class="entry-content">
		<div class="container">
			<h1 class=title><?php echo get_the_title() ?></h1>
			<div class="desc">
				<?php the_content(); ?>
			</div>
			<hr>
		</div>
		
	</section>

	<footer class="entry-footer">
		<div class="section-title">
				<div class="container spacepad-15">
					<img class="img-responsive center-block" src="<?php echo get_stylesheet_directory_uri() ?>/asset/latest_video.png" alt="latest video">
				</div>
			</div>
		<section class="clearfix container" id="video-on-demand">
			<div class="slick-container">
					<?php 
						$vod = new Vidio();	
						$vod->display_latest();
					?>
			</div>
		</section>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
