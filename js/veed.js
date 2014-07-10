function resizeBg() {

    var view_height = $(window).height();
    var quote_height = $('.corner-caption').height();
    var carousel_row_height = $('.veed-carousel-row').height();

    var bg_content_height = (quote_height + carousel_row_height);

    $('#bg').css('height', view_height).css('min-height', bg_content_height);

}

function showLogIn() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);

    $('.veed-login-toggle').data('login', 'signup');

    $('#password2').fadeOut('slow');
    $('#name').fadeOut('slow');

    $('.veed-login-toggle').html('Return to Signup');
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
    $('.veed-login-toggle').html('Or Log-in');

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