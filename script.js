// Fungsionalitas toggle hamburger bar responsif (satu-satunya penggunaan JS di halaman ini).
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  if (!navToggle || !primaryNav) return;

  navToggle.addEventListener("click", function () {
    var isOpen = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Tutup menu otomatis saat salah satu link navigasi diklik (mobile).
  var navLinks = primaryNav.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
});
