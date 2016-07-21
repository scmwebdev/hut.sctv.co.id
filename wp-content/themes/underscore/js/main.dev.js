var page = (function() {

    console.log('Hontou no Oto');

    function vidio_latest() {
        var vidio = $('#video-on-demand > div');
        vidio.slick({
        	slidesToShow: 3
        });
    }

    return {
    	vidio_latest:vidio_latest
    }

}());

$(document).ready(function() {
	page.vidio_latest();
});
