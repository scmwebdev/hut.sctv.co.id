<?php  

/*
 * Vidio.com URL manipulation
 */

class Vidio {

	public function __construct() {}

	/**
	 * Grab the vidio URL from the CMS
	 */
	public function get_url() {
		$url = get_field('video_url');
		return $url;
	}

	/**
	 * Enable the player on the video
	 */
	public function set_player_to_true() {
		$url = $this->get_url();
		$url = str_replace('player_only=false', 'player_only=true', $url);

		return $url;
	}

	/**
	 * Get the ID of the vidio
	 */
	public function get_vidio_id() {
		$video = $this->get_url();
		$regEx = "/(?<=\watch\/)(.*?)(?=\-)/"; //use regex to grab the ID between the strings
		preg_match($regEx, $video, $matches); 

		return $matches[0]; //return only the ID
	}

	/**
	 * Grab the video ID and wrap it in bootstrap embed template
	 */
	public function clean_url() {
		$id = $this->get_vidio_id();
		$template = '<iframe class="vidio-embed embed-responsive-item" src="https://www.vidio.com/embed/';
		$template .= $id;
		$template .= '?autoplay=true&player_only=true&" scrolling="no" frameborder="0" allowfullscreen></iframe>';
		return $template;
	}

	/**
	 * Grab the video thumbnail from the cms with post_thumbimage size and img-responsive class
	 */
	public function vidio_thumb() {
		global $post;
		$thumb = get_the_post_thumbnail($post->ID, 'post_thumb', array('class' => 'img-responsive') );

		return $thumb;
	}

	/**
	 * Template for the video as page
	 */
	public function vidio_page() {
		$html  = '<div class="vidio vidio-page vidio-latest">';
		$html .= $this->clean_url();
		$html .= '</div>';

		echo $html;
	}

	/**
	 * Template for the video as lists(thumbnails)
	 */
	public function vidio_list() {

		$html  = '<div class="vidio vidio-list vidio-latest">';
		$html .= '<a href="'. get_permalink() .'">';
		$html .= $this->vidio_thumb();
		$html .= '</a>';
		$html .= '</div>';

		echo $html;
	}
	/**
	 * Grab the latest posts for video category
	 */
	public function display_latest() {
		//set our filter
		$args = array(
			'post_type' => 'video',
			'post_per_page' => '6',

		);

		$query = new WP_Query($args);

		if ($query->have_posts()) { 
			while ($query->have_posts()) {
				$query->the_post();
				$this->vidio_list();
			}
		}

		wp_reset_postdata();
	}

}

?>