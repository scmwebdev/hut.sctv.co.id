/**
 * Main JS
 */

var PersonalityQuiz = {
    'config': {
        jsonURL: siteUrl + '/wp-content/themes/underscore/json/personality.json',
        submitBtn: $('#submitScore'),
        container: $('#personality-quiz > .container')
    },

    startQuiz: function(config) {

        $.extend(PersonalityQuiz.config, config);

        // grab the json file
        PersonalityQuiz.getData();

        // execute bindUI() once the ajax is complete
        $(document).ajaxComplete(function() {
            PersonalityQuiz.bindUI();
            PersonalityQuiz.finalScore();
        });


    },
    getData: function() {

        var jsonURL = PersonalityQuiz.config.jsonURL;


        $.getJSON(jsonURL, { format: "json" })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                $('#info').html(err);
            })
            .done(function(data) {

                var personaArr = [];
                for (i = 0; i < data.length; i++) {
                    personaArr.push('<div class="item" data-score="' + data[i].score + '"><img class="img-responsive full-width" src="' + siteUrl + data[i].img + '"></div>');
                }

                PersonalityQuiz.appendUI(personaArr);
                PersonalityQuiz.displayData();

            })
    },
    displayData: function() {

        var itemPersona = $('.quiz-container > .item');
        var itemContainer = $('.quiz-container').width();
        var totalItem = itemPersona.length;
        $(itemPersona).css('width', function() {
            return itemContainer / totalItem + 'px';
        })

    },
    appendUI: function(targetArray) {

        var container = $('#personality-quiz .container');
        $("<div>", {
            "class": "quiz-container clearfix spacepad-15",
            html: targetArray.join("")
        }).appendTo(container);

        $('<button>', {
            'id': 'submitScore',
            'class': 'btn btn-primary disabled',
            'type': 'button',
            'text': 'Submit'
        }).appendTo(container);

        // $('<div>', {
        //     'id'    : 'info'
        // }).appendTo(container);

        // $('<div>', {
        //     'id'    : 'score'
        // }).appendTo(container);

    },
    bindUI: function() {

        var item = $('.quiz-container > .item');
        // var submitBtn = PersonalityQuiz.config.submitBtn;
        var submitBtn = $('#submitScore');

        item.on('click', function() {

            $(this).toggleClass('selected');

            var itemChecked = $('.item.selected');
            if (itemChecked.length) {

                if (itemChecked.length === 4) {
                    submitBtn.removeClass('disabled');
                    $(item).not('.selected').css('pointer-events', 'none');

                } else {
                    $(item).css('pointer-events', 'auto');
                    submitBtn.addClass('disabled');
                }

            }
        });

    },
    countScore: function() {
        var getScore = $('.item.selected');
        var total = 0;
        $.each(getScore, function() {

            var score = $(this).attr('data-score');
            total += parseInt(score);

        });
        console.log(total);
    },
    finalScore: function() {
        var submitScore = $('#submitScore');
        var container = $('#personality-quiz > .container');
        PersonalityQuiz.config.container.addClass('test');
        // var submitScore = PersonalityQuiz.config.submitBtn;
        $(submitScore).click(function(event) {
            event.preventDefault();
            PersonalityQuiz.countScore();

            $('<div>', {
                'id': 'result'
            }).appendTo('#page');

        });
    }

};

(function($) {

    console.log('forbidden lover');


    $(document).ready(function() {
        PersonalityQuiz.startQuiz();


    });


})(jQuery);
