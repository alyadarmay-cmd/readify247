// script.js — filter buttons
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // set active class
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const level = btn.dataset.level; // All / Beginner / Intermediate / Advanced
      // show/hide cards
      cards.forEach(card => {
        if (level === 'All' || card.dataset.level === level) {
          card.style.display = ''; // show (use default block/flex)
        } else {
          card.style.display = 'none'; // hide
        }
      });
    });
  });
});
