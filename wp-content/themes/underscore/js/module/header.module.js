var PageHeader = (function() {

    //create a function 
    var letThereBeDOM = function($target, $dom) {
        $target.append($dom);
    }

    return {
        letThereBeDOM: letThereBeDOM
    }



}());

var MobileMenu = (function() {

	//initialize the function
	var init = function() {
		addTheDOM();
		bindTheUI();
	}

	/** 
	 * add the dom elements (bars) onto the mobile menu container
	 */
    var addTheDOM = function() {

    	var mobileMenuContainer = $('.mobile #masthead .trigger-menu');

        //create for loops that generate menu-bars-1, menu-bars-2, and so on
        for (var i = 1; i <= 3; i++) {
            mobileMenuContainer.append('<div class="menu-bar menu-bars-' + i + '"></div>')
        }
    }

    var bindTheUI = function() {

    	var trigger = $('.mobile #masthead .trigger-menu');

    	// when the menu bar is clicked active the mobile menu
    	trigger.on('click', function(){
    		$('body').toggleClass('menu-active');
    	});



    }

    return {
    	init: init
    }


}());

$(document).ready(function() {

    var selectElement = $('[data-element="segment"]');
    selectElement.matchHeight();
    MobileMenu.init();
});
