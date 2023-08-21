var tl = gsap.timeline()

var clutterHome = '';
document.querySelector('.para-in-main>h1').textContent.split('').forEach(function(dets) {
    clutterHome += `<span>${dets}</span>`
    document.querySelector('.para-in-main>h1').innerHTML = clutterHome;

})


tl.to('.para-in-main>h1>span,.para-in-main>h1', {
    opacity: 1,
    delay: 1,
    duration: 0.1,
    stagger: .1,
    color: 'goldenrod',
})


var clutterHoemh3 = '';
document.querySelector('.para-in-main>h3').textContent.split('').forEach(function(dets) {
    clutterHoemh3 += `<span>${dets}</span>`
    document.querySelector('.para-in-main>h3').innerHTML = clutterHoemh3;

})


tl.to('.para-in-main>h3>span,.para-in-main>h3', {
    opacity: 1,

    duration: 0.1,
    stagger: .1,
    color: 'white',
})
tl.from('.for-scroll-animation', {
    scale: 0,
    duration: .4
})
tl.to('.for-scroll-animation', {
    y: 10,
    duration: 0.5,

    delay: .3,

    repeat: -1,
    yoyo: true
})

function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco()

var clutter = '';
document.querySelector('.main-two>.for-main-two-para').textContent.split('').forEach(function(dets) {
    clutter += `<span>${dets}</span>`
    document.querySelector('.main-two>.for-main-two-para').innerHTML = clutter;

})

tl.to('.main-two>.for-main-two-para>span', {
    scrollTrigger: {
        trigger: `.main-two>.for-main-two-para>span`,
        start: 'top bottom',
        end: 'bottom top',
        scroller: `.main`,

        scrub: .5,

    },
    stagger: .2,
    color: 'goldenrod',

})













