const menuBtn = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");
const links = navLinks.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = "X";
  } else {
    menuBtn.innerHTML = "☰";
  }
});

// Cerrar menú al hacer click en un link o en el overlay
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.innerHTML = "☰";
  });
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  menuBtn.innerHTML = "☰";
});
