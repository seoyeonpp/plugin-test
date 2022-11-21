
// const boxCtr = gsap.to(".box", {
//     startAt: { x: -100, opacity: 0 },
//     x: 200,
//     opacity: 1,
//     duration: 4,
//     rotation: 180,
//     paused: false,
//     runBackwards: false,
//     yoyo: true,
//     ease: "elastic"
// });

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'power1', duration: 3 });

const tl = gsap.timeline();
tl.from('.section3', { xPercent: -100 })
    .from('.section4', { xPercent: 100 })
    .from('.section5', { yPercent: 100 });

ScrollTrigger.create({
    animation: tl,
    trigger: '#container',
    start: 'top top',
    end: '+=4000',
    pin: true,
    scrub: true,
    anticipatePin: 1
});