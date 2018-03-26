$(document).ready(function(){
    $('#nav-icon1 #menu').click(function(){
        $('#nav-icon1').toggleClass('open');
        $('body').toggleClass('open-menu');
    });
});