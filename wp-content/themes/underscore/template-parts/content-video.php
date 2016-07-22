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

	<!-- <section class="entry-content">
		<div class="container">
			<?php the_title('<h1>'); ?>
		</div>
		
	</section> -->

	<footer class="entry-footer">
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
