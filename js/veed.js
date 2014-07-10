function resizeBg() {

    var view_height = $(window).height();
//    var quote_height = $('.corner-caption').height();
//    var carousel_height = $('.veed-carousel-content').height();
//    var top_offset = $('.veed-carousel-content').offset().top;
//    var howitworks_height = $('.veed-howitworks-wrap').height();
//
//    var others_height = (quote_height + top_offset + howitworks_height);
//    var carousel_cap_height = (view_height - others_height);
//
//    $('.carousel-caption').height(carousel_cap_height + 'px');
    
    $('#bg').css('height', view_height);

}

function showLogIn() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);

    $('.veed-login-toggle').data('login', 'signup');

    $('#password2').fadeOut('slow');
    $('#name').fadeOut('slow');

    $('.veed-login-toggle').html('Return to signup');
    $('#veed-signup').html('Login');

}

function showSignUp() {

    $('html, body').animate({
        scrollTop: 0
    }, 500);

    $('.veed-login-toggle').data('login', 'login');

    $('#password2').fadeIn('slow');
    $('#name').fadeIn('slow');

    $('#veed-signup').html('Sign Up');
    $('.veed-login-toggle').html('Login');

}

$(window).load(function() {

    resizeBg();

    $(window).resize(resizeBg).trigger("resize");

    $('#veed-howitworks').click(function() {

        $('html, body').animate({
            scrollTop: $(".veed-body").offset().top
        }, 500);

    });

    $('.veed-login-btn').click(function() {
        showLogIn();
    });

    $('.veed-signup-btn').click(function() {
        showSignUp();
    });

    $('.veed-login-toggle').click(function() {

        var login_status = $(this).data('login');

        if (login_status == 'login') {
            showLogIn();
        } else {
            showSignUp();
        }

    });



});