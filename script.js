const steps = [
  { image: 'autobom-esp32-search.png', alt: 'AutoBOM finds an ESP32 component with stock, price, package, and CAD details', caption: 'Describe what you need. The assistant finds an ESP32 match with stock, price, package, and CAD details.' },
  { image: 'autobom-application-circuit-placed.png', alt: 'A generated CAN transceiver application circuit placed inside KiCad', caption: 'Go from a part to a circuit. This demo generates and places a CAN transceiver application circuit with its supporting components in KiCad.' },
  { image: 'autobom-bom-filled.png', alt: 'Completed BOM with manufacturer and supplier part numbers', caption: 'Finish the parts list. Review and apply suggested manufacturer and supplier part numbers, then export the completed BOM for ordering.' },
];
const storyImage = document.querySelector('#story-image');
const storyLink = document.querySelector('#story-image-link');
const storyCaption = document.querySelector('#story-caption');
document.querySelectorAll('[data-step]').forEach((button) => {
  button.addEventListener('click', () => {
    const step = steps[Number(button.dataset.step)];
    storyImage.src = `assets/images/${step.image}`;
    storyImage.alt = step.alt;
    storyLink.href = storyImage.getAttribute('src');
    storyCaption.textContent = step.caption;
    document.querySelectorAll('[data-step]').forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
  });
});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  document.documentElement.classList.add('motion-enabled');
}
// Add assets/images/writeaway.webp to replace the product-photo placeholder.
document.querySelectorAll('[data-image]').forEach((slot) => {
  const image = new Image();
  image.alt = 'WriteAway AI study pen prototype';
  image.onload = () => { slot.append(image); slot.classList.add('has-image'); };
  image.src = `assets/images/${slot.dataset.image}`;
});
document.querySelector('#year').textContent = new Date().getFullYear();
