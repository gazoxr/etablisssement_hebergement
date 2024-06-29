function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.querySelector('.menu_icon').classList.add('hide');
  document.getElementById("main-content").classList.add('blur');
}

// pour fermer le menu-icon
// mais pour activer le menu-icon
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.querySelector('.menu_icon').classList.remove('hide');
  document.getElementById("main-content").classList.remove('blur');
}