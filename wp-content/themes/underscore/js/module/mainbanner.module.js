var mainbanner = (function() {

    var slickify = function(target) {
        $(target).slick(); 
    };

    return {
    	slickify: slickify
    };
    
}());

$(document).ready(function() {

	//instantiate slick carousel to main banner
	// mainbanner.slickify('.main-banner');

});