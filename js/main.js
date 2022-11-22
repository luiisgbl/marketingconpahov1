$(document).ready(function() {
    $(window).on('scroll', function() {
        let posicion = $('#cambio').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    })

//Accionando del menu lateral
$('#burguer').click(function(){
    $('#burguer').toggleClass('abierto');
    $('.menu').toggleClass('abierto');
})


$('a').on('click', function() {
    if (this.hash !== '') {
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800)
    }
    })
})