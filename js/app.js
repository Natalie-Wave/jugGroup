
    $('.offline__questions-item').on('click', function() {
        $('.offline__questions').slideUp(400);
        setTimeout(() => {
            $('.offline__answer').slideDown(500);
        }, 400);
    });

    $('.offline__block-sub').submit(function(e) {
        e.preventDefault();
        $(this).fadeOut(300);
        $('.offline__block-agreement').fadeOut(300);
        setTimeout(() => {
            $('.offline__block-thanks').fadeIn(400);
        }, 300);
    });