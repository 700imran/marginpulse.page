/* ═══════════════════════════════════════════════
   MarginPulse Pro — main.js
   Nav · Cookie · Scroll · Shared utils
   App URL: https://app.marginpulse.in/
   NOTE: APP_URL is declared once, in components.js (which always
   loads first). Redeclaring it here with `const` caused a fatal
   `SyntaxError: Identifier 'APP_URL' has already been declared` —
   which silently broke this entire file (mobile menu, cookie banner,
   active-nav highlighting all failed) on every page, sitewide.
   ═══════════════════════════════════════════════ */

/* ── Launch app (all CTA + login buttons point here) ── */
function launchApp(path = "") {
  window.location.href = APP_URL + path;
}

/* ── Mark current nav link active ── */
function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("data-href") || "";
    link.classList.toggle("active", href === path);
  });
}

/* ── Mobile hamburger ── */
function initMobileMenu() {
  const btn  = document.getElementById("nav-hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  menu.querySelectorAll(".mobile-nav-link, .mobile-cta").forEach(el => {
    el.addEventListener("click", () => {
      menu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* ── Cookie Banner ── */
function initCookies() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;
  if (localStorage.getItem("mp_cookie_consent")) {
    banner.classList.add("hidden");
    return;
  }
  document.getElementById("cookie-accept")?.addEventListener("click", () => {
    localStorage.setItem("mp_cookie_consent", "all");
    banner.classList.add("hidden");
  });
  document.getElementById("cookie-reject")?.addEventListener("click", () => {
    localStorage.setItem("mp_cookie_consent", "essential");
    banner.classList.add("hidden");
  });
}

/* ── Scroll-to-top button ── */
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ── Animate elements on scroll (intersection observer) ── */
function initScrollAnimations() {
  const els = document.querySelectorAll("[data-animate]");
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("animate-in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── Smooth anchor links ── */
function initAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
  });
}

/* ── Mini contact form (contact.html) ──
   Was previously fake: waited 900ms and showed a success message
   without sending anything anywhere ("replace with real POST" was
   left as a TODO). Wired to a real mailto: handoff to the visitor's
   own email client until a proper backend endpoint exists. */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("cf-name").value.trim();
    const email = document.getElementById("cf-email").value.trim();
    const company = document.getElementById("cf-company").value.trim();
    const topic = document.getElementById("cf-topic").value;
    const message = document.getElementById("cf-message").value.trim();
    const subject = `[MarginPulse Contact] ${topic} — ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "(not provided)"}\nTopic: ${topic}\n\nMessage:\n${message}`;
    window.location.href = `mailto:docs@marginpulse.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById("form-success-msg").textContent = "✓ Opening your email client to send this — if nothing opened, email us directly at docs@marginpulse.in.";
    document.getElementById("form-success-msg").classList.remove("hidden");
  });
}

/* ── Boot ── */
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  initMobileMenu();
  initCookies();
  initScrollTop();
  initScrollAnimations();
  initAnchorLinks();
  initContactForm();
});
