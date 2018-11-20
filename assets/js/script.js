$(window).on('DOMContentLoaded', function() {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).on('load', function() {
    $('.preloader-wrapper').delay(1600).fadeOut(500);
    $('body').removeClass('preloader-site');
});