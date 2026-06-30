/* ═══════════════════════════════════════════════
   pricing.js — Annual/Monthly toggle + FAQ
   ═══════════════════════════════════════════════ */

const PRICES = {
  starter:  { monthly: 1499, annual: 999  },
  growth:   { monthly: 4999, annual: 3332 },
  business: { monthly: 12999, annual: 8666 },
};

let billingCycle = "monthly"; /* default */

function initPricingToggle() {
  const track = document.getElementById("billing-toggle");
  if (!track) return;

  function applyPrices() {
    const cycle = billingCycle;
    Object.keys(PRICES).forEach(plan => {
      const el = document.getElementById(`price-${plan}`);
      if (el) el.textContent = "₹" + PRICES[plan][cycle].toLocaleString("en-IN");
    });
    const note = document.getElementById("billing-note");
    if (note) note.textContent = cycle === "annual"
      ? "Billed annually — save ₹2 months vs monthly"
      : "Billed monthly · Switch to annual and save 2 months";
    const pill = document.getElementById("annual-pill");
    if (pill) pill.style.display = cycle === "annual" ? "inline-block" : "none";
  }

  track.addEventListener("click", () => {
    billingCycle = billingCycle === "monthly" ? "annual" : "monthly";
    track.classList.toggle("annual",  billingCycle === "annual");
    track.classList.toggle("monthly", billingCycle === "monthly");
    applyPrices();
  });

  applyPrices(); /* init */
}

/* ── FAQ accordion ── */
function initFAQ() {
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      /* close all */
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPricingToggle();
  initFAQ();
});
