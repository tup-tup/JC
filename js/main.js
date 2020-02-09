$(function(){
    $(".burger__btn").on('click', function() {
        $('.burger__menu').toggle(300, function() {
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        })
    })
})

$(window).on('scroll resize',function(){
    var pixelTop = $(window).scrollTop();

    if(pixelTop > 0 && $(document).width() > 998) {
        $('.header').addClass('active');
    }else if(pixelTop < 1){
        $('.header').removeClass('active');
    }
});
