$(window).load(function() {    

    var theWindow        = $(window),
        $bg              = $(".bg"),
        aspectRatio      = $bg.width() / $bg.height();

    function resizeBg() {

        if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
            $bg
            .removeClass()
            .addClass('bgheight');
        } else {
            $bg
            .removeClass()
            .addClass('bgwidth');
        }

    }

    function showLogIn(){
        $('html, body').animate({scrollTop: 0}, 500);

        $('.veed-login-toggle').data('login', 'signup');

        $('#password2').fadeOut('slow');
        $('#name').fadeOut('slow');

        $('.veed-login-toggle').html('Return to signup');
        $('#veed-signup').html('Login');

    }
    
    function showSignUp(){
        
        $('html, body').animate({scrollTop: 0}, 500);
        
        $('.veed-login-toggle').data('login', 'login');

        $('#password2').fadeIn('slow');
        $('#name').fadeIn('slow');

        $('#veed-signup').html('Sign Up');
        $('.veed-login-toggle').html('Login');
        
    }
    
    theWindow.resize(resizeBg).trigger("resize");
    
    $('#veed-howitworks').click(function(){
    
        $('html, body').animate({scrollTop: $(".veed-body").offset().top
                                }, 500);
      
    });
    
    $('.veed-login-btn').click(function(){
        showLogIn();
    });
    
    $('.veed-signup-btn').click(function(){
        showSignUp();
    });

    $('.veed-login-toggle').click(function(){
        
        var login_status = $(this).data('login');
        
        if( login_status == 'login' ){
            showLogIn();
        } else {
            showSignUp();
        }

    });
    
    
    
});