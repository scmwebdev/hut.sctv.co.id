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
		</div>
		
	</section>

	<footer class="entry-footer">
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
