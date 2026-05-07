const toggle = document.querySelector('.mq-nav-demo__toggle');
const menu = document.querySelector('.mq-nav-demo__menu');

toggle.addEventListener('click', () => {
  const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isExpanded));
  menu.classList.toggle('mq-nav-demo__menu--open');
});
