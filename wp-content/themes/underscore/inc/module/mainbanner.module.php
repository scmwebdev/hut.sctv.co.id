<?php  

/*
 *	get the main banner
 */

function get_mainbanner() {

	// get the pages attachments
	$attachments = get_posts( array(
	    'post_type'   => 'attachment',
	    'post_parent' => $post->ID
	) );

	if (have_posts()) {
		while(have_posts()) {
			the_post();
			if($attachments) {
				foreach($attachments as $attachment) {
					$html  = '<div class="item-list">'. wp_get_attachment_image( $attachment->ID, 'mainBanner_lg' );
					$html .= '<h4 class="item-title">'. apply_filters( 'the_title', $attachment->post_title ) . '</h4></div>';
					echo $html;
				}
			}
		}
	}

}

?>