const clickTag = "https://www.linkedin.com/in/ronald-santamaria-pizarro/";

function switchCarColor(color) {
  const swatches = document.querySelectorAll(".swatch-btn");
  const carBlack = document.querySelector(".car-black");
  const carWhite = document.querySelector(".car-white");

  swatches.forEach(s => {
    if (s.getAttribute("data-color") === color) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });

  if (color === "white") {
    if (carBlack) carBlack.classList.remove("active");
    if (carWhite) carWhite.classList.add("active");
  } else {
    if (carWhite) carWhite.classList.remove("active");
    if (carBlack) carBlack.classList.add("active");
  }
}

function initClickTag() {
  const banner = document.getElementById("ad-banner");
  if (!banner) return;
  
  banner.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.closest(".swatch-btn") || e.target.closest(".color-swatches")) {
      return;
    }
    const targetUrl = window.clickTag || clickTag;
    window.open(targetUrl, "_blank");
  });
}

function initColorSwitcher() {
  const swatches = document.querySelectorAll(".swatch-btn");

  swatches.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const color = btn.getAttribute("data-color");
      switchCarColor(color);
    });
  });
}

function initAnimation() {
  const banner = document.getElementById("ad-banner");
  if (!banner) return;

  if (window.bannerTimeline) {
    window.bannerTimeline.kill();
  }

  gsap.set(banner, { visibility: "visible", opacity: 1 });
  gsap.set(".road-parallax-wrap", { x: 20, scale: 1.04 });
  gsap.set(".brand-logo", { opacity: 0, x: -8 });
  gsap.set(".v-divider", { scaleY: 0 });
  gsap.set(".headline-text", { yPercent: 115, y: 0 });
  gsap.set(".subheadline-text", { yPercent: 115, y: 0 });
  gsap.set(".car-stage", { x: -70, opacity: 0, scale: 0.95 });
  gsap.set(".color-swatches", { opacity: 0, scale: 0.9 });
  gsap.set(".cta-wrapper", { opacity: 0, x: 8 });

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" }
  });

  window.bannerTimeline = tl;

  tl
    .to(".road-parallax-wrap", {
      x: 0,
      scale: 1.0,
      duration: 2.5,
      ease: "power2.out"
    }, 0.2)
    .to(".brand-logo", {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out"
    }, 0.4)
    .to(".v-divider", {
      scaleY: 1,
      duration: 0.5,
      ease: "power2.inOut"
    }, 0.7)
    .to(".car-stage", {
      x: 0,
      opacity: 1,
      scale: 1.0,
      duration: 1.3,
      ease: "power3.out"
    }, 0.6)
    .to(".headline-text", {
      yPercent: 0,
      y: 0,
      duration: 0.9,
      ease: "power4.out"
    }, 1.0)
    .to(".subheadline-text", {
      yPercent: 0,
      y: 0,
      duration: 0.7,
      ease: "power3.out"
    }, 1.3)
    .to(".color-swatches", {
      opacity: 1,
      scale: 1.0,
      duration: 0.6,
      ease: "power2.out"
    }, 1.6)
    .to(".cta-wrapper", {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out"
    }, 1.8);

  return tl;
}

window.addEventListener("DOMContentLoaded", () => {
  initClickTag();
  initColorSwitcher();
  initAnimation();
});
