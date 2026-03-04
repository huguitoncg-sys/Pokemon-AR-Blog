// Small JS for mobile nav + footer year.
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const btn = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close menu after clicking a link on mobile
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (links.classList.contains("open")) {
        links.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
