// Wrap every letter in a span
$('.welcome .content h3').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
$('.welcome .content h1').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({
        loop: false
    })
    .add({
        targets: 'h3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: function (el, i) {
            return 150 * (i + 1)
        }
    }).add({
        targets: 'h1 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: function (el, i) {
            return 150 * (i + 1)
        }
    })