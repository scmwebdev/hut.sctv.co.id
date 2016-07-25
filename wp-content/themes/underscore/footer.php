<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package HUT_SCTV_Underscore
 */

?>
		</div><!-- .container -->
	</div><!-- #content -->

	<footer id="colophon" class="site-footer clearfix" role="contentinfo">
		<div class="container">
			<section class="site-logo">
				<img id="site-logo" class="img-responsive" src="<?php echo get_header_image(); ?>" alt="sctv 26 - site logo">
			</section>
			<section>
				<?php dynamic_sidebar( 'footer_sitemap' ); ?>
			</section>
		</div>
	</footer><!-- #colophon -->
	
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
