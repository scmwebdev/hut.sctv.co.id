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
        PersonalityQuiz.getQuizData();

        // execute bindUI() once the ajax is complete
        $(document).ajaxComplete(function() {
            PersonalityQuiz.bindUI();
            PersonalityQuiz.finalScore();
        });


    },
    getQuizData: function() {

        var sinetronJSON = PersonalityQuiz.config.sinetronJSON;

        $.getJSON(sinetronJSON, { format: "json" })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                $('#info').html(err);
            })
            .done(function(data) {

                var sinetronArr = [];
                for (i = 0; i < data.length; i++) {
                    sinetronArr.push('<div class="item" data-score="' + data[i].score + '"><img class="img-responsive full-width" src="' + siteUrl + data[i].img + '"><i class="fa fa-check fa-2x" aria-hidden="true"></i></div>');
                }

                PersonalityQuiz.appendUI(sinetronArr);
                PersonalityQuiz.displayQuizData();

            });
    },
    displayQuizData: function() {

        var itemPersona = $('.desktop quiz-content > .item');
        var itemContainer = $('quiz-content').width();
        var totalItem = itemPersona.length;
        $(itemPersona).css('width', function() {
            return itemContainer / totalItem + 'px';
        });

    },
    appendUI: function(targetArray) {

        var container = $('#personality-quiz > div');
        $('.quiz header > div').matchHeight();
        // append quiz content section that lists all our item
        $("<quiz-content>", {
            "class": "clearfix spacepad-15",
            html: targetArray.join("")
        }).appendTo(container);

        // append info section for error warnings or any other information
        $('<info>', {
            'class': 'clearfix'
        }).appendTo(container);


    },
    bindUI: function() {

        var item = $('quiz-content > .item');
        // var submitBtn = PersonalityQuiz.config.submitBtn;
        var submitBtn = $('#submitScore');

        item.on('click', function(evt) {
            evt.stopPropagation();
            $(this).toggleClass('selected');

            var itemChecked = $('.item.selected');
            if (itemChecked.length) {

                if (itemChecked.length === 4) {
                    submitBtn.removeClass('disabled');
                    $(item).not('.selected').css('pointer-events', 'none');

                } else {
                    $(item).css('pointer-events', 'auto');
                    submitBtn.addClass('enable');
                }

            }
        });

    },
    finalScore: function() {

        var submitScore = $('#submitScore');

        $(submitScore).one('click', function(event) {
            event.stopPropagation();

            $(this).addClass('disabled'); //disabled the submit button
            $('.item').css('pointer-events', 'none'); //disable the item once its submitted

            // append the result section
            $('<result>', {
                'class': 'quiz-result'
            }).appendTo('body');

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
                var bolton = data.personality[2];

                var score = PersonalityQuiz.countScore();



                console.log(score);
                if (score >= 20 && score < 30) {
                    PersonalityQuiz.appendResult(jon);
                } else if (score >= 30 && score < 40) {
                    PersonalityQuiz.appendResult(ned);
                } else {
                    PersonalityQuiz.appendResult(bolton);
                }

                PersonalityQuiz.removeDom();
                // PersonalityQuiz.appendUI(personaArr);
                // PersonalityQuiz.displayData();

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
    appendResult: function(persona) {

        var resultContainer = $('.quiz-result');
        var resultID = persona.name.replace(/\s/g, '-').toLowerCase();

        var html = '<section class="clearfix container"><h2 class="title result-title spacepad-15">Your personality is...</h2><section class="col-xs-12 col-sm-4 result-img"><img alt="image - ' + persona.name + '"src="' + siteUrl + persona.img + '"></section><section class="col-xs-12 col-sm-8"><h1 class="title result-name">' + persona.name + '!</h1><p class=result-desc>' + persona.desc + '</section></section>';

        resultContainer.attr('id', resultID).append(html);
    },
    removeDom: function() {

        var elem = ['.quiz header', 'quiz-content'];
        $.each(elem, function(i){

            $(elem[i]).remove();

        });
    }

};

(function($) {

    console.log('forbidden lover');

    $(document).ready(function() {
        PersonalityQuiz.startQuiz();
    });


})(jQuery);
