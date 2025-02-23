// public/burger.js
const burger = document.querySelector('.burger');
const internalLinks = document.querySelector('.internal-links');

if (burger && internalLinks) {
  burger.addEventListener('click', () => {
    internalLinks.classList.toggle('active');
  });
}
