var page = (function() {

    console.log('Hontou no Oto');

    /**
     * set the slick carousel settings for the latest video
     */
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
    };


    function sponsor_list() {
        $('#sponsor .slick-container').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            draggable: false,
            nextArrow: '<div class="custom-slick-next slick-arrow"><i class="fa fa-chevron-right"></i></div>',
            prevArrow: '<div class="custom-slick-prev slick-arrow"><i class="fa fa-chevron-left"></i></div>',
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
    };

    return {
        vidio_latest: vidio_latest,
        sponsor_list:sponsor_list
    }

}());

$(document).ready(function() {
    page.vidio_latest();
    page.sponsor_list();

    /** add arrow DOM on the menu when hovered */
    var parentMenu = $('.desktop #primary-menu > li > a');
    var icon = '<div class="menu-highlighter"><i class="fa fa-chevron-down"></i></div>';

    PageHeader.letThereBeDOM(parentMenu, icon);
    // **




});
