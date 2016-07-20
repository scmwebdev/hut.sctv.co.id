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

    /** 
     * #Summary: startQuiz()
     * firstup we extend the config.
     * then we call the getQuizData()
     * and when the its completed do bindUI() and submitQuiz()
     */
    startQuiz: function(config) {

        $.extend(PersonalityQuiz.config, config);

        // grab the json file
        PersonalityQuiz.getQuizData();

        // execute the remaining tasks once the ajax request is complete
        $(document).ajaxComplete(function() {
            PersonalityQuiz.bindUI();
            PersonalityQuiz.submitQuiz();
        });


    },

    /** 
     * #Summary: getQuizData() => appendQuizData() && displayQuizData()
     * - first step is fetch the json files in our theme files by using $.getJSON() function
     * - then we use for loops to grab each data in json, wrap it with html, and insert it into our array
     * - we then create a separate function called appendUI() which will create and insert our custom DOM elements including joining our array
     * - last step is displaying our data by calculating the width of the container, divide them with the total amount of item
     */
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

                PersonalityQuiz.appendQuizData(sinetronArr);
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
    appendQuizData: function(targetArray) {

        var container = $('#personality-quiz > div');

        // set all divs inside the header to have the same height
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
    /**
     * Summary: bindUI()
     * add class 'selected' when the item is clicked
     * and check if .item.selected is equal to 4 it will remove the .disabled class on the submit button,
     * set the non-selected items 'pointer-events' to 'none' to prevent further (accidental) clicking
     * or else .enable the button and set the 'pointer-events' to 'auto'
     */
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
    submitQuiz: function() {

        var submitScore = $('#submitScore');

        $(submitScore).one('click', function(event) {
            event.stopPropagation();

            $(this).addClass('disabled'); //disabled the submit button
            $('.item').css('pointer-events', 'none'); //disable the item once its submitted

            // append the result section
            $('<result>', {
                'class': 'quiz-result'
            }).appendTo('body');

            PersonalityQuiz.getQuizResult();
        });
    },
    /**
     * Get JSON data of the Quiz Result
     */
    getQuizResult: function() {

        var personalityJSON = PersonalityQuiz.config.personalityJSON;

        $.getJSON(personalityJSON, { format: "json" })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                $('#info').html(err);
                console.log(err);
            })
            .done(function(data) {

                //process the result
                PersonalityQuiz.processQuizResult(data);

            });
    },
    /**
     * Create a variables to hold each individual array
     * and use if/else to determine the result based on the score
     * once thats done, execute removeDOM() to remove the elements
     */
    processQuizResult: function(data) {

        var score = PersonalityQuiz.calculateScore();

        var jon = data.personality[0];
        var ned = data.personality[1];
        var bolton = data.personality[2];

        if (score >= 20 && score < 30) {
            PersonalityQuiz.displayQuizResult(jon);
        } else if (score >= 30 && score < 40) {
            PersonalityQuiz.displayQuizResult(ned);
        } else {
            PersonalityQuiz.displayQuizResult(bolton);
        }

        PersonalityQuiz.removeDom();

    },
    /**
     * Calculate score by reading the attr 'data-score' of the selected items
     */
    calculateScore: function() {
        var getScore = $('.item.selected');
        var total = 0;
        $.each(getScore, function() {

            var score = $(this).attr('data-score');
            total += parseInt(score);

        });
        return total;
    },
    /**
     * @param receives a parameter that holds each individual json data (e.g jon, ned). this variables are created at getQuizResult()
     * Wrap our Quiz Result json data with HTML and append it onto the page with the appropriate ID
     */
    displayQuizResult: function(persona) {

        var resultContainer = $('.quiz-result');
        var resultID = persona.name.replace(/\s/g, '-').toLowerCase();

        var html = '<section class="clearfix container"><h2 class="title result-title spacepad-15">Your personality is...</h2><section class="col-xs-12 col-sm-4 result-img"><img alt="image - ' + persona.name + '"src="' + siteUrl + persona.img + '"></section><section class="col-xs-12 col-sm-8"><h1 class="title result-name">' + persona.name + '!</h1><p class=result-desc>' + persona.desc + '</section></section>';

        resultContainer.attr('id', resultID).append(html);
    },
    /**
     * Remove quiz header and quiz content once the quiz is submitted.
     * additional elements can be inserted into the array if need be
     */
    removeDom: function() {
        var elem = ['.quiz header', 'quiz-content'];
        $.each(elem, function(i) {
            $(elem[i]).remove();
        });
    }
};

(function($) {


    $(document).ready(function() {
        PersonalityQuiz.startQuiz();
    });


})(jQuery);
