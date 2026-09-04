document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "NOIRÉ",
      tagline: "— THE NEW STANDARD",
      stack: "HTML5 · CSS3 · JavaScript · GSAP",
      shortName: "NOIRÉ",
      banners: {
        b728: "project-01-noire/728x90/index.html",
        b600: "project-01-noire/300x600/index.html",
        b250: "project-01-noire/300x250/index.html"
      }
    },
    {
      title: "AUDI",
      tagline: "— A5 SPORTBACK",
      stack: "HTML5 · CSS3 · JavaScript · GSAP · Photoshop",
      shortName: "AUDI A5",
      banners: {
        b728: "project-02-audi/728x90/index.html",
        b600: "project-02-audi/300x600/index.html",
        b250: "project-02-audi/300x250/index.html"
      }
    }
  ];

  let currentProject = 0;

  const btnPrev = document.getElementById("btn-prev-project");
  const btnNext = document.getElementById("btn-next-project");
  const indicators = document.querySelectorAll(".c-indicator");
  const projTitle = document.getElementById("proj-title");
  const projTagline = document.getElementById("proj-tagline");
  const projStack = document.getElementById("proj-stack");
  const brandText = document.querySelector(".brand-text");

  const frame728 = document.getElementById("frame-728");
  const frame600 = document.getElementById("frame-600");
  const frame250 = document.getElementById("frame-250");

  const link728 = document.getElementById("link-728");
  const link600 = document.getElementById("link-600");
  const link250 = document.getElementById("link-250");

  const btnReplayAll = document.getElementById("btn-replay-all");
  const singleReplayBtns = document.querySelectorAll(".replay-single");
  const modeBtns = document.querySelectorAll(".mode-btn");
  const body = document.body;

  function updateProject(index) {
    if (index < 0 || index >= projects.length) return;
    currentProject = index;
    const p = projects[index];

    indicators.forEach((indicator, idx) => {
      if (idx === index) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });

    if (brandText) {
      brandText.style.opacity = "0";
      brandText.style.transform = "translateY(-4px)";
    }

    setTimeout(() => {
      if (projTitle) projTitle.textContent = p.title;
      if (projTagline) projTagline.textContent = p.tagline;
      if (projStack) projStack.textContent = p.stack;

      if (brandText) {
        brandText.style.opacity = "1";
        brandText.style.transform = "translateY(0)";
      }
    }, 150);

    if (frame728) {
      frame728.src = p.banners.b728;
    }
    if (frame600) {
      frame600.src = p.banners.b600;
    }
    if (frame250) {
      frame250.src = p.banners.b250;
    }

    if (link728) link728.href = p.banners.b728;
    if (link600) link600.href = p.banners.b600;
    if (link250) link250.href = p.banners.b250;
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      const nextIndex = (currentProject - 1 + projects.length) % projects.length;
      updateProject(nextIndex);
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      const nextIndex = (currentProject + 1) % projects.length;
      updateProject(nextIndex);
    });
  }

  indicators.forEach(indicator => {
    indicator.addEventListener("click", () => {
      const idx = parseInt(indicator.getAttribute("data-index"), 10);
      if (!isNaN(idx) && idx !== currentProject) {
        updateProject(idx);
      }
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "ArrowLeft") {
      const nextIndex = (currentProject - 1 + projects.length) % projects.length;
      updateProject(nextIndex);
    } else if (e.key === "ArrowRight") {
      const nextIndex = (currentProject + 1) % projects.length;
      updateProject(nextIndex);
    }
  });

  function replayIframe(iframeId) {
    const iframe = document.getElementById(iframeId);
    if (!iframe) return;

    try {
      if (iframe.contentWindow && iframe.contentWindow.bannerTimeline) {
        iframe.contentWindow.bannerTimeline.restart();
        return;
      }
    } catch (e) {
    }
    iframe.src = iframe.src;
  }

  if (btnReplayAll) {
    btnReplayAll.addEventListener("click", () => {
      btnReplayAll.style.transform = "scale(0.96)";
      setTimeout(() => {
        btnReplayAll.style.transform = "";
      }, 150);

      ["frame-728", "frame-600", "frame-250"].forEach(id => {
        replayIframe(id);
      });
    });
  }

  singleReplayBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      if (targetId) {
        replayIframe(targetId);
      }
    });
  });

  modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const theme = btn.getAttribute("data-theme");
      body.className = theme;
    });
  });

  updateProject(0);
});
