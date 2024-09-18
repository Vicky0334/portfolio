
gsap.from(".menu-left li, .menu-right li, .dev", {
    duration: 1,
    opacity: 0,
    y: -20,
    stagger: 0.2,
    ease: "power2.inOut"
});

gsap.from(".main-heading", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power2.inOut",
    delay: 0
});

gsap.from("#media-container", {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "power2.inOut",
    delay: 0.5
});

gsap.from(".description,.text", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power2.inOut",
    delay: 1
});

