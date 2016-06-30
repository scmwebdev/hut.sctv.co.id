/**
 * Main JS
 */

(function($) {

    console.log('forbidden lover');

    var jsonURL = siteUrl + '/wp-content/themes/underscore/json/personality.json';

    $.getJSON(jsonURL, {
            format: "json"
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            // console.log("Request Failed: " + err);
            $('#info').html(err);
        })
        .done(function(data) {

        	var arr =[];
            for (i = 0; i < data.length; i++) {
                arr.push('<div class="item" data-score="'+ data[i].score +'"><img src="' + data[i].img + '"></div>');
            }

            $("<div>", {
                "class": "my-new-list",
                html: arr.join("")
            }).appendTo(".quiz-container");
        })






})(jQuery);

