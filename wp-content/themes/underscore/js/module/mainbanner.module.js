// $(document).ready(function() {


// 	$('#show-schedule').slick({
// 		slidesToShow: 4,
// 	});


// });

/**
 * Create a func that counts how many selected DOM on the doc
 * and adjust the css based on how many content
 */
$(document).ready(function() {

    var showSchedule = (function() {

        var show = $('.show');

        var countShow = function() {
            return show.length;
        };

        var adjustWidth = function() {

            var total = countShow();
            $('#show-schedule').slick({
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
                        slidesToScroll: 1
                    }
                }]

            });

        }

        return {
            countShow: countShow,
            adjustWidth: adjustWidth
        }

    }());

    showSchedule.adjustWidth();

});
