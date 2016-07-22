<?php 

/*
 *	Masthead for Desktop
 */

 ?>

<div class="masthead-container">
	<div class="site-branding col-sm-5" data-element="segment">
		<img id="site-logo" class="img-responsive" src="<?php echo get_header_image(); ?>" alt="sctv 26 - site logo">
	</div>

	<nav id="site-navigation" class="main-navigation col-sm-7" role="navigation" data-element="segment">
		<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
	</nav>
</div>