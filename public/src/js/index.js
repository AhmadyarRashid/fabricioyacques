// Require Line Awesome
import $ from 'jquery';

require('line-awesome/dist/line-awesome/css/line-awesome.css');

$('.js-dropdown').on('click', (event) => {
  $(this).siblings('ul').toggleClass('show');
  event.stopPropagation();
});
$(document).on('click', () => {
  const navToggle = $('.nav-toggler');
  if (navToggle.siblings('ul').hasClass('show')) {
    $(navToggle.siblings('ul')).removeClass('show');
  }
});
