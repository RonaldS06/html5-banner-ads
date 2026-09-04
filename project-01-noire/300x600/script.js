const clickTag = "https://www.behance.net/ronaldspizarro";

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
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" 
  });
  gsap.set(".hero-image", { scale: 1.15 });
  gsap.set(".logo-wrapper", { opacity: 0, y: -8 });
  gsap.set(".season-badge", { opacity: 0, scale: 0.9 });
  gsap.set(".header-divider", { scaleX: 0 });
  gsap.set(".header-eyebrow", { opacity: 0, y: -4 });
  gsap.set(".visual-tag", { opacity: 0 });
  gsap.set(".h-line", { yPercent: 115, y: 0 });
  gsap.set(".hairline-divider", { scaleX: 0 });
  gsap.set(".subheadline", { opacity: 0, y: 5 });
  gsap.set(".cta-wrapper", { opacity: 0, y: 14 });
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
      duration: 1.5,
      ease: "power4.inOut"
    }, 0.2)

    
    .to(".hero-image", {
      scale: 1.0,
      duration: 3.8,
      ease: "power2.out"
    }, 0.2)

    
    .to(".logo-wrapper", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out"
    }, 0.7)
    .to(".season-badge", {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.5)"
    }, 0.9)
    .to(".header-divider", {
      scaleX: 1,
      duration: 0.8,
      ease: "power3.inOut"
    }, 1.1)
    .to(".header-eyebrow", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out"
    }, 1.3)
    .to(".visual-tag", {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, 1.6)

    
    .to(".h-line", {
      yPercent: 0,
      y: 0,
      duration: 1.2,
      stagger: 0.18,
      ease: "power4.out"
    }, 2.0)

    
    .to(".hairline-divider", {
      scaleX: 1,
      duration: 0.7,
      ease: "power3.inOut"
    }, 2.8)
    .to(".subheadline", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 3.0)

    
    .to(".cta-wrapper", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out"
    }, 3.7)

    
    .to(".cta-sheen", {
      xPercent: 160,
      duration: 1.1,
      ease: "power2.inOut"
    }, 4.5);

  return tl;
}

window.addEventListener("DOMContentLoaded", () => {
  initClickTag();
  initAnimation();
});
