const form = document.getElementById('numberForm');
const numberInput = document.getElementById('numberInput');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const number = parseFloat(numberInput.value); 

  if (isNaN(number)) {
    result.textContent = "Пожалуйста, введите корректное число!";
    result.style.color = "red";
  } else if (number > 0) {
    result.textContent = "Число положительное!";
    result.style.color = "green";
  } else if (number < 0) {
    result.textContent = "Число отрицательное!";
    result.style.color = "red";
  } else {
    result.textContent = "Число равно нулю!";
    result.style.color = "blue";
  }
});