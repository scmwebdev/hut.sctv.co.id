/**
 * Main JS
 */

var PersonalityQuiz = {

    startQuiz: function(settings) {
        PersonalityQuiz.config = {
            jsonURL: siteUrl + '/wp-content/themes/underscore/json/personality.json',
            itemSelected : '.quiz-container > .item.selected'
        }
        $.extend(PersonalityQuiz.config, settings);

        // grab the json file
        PersonalityQuiz.getData();

        // execute bindUI() once the ajax is complete
        $(document).ajaxComplete(function() {
            PersonalityQuiz.bindUI();
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

        $('<div>', {
            'id': 'info'
        }).appendTo(container);

        $('<div>', {
            'id': 'score'
        }).appendTo(container);

    },
    bindUI: function() {

        var itemSelected = $(PersonalityQuiz.config.itemSelected);
        var item = $('.quiz-container > .item');

        var itemSelected = $(PersonalityQuiz.config.itemSelected);
        var total = itemSelected.length;

        console.log(total);
        
        item.on('click', function() {

            var score = 0;
            
            var selected = PersonalityQuiz.countSelected();
            

            if(selected == 2) {
                $(item).not('.selected').css('pointer-events', 'none');
                // console.log(selected);
            } //else {
            //     $(item).css('pointer-events', 'auto');
            // }

            var displayScore = $('#score').val(score);
            // console.log(final);

            $(this).toggleClass('selected');
            var getScore = $(this).attr('data-score');

        });


        // PersonalityQuiz.getScore();
    },
    countSelected: function() {

        var itemSelected = $(PersonalityQuiz.config.itemSelected);
        var total = itemSelected.length;

        return total;
    }
    // getScore: function() {

    //     var scoreBtn = $('#btn-score');
    //     var itemSelected = $('.quiz-container > .item.selected');
    //     var itemSelectedAttr = itemSelected.attr('data-score');
    //     var item = $('.quiz-container > .item');
    //     var itemAttr = item.attr('data-score');


    //     scoreBtn.on('click', function(evt) {
    //         evt.stopPropagation();
    //         console.log($(itemSelected).length);

    //     });

    // console.log(itemSelected.attr('data-score'));
    // }

};

(function($) {

    console.log('forbidden lover');
    PersonalityQuiz.startQuiz();

    // var scoreBtn = $('#btn-score');
    // var itemSelected = $('.quiz-container > .item.selected');
    // var itemSelectedAttr = itemSelected.attr('data-score');
    // var item = $('.quiz-container > .item');
    // var itemAttr = item.attr('data-score');


})(jQuery);
