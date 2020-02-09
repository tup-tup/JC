var mySwiper = new Swiper('.swiper-container', {
    slidesPerView : 3,
    loop: true,
    navigation: {
        nextEl: '.news__btn_next',
        prevEl: '.news__btn_prev',
    },
});

// var menuButton = document.querySelector('.burger__btn');
// var menu = document.querySelector('.burger__menu'); 
//     menuButton.addEventListener ('click', function() {
//     ValidityState.
//     menuButton.classList.toggle('burger__btn')
//     menu.classList.toggle('burger__menu_active');
// });

// $('.burger__btn').on('click',function(){
//     $('.burger__menu_active').toggle(300);
// })

// $('#closeMenu').on('click',function(){
//     $('.head__menu').hide(300);
// })

// document.getElementsByClassName(".burger__btn").onclick = function() {
//     open()
// };

// function open() {
//     document.getElementsByClassName(".burger__menu").classList.toggle("active")
// 

$(function(){
    $(".burger__btn").on('click', function() {
        $('.burger__menu').toggle(300, function() {
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        })
    })
})