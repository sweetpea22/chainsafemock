const simpleLogo = document.querySelector('.simplelogo')
const complexLogo = document.querySelector('.complexlogo')
const headerArrow = document.querySelector('.fa-angle-down');
const aboutLogos = document.querySelector('.about--wrapper').children


window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        TweenMax.staggerFrom(aboutLogos, 1, {
            opacity: 0,
            y: 60,
            ease: Expo.easeInOut
        }, 0.3)
    }
}

// TweenMax.from([simpleLogo, complexLogo], 1.2, {
//     opacity: 0,
//     y: -30,
//     delay: 1.1,
//     ease: Expo.easeInOut
// })

TweenMax.to(headerArrow, .4, {
    repeat: 2,
    y: 20
})

