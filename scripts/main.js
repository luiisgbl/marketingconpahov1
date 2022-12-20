$(document).ready(function() {
    $(window).on('scroll', function() {
        let posicion = $('#cambio').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    })


    // Establecer una funcion por tamaño de pagina
    window.onresize = (function() {
        let tamano = window.innerWidth;
        if (tamano < 620) {
            $('#redes_sociales').removeClass('redes_sociales');
            $('#redes_sociales').addClass('redes_socialesB')
        } else {
            $('#redes_sociales').removeClass('redes_socialesB');
            $('#redes_sociales').addClass('redes_sociales')
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