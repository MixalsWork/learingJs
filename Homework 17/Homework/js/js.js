$(document).ready(function (event) {
    function show(a) {

        $('.overlay').animate({
                opacity: "show",
            },
            400);
        $('.modal').slideDown();
    }

    function close(a) {

        $('.overlay').animate({
                opacity: "hide",
            },
            400);
        $('.modal').slideUp();
    }

    $('.main_btna').on('click', function () {
        show(this);
    });
    $('.main_btn').on('click', function () {
        show(this);
    });
    $('a:eq(8)').on('click', function () {
        show(this);
    });
    $('.close').on('click', function () {
        close();
    });
});