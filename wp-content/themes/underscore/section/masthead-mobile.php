<?php 

/*
 *	Masthead for mobile
 */

 ?>

 <!-- site logo -->
<div class="masthead-container">
	<div class="float-left" data-element="segment">
		<img id="site-logo" class="img-responsive" src="<?php echo get_header_image(); ?>" alt="sctv 26 - site logo">
	</div>
	<div class="float-right trigger trigger-menu">
	</div>
</div>

<!-- site navigation -->
<nav id="site-navigation" class="main-navigation" role="navigation">
	<div class="trigger-menu text-right">
		<i class="fa fa-close fa-3x">&nbsp;</i>
	</div>
	<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
</nav><!-- #site-navigation -->