<?php
/**
 * Template part for displaying post lists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package HUT_SCTV_Underscore
 */

$vidio = new Vidio();

?>

<div class="post-list vidio vidio-list vidio-latest">
	<a href="<?php echo get_permalink() ?>">
		<div class="post-list-content">
			<?php echo $vidio->vidio_thumb(); ?>
		</div>
		<div class="post-list-title">
			<?php echo $vidio->vidio_title(); ?>
		</div>
	</a>
</div>