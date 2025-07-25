// Simple contact form handler (no backend)
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your message! We will get in touch soon.");
      form.reset();
    });
  }
});