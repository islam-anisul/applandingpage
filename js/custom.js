$(function () {
    //-------- PRELOADER PART START 
    $(window).on('load', function () {
        $('#preloader').delay(2000).fadeOut(2000);
    });
    //------------ banner slide part
    $('.banner_slide_item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        loop: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
        fade: true,
    });
    //------------ banner slide part end

    //veno box part
    $(document).ready(function () {
        $('.venobox').venobox();
    });
    //veno box part end

    //- about counter part
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //- about counter partend 

    //sticky header
    $(window).scroll(function () {
        var anis = $(this).scrollTop();
        if (anis > 200) {
            $('.navbar').addClass('header_bg');
        } else {
            $('.navbar').removeClass('header_bg');
        }
    });
    //------- back to top button
    $(window).scroll(function () {
        var backtop = $(this).scrollTop();
        if (backtop > 500) {
            $('#back_top_button').show();
        } else {
            $('#back_top_button').hide();
        }
    });
    $('#back_top_button').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});