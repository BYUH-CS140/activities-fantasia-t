// Toggle mobile navigation
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Basic search filter (placeholder)
const searchInput = document.getElementById('searchInput');
const recipeGrid = document.getElementById('recipeGrid');

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const cards = recipeGrid.querySelectorAll('.recipe-card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});
