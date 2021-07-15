document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    tl.from(".menu-1", {
        duration: 1,
        y: 20,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out"
    })
    .from(".menu-2", {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power3.out"
    }, "-=0.8")
    .from(".menu-3", {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power3.out"
    }, "-=0.2")
    .from(".menu-4", {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power3.out"
    }, "-=0.8")
    .from(".menu-5", {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power3.out"
    }, "-=0.8")
    .from(".container-item div", {
        duration: 1,
        y: 200,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out"
    }, "-=0.8")
    .from(".container-item img", {
        duration: 1,
        y: 200,
        opacity: 0,
        ease: "power3.out"
    }, "-=0.8");

    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#projects div", {
        duration: 1,
        y: 200,
        opacity: 0,
        ease: "power3.out",
        stagger: {each: 0.2},
        scrollTrigger: {
            trigger: "#projects",

        }
    });

    gsap.from("#contact div", {
        duration: 1,
        y: 200,
        opacity: 0,
        ease: "power3.out",
        stagger: {each: 0.2},
        scrollTrigger: {
            trigger: "#contact",

        }
    });
    
}) 