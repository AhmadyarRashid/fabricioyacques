// Require Line Awesome
const profileToggler = document.querySelector('.js-dropdown');
const profileDropdown = document.querySelector('.js-profile-dropdown');

profileToggler.addEventListener('click', () => {
  profileDropdown.classList.toggle('show');
});

const sidebarToggler = document.querySelector('.js-menu-toggle');
const sidebar = document.querySelector('.js-sidebar');

sidebarToggler.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});
