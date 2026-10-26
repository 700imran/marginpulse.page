/* ═══════════════════════════════════════════════
   components.js — Nav + Footer HTML injected
   into every page. Single source of truth.
   ═══════════════════════════════════════════════ */

const APP_URL = "https://app.marginpulse.in/";

/* ── Compute relative base path from this script's own depth ──
   Works on any host: root domain, subpath (GitHub Pages project site),
   or custom domain. No leading "/" used anywhere below. ── */
const SITE_BASE = (() => {
  const scripts = document.getElementsByTagName("script");
  for (const s of scripts) {
    if (s.src && s.src.includes("/js/components.js")) {
      const scriptPath = new URL(s.src).pathname;
      const scriptDir = scriptPath.substring(0, scriptPath.indexOf("/js/components.js"));
      let pagePath = window.location.pathname;
      if (pagePath.startsWith(scriptDir)) pagePath = pagePath.substring(scriptDir.length);
      const levels = pagePath.split("/").filter(Boolean).length - 1; // folders between site root and this page
      return levels > 0 ? "../".repeat(levels) : "./";
    }
  }
  return "./";
})();

const B = SITE_BASE; /* shorthand */

/* Official brand icon (bars + upward arrow), teal gradient —
   matches the app's sidebar mark exactly. */
const MP_ICON_SVG = `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mpIconGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#aee9da"/>
      <stop offset="100%" stop-color="#18c496"/>
    </linearGradient>
  </defs>
  <rect x="8" y="56" width="17" height="30" rx="3" fill="url(#mpIconGrad)"/>
  <rect x="32" y="40" width="17" height="46" rx="3" fill="url(#mpIconGrad)"/>
  <rect x="56" y="24" width="17" height="62" rx="3" fill="url(#mpIconGrad)"/>
  <path d="M5 64 L27 36 L42 52 L66 14" fill="none" stroke="url(#mpIconGrad)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M66 14 L86 6 L79 26" fill="none" stroke="url(#mpIconGrad)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="${B}index" class="nav-logo" aria-label="MarginPulse Pro home">
      <div class="nav-logo-mark" aria-hidden="true">${MP_ICON_SVG}</div>
      <div>
        <div class="nav-logo-name">MarginPulse <span>Pro</span></div>
        <span class="nav-logo-tagline">Financial Risk Intelligence</span>
      </div>
    </a>

    <div class="nav-links" role="menubar">
      <a href="${B}index"          class="nav-link" data-href="index"      role="menuitem">Home</a>
      <a href="${B}pages/pricing"  class="nav-link" data-href="pricing"   role="menuitem">Pricing</a>
      <a href="${B}pages/about"    class="nav-link" data-href="about"     role="menuitem">About</a>
      <a href="${B}pages/security" class="nav-link" data-href="security"  role="menuitem">Security</a>
      <a href="${B}blog"           class="nav-link" data-href="blog"      role="menuitem">Blog</a>
      <a href="${B}pages/contact"  class="nav-link" data-href="contact"   role="menuitem">Contact</a>
    </div>

    <div class="nav-actions">
      <a href="#" class="nav-signin-link" onclick="window.location.href='${APP_URL}'" aria-label="Sign in to dashboard">Sign In</a>
      <button class="nav-cta"    onclick="window.location.href='${APP_URL}'" aria-label="Request early access">Request Early Access →</button>
    </div>

    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Mobile navigation">
  <a href="${B}index"          class="mobile-nav-link">Home</a>
  <a href="${B}pages/pricing"  class="mobile-nav-link">Pricing</a>
  <a href="${B}pages/about"    class="mobile-nav-link">About</a>
  <a href="${B}pages/security" class="mobile-nav-link">Security</a>
  <a href="${B}blog"           class="mobile-nav-link">Blog & Resources</a>
  <a href="${B}pages/contact"  class="mobile-nav-link">Contact</a>
  <div class="mobile-divider"></div>
  <button class="mobile-cta" onclick="window.location.href='${APP_URL}'">Request Early Access →</button>
  <a href="#" class="mobile-signin-link" onclick="window.location.href='${APP_URL}'">Sign In to Dashboard</a>
</div>`;

const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-name">
          <div class="nav-logo-mark" aria-hidden="true">${MP_ICON_SVG}</div>
          <span>MarginPulse <em>Pro</em></span>
        </div>
        <p>Financial risk intelligence for Indian finance teams. We turn bank, invoice and GST data into prioritized, rupee-quantified decisions — live. No spreadsheets. No surprises at month-end.</p>
        <div class="footer-social" aria-label="Social media links">
          <a href="#" aria-label="Twitter/X">𝕏</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">▷</a>
        </div>
      </div>
      <div class="footer-col">
        <h3>Product</h3>
        <a href="${B}index">How It Works</a>
        <a href="${B}pages/pricing">Pricing</a>
        <a href="${B}pages/security">Security</a>
        <a href="${B}blog">Resources</a>
      </div>
      <div class="footer-col">
        <h3>Company</h3>
        <a href="${B}pages/about">About Us</a>
        <a href="${B}pages/contact">Contact</a>
        <a href="${B}blog">Blog</a>
      </div>
      <div class="footer-col">
        <h3>Legal</h3>
        <a href="${B}pages/privacy">Privacy Policy</a>
        <a href="${B}pages/terms">Terms of Service</a>
        <a href="${B}pages/cookies">Cookie Policy</a>
        <a href="${B}pages/refund">Refund Policy</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 MarginPulse Technologies Pvt Ltd · Made in India 🇮🇳</p>
      <div class="footer-badges">
        <span class="footer-badge">RBI AA Framework</span>
        <span class="footer-badge">GSP/GSTN Integrated</span>
        <span class="footer-badge">AES-256 Encrypted</span>
      </div>
    </div>
  </div>
</footer>

<div id="cookie-banner" role="region" aria-label="Cookie consent">
  <div class="cookie-text">
    We use essential cookies for authentication and, with your consent, analytics cookies to improve our site.
    See our <a href="${B}pages/cookies">Cookie Policy</a> and <a href="${B}pages/privacy">Privacy Policy</a>.
  </div>
  <div class="cookie-actions">
    <button class="cookie-reject" id="cookie-reject">Essential Only</button>
    <button class="cookie-accept" id="cookie-accept">Accept All</button>
  </div>
</div>

<button id="scroll-top" aria-label="Back to top"><svg class="icon" aria-hidden="true"><use href="#icon-arrow-up"></use></svg></button>`;

/* ── Inject into page ── */
document.addEventListener("DOMContentLoaded", () => {
  const navTarget = document.getElementById("nav-root");
  if (navTarget) navTarget.innerHTML = NAV_HTML;

  const footerTarget = document.getElementById("footer-root");
  if (footerTarget) footerTarget.innerHTML = FOOTER_HTML;
});
