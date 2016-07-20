<?php  

/*
 *	get the main banner
 */

class Page {

	// global $post;

	public function __construct() {}

	public function get_attachment() {

		$id = get_the_ID();

		// get the pages attachments
		$attachments = get_posts( array(
		    'post_type'   => 'attachment',
		    'post_parent' => $id
		) );

		if (have_posts()) {
			while(have_posts()) {
				the_post();
				if($attachments) {
					foreach($attachments as $attachment) {

						$banner = wp_get_attachment_image( $attachment->ID, 'mainBanner_lg' );
						return $banner;

						// $html  = '<div class="item-list">'. wp_get_attachment_image( $attachment->ID, 'mainBanner_lg' );
						// // $html .= '<h4 class="item-title">'. apply_filters( 'the_title', $attachment->post_title ) . '</h4>';
						// $html .= '</div>';
						// echo $html;
					}
				}
			}
		}

	}

	public function display_banner() {

		$attachment = $this->get_attachment();
		$html  = '<div class="item-list">'. $attachment .'</div>';
		echo $html;
	  	
		

	}

}
function get_mainbanner($id) {

	// get the pages attachments
	$attachments = get_posts( array(
	    'post_type'   => 'attachment',
	    'post_parent' => $id
	) );

	if (have_posts()) {
		while(have_posts()) {
			the_post();
			if($attachments) {
				foreach($attachments as $attachment) {
					$html  = '<div class="item-list">'. wp_get_attachment_image( $attachment->ID, 'mainBanner_lg' );
					// $html .= '<h4 class="item-title">'. apply_filters( 'the_title', $attachment->post_title ) . '</h4>';
					$html .= '</div>';
					echo $html;
				}
			}
		}
	}

}

?>