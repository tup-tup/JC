var mySwiper = new Swiper('.swiper-container', {
    slidesPerView : 3,
    loop: true,
    navigation: {
        nextEl: '.news__btn_next',
        prevEl: '.news__btn_prev',
    },
});


$(function(){
    $(".burger__btn").on('click', function() {
        $('.burger__menu').toggle(300, function() {
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        })
    })
})
