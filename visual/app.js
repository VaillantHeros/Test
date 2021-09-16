const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

TL

    .staggerFrom(titreSpans, 1, {top:-50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1.5, {width: 0, ease:"power2.out"}, '-=2')
    .from(l2, 1.9, {width: 0, ease:"power2.out"}, '-=2')
    .from(logo, 2.5, {transform: "scale(0)", ease:"power2.out"}, '-=2')
    .staggerFrom(medias, 0.5, {left: 300, ease: "power2.out"}, 0.3, '-=1')

TL.play();

})

function m1(){alert("first")}
function m2(){alert("second")}
function m3(){alert("third")}

function mm(){
    m1() 
    m2() 
    m3()
}