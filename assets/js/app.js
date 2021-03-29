const $iconBox = document.getElementById('icon-box'),
  $navList = document.getElementById('nav-list'),
  $overlay = document.getElementById('overlay');

function showMenu() {
  $iconBox.classList.toggle('active');
  $overlay.classList.toggle('active');
  $navList.classList.toggle('active');
}

$iconBox.addEventListener('click', showMenu);
