window.setTimeout(function () {
    $(".alert").fadeTo(1000, 0);
    $(this).css({
        transform: "translate(500px)",
        transition: "ease all 0.5s",
    });
}, 5000);

{
    $(".alert").css({
        transform: "translate(0px)",
        transition: "ease all 0.5s",
    });
}