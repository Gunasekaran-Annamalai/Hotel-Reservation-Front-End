const menu = document.querySelector('.menu-btn');
const link = document.querySelector('.link');
const desc = document.getElementById('main-description')

console.log(desc);

menu.addEventListener('click', () => {
  link.classList.toggle('display-menu');
  desc.classList.toggle('move-down');
})