const clickTag = "https://www.linkedin.com/in/ronald-santamaria-pizarro/";

function initClickTag() {
  const banner = document.getElementById("ad-banner");
  if (!banner) return;
  
  banner.addEventListener("click", (e) => {
    e.preventDefault();
    const targetUrl = window.clickTag || clickTag;
    window.open(targetUrl, "_blank");
  });
}

function initAnimation() {
  const banner = document.getElementById("ad-banner");
  if (!banner) return;

  
  if (window.bannerTimeline) {
    window.bannerTimeline.kill();
  }

  
  gsap.set(banner, { visibility: "visible", opacity: 1 });
  gsap.set(".visual-wrapper", { 
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" 
  });
  gsap.set(".hero-image", { scale: 1.15 });
  gsap.set(".logo-wrapper", { opacity: 0, x: -10 });
  gsap.set(".v-separator", { scaleY: 0 });
  gsap.set(".season-tag", { opacity: 0, x: -6 });
  gsap.set(".headline-text", { yPercent: 115, y: 0 });
  gsap.set(".sub-wrapper", { opacity: 0, y: 5 });
  gsap.set(".cta-block", { opacity: 0, y: 8 });
  gsap.set(".cta-sheen", { xPercent: -160 });

  
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => {
      
    }
  });

  window.bannerTimeline = tl;

  tl
    
    .to(".visual-wrapper", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.3,
      ease: "power4.inOut"
    }, 0.2)

    
    .to(".hero-image", {
      scale: 1.0,
      duration: 3.5,
      ease: "power2.out"
    }, 0.2)

    
    .to(".logo-wrapper", {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: "power3.out"
    }, 0.7)
    .to(".v-separator", {
      scaleY: 1,
      duration: 0.6,
      ease: "power2.inOut"
    }, 1.0)
    .to(".season-tag", {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "power2.out"
    }, 1.2)

    
    .to(".headline-text", {
      yPercent: 0,
      y: 0,
      duration: 1.1,
      ease: "power4.out"
    }, 1.6)

    
    .to(".sub-wrapper", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 2.3)

    
    .to(".cta-block", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out"
    }, 3.0)

    
    .to(".cta-sheen", {
      xPercent: 160,
      duration: 1.0,
      ease: "power2.inOut"
    }, 3.8);

  return tl;
}

window.addEventListener("DOMContentLoaded", () => {
  initClickTag();
  initAnimation();
});
