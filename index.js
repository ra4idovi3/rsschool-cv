const HamburgerMenu = document.querySelector('.hamburger-menu');
const NavList = document.querySelector('.nav-list');


HamburgerMenu.addEventListener('click', toggleMenu)

NavList.addEventListener('click', toggleMenu)

function toggleMenu() {
    HamburgerMenu.classList.toggle('active');
    NavList.classList.toggle('active');
}