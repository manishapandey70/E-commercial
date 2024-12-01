const buttons = document.querySelectorAll('.buy-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});