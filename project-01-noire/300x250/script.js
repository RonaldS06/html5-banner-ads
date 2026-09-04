const clickTag = "https://github.com/RonaldS06";

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
  gsap.set(".hero-image", { scale: 1.14 });
  gsap.set(".logo-wrapper", { opacity: 0, y: -6 });
  gsap.set(".season-badge", { opacity: 0, scale: 0.9 });
  gsap.set(".h-line", { yPercent: 115, y: 0 });
  gsap.set(".hairline-divider", { scaleX: 0 });
  gsap.set(".subheadline", { opacity: 0, y: 5 });
  gsap.set(".cta-wrapper", { opacity: 0, y: 12 });
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
      duration: 1.4,
      ease: "power4.inOut"
    }, 0.2)

    
    .to(".hero-image", {
      scale: 1.0,
      duration: 3.5,
      ease: "power2.out"
    }, 0.2)

    
    .to(".logo-wrapper", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out"
    }, 0.8)
    .to(".season-badge", {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.5)"
    }, 1.1)

    
    .to(".h-line", {
      yPercent: 0,
      y: 0,
      duration: 1.1,
      stagger: 0.16,
      ease: "power4.out"
    }, 1.8)

    
    .to(".hairline-divider", {
      scaleX: 1,
      duration: 0.7,
      ease: "power3.inOut"
    }, 2.6)
    .to(".subheadline", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 2.8)

    
    .to(".cta-wrapper", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out"
    }, 3.5)

    
    .to(".cta-sheen", {
      xPercent: 160,
      duration: 1.0,
      ease: "power2.inOut"
    }, 4.3);

  return tl;
}

window.addEventListener("DOMContentLoaded", () => {
  initClickTag();
  initAnimation();
});
