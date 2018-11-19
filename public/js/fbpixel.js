$(function () {
    $('a[href$="contacto"]').click(function () {
        fbq('track', 'Contact');
    });
    $('.wtsp-link').click(function(){
        fbq('track', 'AddToCart');
    });
    $('.network-link').click(function(){
        fbq('track', 'Lead');
    });
});