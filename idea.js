const SHEARS_SELECTOR = '.shears';
const ART_SELECTOR = '.salon';
const BUTTON_SELECTOR = '[data-snip]';
const SNIP_CLASS = 'is-snipping';
const SNIP_MS = 1400;
const FIRST_SNIP_DELAY_MS = 600;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const art = document.querySelector(ART_SELECTOR);
const shears = document.querySelector(SHEARS_SELECTOR);
const button = document.querySelector(BUTTON_SELECTOR);

function snip() {
  art.classList.remove(SNIP_CLASS);
  art.getBoundingClientRect();
  art.classList.add(SNIP_CLASS);
  setTimeout(() => art.classList.remove(SNIP_CLASS), SNIP_MS);
}

shears.addEventListener('click', snip);
shears.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    snip();
  }
});
button.addEventListener('click', snip);

if (!matchMedia(REDUCED_MOTION_QUERY).matches) setTimeout(snip, FIRST_SNIP_DELAY_MS);
