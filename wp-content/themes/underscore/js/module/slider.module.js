/**
 * Create a func that counts how many selected DOM on the document
 * and use the slick plugin properties to adjust how many contents
 * should be displayed.
 */
$(document).ready(function() {

    var showSchedule = (function() {

        var show = $('.show');
        var countShow = function() {
            return show.length;
        };

        var responsiveContent = function() {

            var total = countShow();
            $('#show-schedule > .slick-container').slick({
                slidesToShow: total,
                autoplay: true,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }]
            });
        }

        return {
            countShow: countShow,
            responsiveContent: responsiveContent
        }

    }());

    showSchedule.responsiveContent();

    var slider = (function() {

        /**
         * controller for the latest video slider on the frontpage
         */
        var vidio_latest = function() {

            var target = $('#video-on-demand > div');
            target.slick({
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
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        draggable: true
                    }
                }]
            });
        };

        /**
         * controller for the sponsor list slider on the frontpage
         */
        var sponsor_list = function() {

            var target = $('#sponsor .slick-container');
            target.slick({
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
                        draggable: true
                    }
                }]
            });

        };

        return {
            vidio_latest: vidio_latest,
            sponsor_list: sponsor_list
        }

    }())

    slider.vidio_latest();
    slider.sponsor_list();

});
