var PageHeader = (function() {

    //create a function 
    var letThereBeDOM = function($target, $dom) {
        $target.append($dom);
    }

    return {
        letThereBeDOM: letThereBeDOM
    }

}());

$(document).ready(function() {

    var selectElement = $('[data-element="segment"]');
    selectElement.matchHeight();
});
