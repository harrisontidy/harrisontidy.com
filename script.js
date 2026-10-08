// Drop the named files into assets/images; placeholders are replaced automatically.
document.querySelectorAll('[data-image]').forEach((slot) => {
  const image = new Image();
  image.alt = {
    'portrait.webp': 'Harrison Tidy',
    'writeaway.webp': 'WriteAway AI study pen prototype',
    'autobom.webp': 'AutoBOM assistant in KiCad',
    'picklebot.webp': 'PickleBot drive and swing mechanism',
    'scheduler.webp': 'UBC Course Scheduler calendar view',
  }[slot.dataset.image];
  image.onload = () => { slot.append(image); slot.classList.add('has-image'); };
  image.loading = slot.dataset.image === 'portrait.webp' ? 'eager' : 'lazy';
  image.src = `assets/images/${slot.dataset.image}`;
});
document.querySelector('#year').textContent = new Date().getFullYear();
