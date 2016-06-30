/**
 * Main JS
 */

(function($) {

    console.log('forbidden lover');

    // $.ajax({

    //     url: 'http://localhost:8888/hut.sctv.co.id/wp-content/themes/underscore/js/json/personality.json',
    //     data: {
    //         format: 'json'
    //     },
    //     dataType: 'json',
    //     type: 'GET',
    //     success: function(data) {
    //     	var data = $.parseJSON(data);
    //     	console.log('yes');
    //     },
    //     error: function() {
    //         $('#info').html('<p>OH NOES!</p>');
    //     },

    // })

    var jsonURL = 'http://localhost:3000/hut.sctv.co.id/wp-content/themes/underscore/js/json/personality.json';

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
                arr.push('<div class="item"><img src="' + data[i].img + '"></div>');
            }

            $("<div>", {
                "class": "my-new-list",
                html: arr.join("")
            }).appendTo(".quiz-container");
        })






})(jQuery);


// var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//   $.getJSON( flickerAPI, {
//     tags: "mount rainier",
//     tagmode: "any",
//     format: "json"
//   })
//     .done(function( data ) {
//       $.each( data.items, function( i, item ) {
//         $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//         if ( i === 3 ) {
//           return false;
//         }
//       });
//     });

// $.ajax({
//    url: 'http://api.joind.in/v2.1/talks/10889',
//    data: {
//       format: 'json'
//    },
//    error: function() {
//       $('#info').html('<p>An error has occurred</p>');
//    },
//    dataType: 'jsonp',
//    success: function(data) {
//       var $title = $('<h1>').text(data.talks[0].talk_title);
//       var $description = $('<p>').text(data.talks[0].talk_description);
//       $('#info')
//          .append($title)
//          .append($description);
//    },
//    type: 'GET'
// });
