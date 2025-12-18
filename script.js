document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  const yearEl = document.getElementById("year");
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieAccept = document.getElementById("cookieAccept");
  const cookieReject = document.getElementById("cookieReject");
  const COOKIE_KEY = "avm-cookie-consent";

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const showFeedback = (message, isSuccess = true) => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.style.color = isSuccess ? "var(--accent)" : "#b00020";
  };

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.name.value.trim();
      const contactInfo = form.contactInfo.value.trim();
      const message = form.message.value.trim();

      if (!name || !contactInfo || !message) {
        showFeedback("Bitte füllen Sie alle Felder aus.", false);
        return;
      }

      form.reset();
      showFeedback("Vielen Dank! Wir melden uns zeitnah bei Ihnen.");
    });
  }

  const setCookieConsent = (value) => {
    localStorage.setItem(COOKIE_KEY, value);
    cookieBanner.style.display = "none";
  };

  if (cookieBanner) {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      cookieBanner.style.display = "block";
    }

    cookieAccept?.addEventListener("click", () => setCookieConsent("accepted"));
    cookieReject?.addEventListener("click", () => setCookieConsent("rejected"));
  }
});
