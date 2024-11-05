const form = document.querySelector('form');
// This use case will give you empty values
// const height = purseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // showing result:
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi > 24.9) {
      message.innerHTML = `You're Overweight! Do exercise!`;
    } else if (bmi <= 24.9 && bmi >= 18.6) {
      message.innerHTML = `You're weight is Normal according to BMI standards. Maintain it!`;
    } else if (bmi < 18.6) {
      message.innerHTML = `You are Underweight! Eat more!`;
    }
  }
});