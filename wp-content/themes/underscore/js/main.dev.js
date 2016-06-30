/**
 * Main JS
 */

var PersonalityQuiz = {

    start: function() {

        var jsonURL = siteUrl + '/wp-content/themes/underscore/json/personality.json';
        

        $.getJSON(jsonURL, { format: "json" })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                $('#info').html(err);
            })
            .done(function(data) {

            	var personaArr = [];
                for (i = 0; i < data.length; i++) {
                    personaArr.push('<div class="item" data-score="' + data[i].score + '"><img class="img-responsive full-width" src="' + data[i].img + '"></div>');
                }

                PersonalityQuiz.appendUI(personaArr);
                PersonalityQuiz.displayData();

            })
    },
    displayData: function() {

        var item = $('.quiz-container > .item');
        var itemContainer = $('.quiz-container').width();
        var totalItem = item.length;
        $(item).css('width', function() {
            return itemContainer / totalItem + 'px';
        })

    },
    appendUI: function(targetArray) {

        var container = $('#personality-quiz .container');
        $("<div>", {
            "class": "quiz-container clearfix spacepad-15",
            html: targetArray.join("")
        }).appendTo(container);
        $('<div>', {
            'id': 'info'
        }).appendTo(container);

    }

};

(function($) {

    console.log('forbidden lover');
	PersonalityQuiz.start();


})(jQuery);
