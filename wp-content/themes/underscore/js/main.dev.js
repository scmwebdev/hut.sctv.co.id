$(document).ready(function() {

    console.log('Hontou no Oto'); //indicator if everything goes smoothly

    /** add new element of arrow (DOM) on the menu when hovered */
    var parentMenu = $('.desktop #primary-menu > li > a');
    var icon = '<div class="menu-highlighter"><i class="fa fa-chevron-down"></i></div>';

    PageHeader.letThereBeDOM(parentMenu, icon);
    // **

    $('.site-footer li').matchHeight();

});
