var page = (function() {

    console.log('Hontou no Oto');

    function vidio_latest() {
        var vidio = $('#video-on-demand > div');
        vidio.slick({
        	slidesToShow: 3,
        	slidesToScroll: 1,
        	nextArrow: '<div class="custom-slick-next slick-arrow"><i class="fa fa-chevron-circle-right"></i></div>',
        	prevArrow: '<div class="custom-slick-prev slick-arrow"><i class="fa fa-chevron-circle-left"></i></div>'
        });
    }

    return {
    	vidio_latest:vidio_latest
    }

}());

$(document).ready(function() {
	page.vidio_latest();
});
