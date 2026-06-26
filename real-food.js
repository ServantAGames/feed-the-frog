(() => {
  const food = document.getElementById('food-bubble');
  const frog = document.getElementById('frog-face');
  const response = document.getElementById('frog-response');
  if (!food || !frog || !response) return;

  function isRealFood() {
    return food.textContent.trim().toLowerCase() === 'real food';
  }

  function sayThanks() {
    response.textContent = 'Thanks, that is real food.';
    response.classList.add('show');
    frog.classList.add('open');
    setTimeout(() => {
      response.classList.remove('show');
      frog.classList.remove('open');
    }, 2200);
  }

  window.feedTheFrogRealFood = { isRealFood, sayThanks };
})();
