
$(document).ready(function() {

    /**
     * Create a slider function for all the elements that are using
     * slick carousel
     */
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

        /**
         * controller for the show schedule section on the frontpage
         * the amount of content being displayed determines the width of
         * the element.
         */
        var show_schedule = function() {

            var show = $('.show'); //our show element
            var target = $('#show-schedule > .slick-container'); //our slick container

            var countShow = function() {

                //count how many 'show' element on the page
                //and return the value
                return show.length;

            };

            // wrap the resulting value in a variable
            var total = countShow(); 

            target.slick({
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

        };

        return {
            vidio_latest: vidio_latest,
            sponsor_list: sponsor_list,
            show_schedule: show_schedule
        }

    }())

    slider.vidio_latest();
    slider.sponsor_list();
    slider.show_schedule();

});
