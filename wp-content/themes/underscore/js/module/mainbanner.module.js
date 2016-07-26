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
                    breakpoint: 600,
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

});
