<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package HUT_SCTV_Underscore
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<script type="text/javascript">
var siteUrl = '<?php echo site_url(); ?>';
</script>

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> style="background: url('<?php echo site_url()?>/wp-content/uploads/2016/07/site_bg.jpg') no-repeat;background-position-y: -120%;no-repeat;background-size: cover;">
<div id="page" class="site <?php (is_mobile()) ? 'mobile' : 'desktop';?>">
	<!-- #masthead -->
	<header id="masthead" class="site-header" role="banner">
		<?php 
			if(is_mobile()) {
				get_template_part('section/masthead', 'mobile'); 
			} else {
				get_template_part('section/masthead', 'desktop'); 
			}
		?>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
		<div class="<?php (is_mobile()) ? '' : 'container-fluid no-spacepad-side'?>">
		