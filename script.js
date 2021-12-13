$(function(){
    $('.button').click(function(){
        var listaMobile = $('.mobile-menu')
        var x = listaMobile.css('display')
        if(x == 'none'){
            listaMobile.fadeIn();
        }else{
            listaMobile.fadeOut()
        }
    })


})