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
			<section class="site-logo footer-content">
				<!-- <img id="site-logo" class="img-responsive" src="<?php echo get_header_image(); ?>" alt="sctv 26 - site logo"> -->
				<img class="img-responsive" src="<?php echo get_stylesheet_directory_uri(); ?>/src/26sctv_logo_white.png" alt="">
			</section>
			<section class="site-map footer-content">
				<?php dynamic_sidebar( 'footer_sitemap' ); ?>
			</section>
			<section class="site-social">
				<h3 class="title">Follow Us</h3>
				<ul class="nodots clearfix">
					<li class="vidio">
						<a target="_blank" href="http://www.vidio.com">
							<img class="img-responsive" src="<?php echo get_stylesheet_directory_uri(); ?>/src/vidio_logo.png" alt="">
						</a>
					</li>
					<li class="facebook">
						<a target="_blank" href="http://www.facebook.com">
							<img class="img-responsive" src="<?php echo get_stylesheet_directory_uri(); ?>/src/facebook_logo.png" alt="">
						</a>
					</li>
					<li class="twitter">
						<a target="_blank" href="http://www.vidio.com">
							<img class="img-responsive" src="<?php echo get_stylesheet_directory_uri(); ?>/src/twitter_logo.png" alt="">
						</a>
					</li>
				</ul>
				<p class="copyrights"><i class="fa fa-copyright"></i>&nbsp;2016 SCTV. All rights reserved.</p>
			</section>
		</div>
	</footer><!-- #colophon -->
	
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
