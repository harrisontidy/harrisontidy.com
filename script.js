// Add assets/images/writeaway.webp to replace the remaining placeholder.
document.querySelectorAll('[data-image]').forEach((slot) => {
  const image = new Image();
  image.alt = 'WriteAway AI study pen prototype';
  image.onload = () => { slot.append(image); slot.classList.add('has-image'); };
  image.src = `assets/images/${slot.dataset.image}`;
});
document.querySelector('#year').textContent = new Date().getFullYear();
