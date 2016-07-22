var page = (function() {

    console.log('Hontou no Oto');

    function vidio_latest() {
        var vidio = $('#video-on-demand > div');
        vidio.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            draggable: false,
            nextArrow: '<div class="custom-slick-next slick-arrow"><i class="fa fa-chevron-circle-right"></i></div>',
            prevArrow: '<div class="custom-slick-prev slick-arrow"><i class="fa fa-chevron-circle-left"></i></div>',
            responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    draggable: true
                }
            }]
        });
    }

    return {
        vidio_latest: vidio_latest
    }

}());

$(document).ready(function() {
    page.vidio_latest();
});
