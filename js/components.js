/* ═══════════════════════════════════════════════
   components.js — Nav + Footer HTML injected
   into every page. Single source of truth.
   ═══════════════════════════════════════════════ */

const APP_URL = "https://marginpulse-02-frontend-web.vercel.app/";

const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="/index.html" class="nav-logo" aria-label="MarginPulse Pro home">
      <div class="nav-logo-mark" aria-hidden="true">M</div>
      <div>
        <div class="nav-logo-name">MarginPulse <span>Pro</span></div>
        <span class="nav-logo-tagline">GST Reconciliation Engine</span>
      </div>
    </a>

    <div class="nav-links" role="menubar">
      <a href="/index.html"       class="nav-link" data-href="index.html"   role="menuitem">Home</a>
      <a href="/pages/pricing.html"  class="nav-link" data-href="pricing.html"  role="menuitem">Pricing</a>
      <a href="/pages/about.html"    class="nav-link" data-href="about.html"    role="menuitem">About</a>
      <a href="/pages/security.html" class="nav-link" data-href="security.html" role="menuitem">Security</a>
      <a href="/blog/index.html"     class="nav-link" data-href="index.html"    role="menuitem">Blog</a>
      <a href="/pages/contact.html"  class="nav-link" data-href="contact.html"  role="menuitem">Contact</a>
    </div>

    <div class="nav-actions">
      <button class="nav-signin" onclick="window.location.href='${APP_URL}'" aria-label="Sign in to dashboard">Sign In</button>
      <button class="nav-cta"    onclick="window.location.href='${APP_URL}'" aria-label="Start free trial">Start Free →</button>
    </div>

    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Mobile navigation">
  <a href="/index.html"          class="mobile-nav-link">Home</a>
  <a href="/pages/pricing.html"  class="mobile-nav-link">Pricing</a>
  <a href="/pages/about.html"    class="mobile-nav-link">About</a>
  <a href="/pages/security.html" class="mobile-nav-link">Security</a>
  <a href="/blog/index.html"     class="mobile-nav-link">Blog & Resources</a>
  <a href="/pages/contact.html"  class="mobile-nav-link">Contact</a>
  <div class="mobile-divider"></div>
  <button class="mobile-cta" onclick="window.location.href='${APP_URL}'">Sign In to Dashboard →</button>
</div>`;

const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-name">
          <div class="nav-logo-mark" aria-hidden="true">M</div>
          <span>MarginPulse <em>Pro</em></span>
        </div>
        <p>Real-time Bank ↔ Invoice ↔ GST reconciliation for Indian mid-size businesses. Live API connections. No spreadsheets. Money recovered while there's still time.</p>
        <div class="footer-social" aria-label="Social media links">
          <a href="#" aria-label="Twitter/X">𝕏</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">▷</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <a href="/index.html">How It Works</a>
        <a href="/pages/pricing.html">Pricing</a>
        <a href="/pages/security.html">Security</a>
        <a href="/blog/index.html">Resources</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="/pages/about.html">About Us</a>
        <a href="/pages/contact.html">Contact</a>
        <a href="/blog/index.html">Blog</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="/pages/privacy.html">Privacy Policy</a>
        <a href="/pages/terms.html">Terms of Service</a>
        <a href="/pages/cookies.html">Cookie Policy</a>
        <a href="/pages/refund.html">Refund Policy</a>
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
    See our <a href="/pages/cookies.html">Cookie Policy</a> and <a href="/pages/privacy.html">Privacy Policy</a>.
  </div>
  <div class="cookie-actions">
    <button class="cookie-reject" id="cookie-reject">Essential Only</button>
    <button class="cookie-accept" id="cookie-accept">Accept All</button>
  </div>
</div>

<button id="scroll-top" aria-label="Back to top">↑</button>`;

/* ── Inject into page ── */
document.addEventListener("DOMContentLoaded", () => {
  const navTarget = document.getElementById("nav-root");
  if (navTarget) navTarget.innerHTML = NAV_HTML;

  const footerTarget = document.getElementById("footer-root");
  if (footerTarget) footerTarget.innerHTML = FOOTER_HTML;
});
