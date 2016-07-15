/**
 * Main JS
 */

var PersonalityQuiz = {
    'config': {
        sinetronJSON: siteUrl + '/wp-content/themes/underscore/json/sinetron.json',
        personalityJSON: siteUrl + '/wp-content/themes/underscore/json/personality.json',
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

        var sinetronJSON = PersonalityQuiz.config.sinetronJSON;


        $.getJSON(sinetronJSON, { format: "json" })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                $('#info').html(err);
            })
            .done(function(data) {

                var sinetronArr = [];
                for (i = 0; i < data.length; i++) {
                    sinetronArr.push('<div class="item" data-score="' + data[i].score + '"><img class="img-responsive full-width" src="' + siteUrl + data[i].img + '"></div>');
                }

                PersonalityQuiz.appendUI(sinetronArr);
                PersonalityQuiz.displayData();

            });
    },
    displayData: function() {

        var itemPersona = $('.quiz-container > .item');
        var itemContainer = $('.quiz-container').width();
        var totalItem = itemPersona.length;
        $(itemPersona).css('width', function() {
            return itemContainer / totalItem + 'px';
        });

    },
    appendUI: function(targetArray) {

        var container = $('#personality-quiz .container');
        $("<div>", {
            "class": "quiz-container clearfix spacepad-15",
            html: targetArray.join("")
        }).appendTo(container);

        // append the submit button for the quiz
        $('<button>', {
            'id': 'submitScore',
            'class': 'btn btn-primary disabled',
            'type': 'button',
            'text': 'Submit'
        }).appendTo(container);

        // append info section for error warnings or any other information
        $('<div>', {
            'id': 'info'
        }).appendTo(container);


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
        return total;
    },
    finalScore: function() {

        var submitScore = $('#submitScore');

        $(submitScore).one('click', function(event) {
            event.stopPropagation();

            $(this).addClass('disabled'); //disabled the submit button
            $('.item').css('pointer-events', 'none'); //disable the item once its submitted

            // append the result section
            $('<div>', {
                'class': 'quiz-result'
            }).appendTo('#page');

            PersonalityQuiz.displayResult();
        });
    },
    displayResult: function() {

        var personalityJSON = PersonalityQuiz.config.personalityJSON;

        $.getJSON(personalityJSON, { format: "json" })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                $('#info').html(err);
                console.log(err);
            })
            .done(function(data) {
                console.log('success!');

                var jon = data.personality[0];
                var ned = data.personality[1];

                var score = PersonalityQuiz.countScore();

                if (score >= 20 && score < 30) {
                    PersonalityQuiz.appendResult(jon);
                } else if (score >= 30 && score < 40) {
                    PersonalityQuiz.appendResult(ned);
                }

                // PersonalityQuiz.appendUI(personaArr);
                // PersonalityQuiz.displayData();

            });
    },
    appendResult: function(persona) {

        var resultContainer = $('.quiz-result');
        var resultID = persona.name.replace(/\s/g, '-').toLowerCase();
        
        var html = '<section class=container><h2 class="title result-title">Your personality is...</h2><div class="col-sm-4 col-xs-12 result-img"><img alt="image - '+ persona.name +'"src="'+ siteUrl + persona.img +'"></div><h1 class="title result-name">'+ persona.name +'!</h1><p class=result-desc>'+ persona.desc +'</section>';

        resultContainer.attr('id', resultID).append(html);
    }

};

(function($) {

    console.log('forbidden lover');

    $(document).ready(function() {
        PersonalityQuiz.startQuiz();
    });


})(jQuery);
