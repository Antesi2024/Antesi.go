let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Memunculkan Menu Bar jika di click
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Menghilangkan Menu Bar jika klik navbar
navbar.onclick = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
