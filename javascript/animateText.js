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
        duration: 500,
        delay: function (el, i) {
            return 50 * (i + 1)
        }
    }).add({
        targets: 'h1 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 500,
        delay: function (el, i) {
            return 50 * (i + 1)
        }
    })



//     anime.timeline({loop: true})
//   .add({
//     targets: '.ml5 .line',
//     opacity: [0.5,1],
//     scaleX: [0, 1],
//     easing: "easeInOutExpo",
//     duration: 700
//   }).add({
//     targets: '.ml5 .line',
//     duration: 600,
//     easing: "easeOutExpo",
//     translateY: function(e, i, l) {
//       var offset = -0.625 + 0.625*2*i;
//       return offset + "em";
//     }
//   }).add({
//     targets: '.ml5 .ampersand',
//     opacity: [0,1],
//     scaleY: [0.5, 1],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=600'
//   }).add({
//     targets: '.ml5 .letters-left',
//     opacity: [0,1],
//     translateX: ["0.5em", 0],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=300'
//   }).add({
//     targets: '.ml5 .letters-right',
//     opacity: [0,1],
//     translateX: ["-0.5em", 0],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=600'
//   }).add({
//     targets: '.ml5',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });