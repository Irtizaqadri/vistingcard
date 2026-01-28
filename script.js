gsap.from(".card", {
  opacity: 0,
  scale: 0.92,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".header h1, .header span", {
  y: -20,
  opacity: 0,
  stagger: 0.2,
  delay: 0.3
});

gsap.from(".image-box", {
  scale: 0.7,
  opacity: 0,
  delay: 0.6,
  duration: 0.8
});

gsap.from(".details > *", {
  x: 30,
  opacity: 0,
  stagger: 0.2,
  delay: 0.8
});