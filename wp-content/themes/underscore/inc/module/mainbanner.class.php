<?php  

/*
 *	get the main banner
 */

class Page {

	// global $post;
	public $banner = '';

	public function __construct() {}

	public function array_push_assoc($array, $key, $value) {
		$array[$key] = $value;
		return $array;
	}

	public function get_attachment() {

		$id = get_the_ID();
		$stack = array();

		// get the current page attachments
		$attachments = get_posts( array(
		    'post_type'   => 'attachment',
		    'post_parent' => $id
		) );

		if (have_posts()) {
			while(have_posts()) {
				the_post();
				if($attachments) {

					/* foreach image attachments display the image and store it in a var $get_img
					 * and push it into an array
					 */
					foreach($attachments as $attachment) {

						$get_img = wp_get_attachment_image( $attachment->ID, 'mainBanner_lg', '', array('class' => 'img-responsive fullwidth') );
						$get_title = get_the_title($attachment->ID);

						$stack = $this->array_push_assoc($stack, 'image', $get_img);
						
					}
				}
			}
		}

		//return the array so that it can be used in another function
		return $stack;

	}

	public function display_banner() {

		// get the image attachments array
		$bannerArr = $this->get_attachment();

	}

}

?>