const NumberInput = document.getElementById('Number-Input');
const InputValue = NumberInput.value;
const CheckButton = document.getElementById('Check-Button');
const body = document.getElementById('bg');

const RestartButton = document.getElementById('Restart-Button');

const SecretNumber = Math.floor(Math.random() * 50);
console.log(`The secret number is ${SecretNumber}`);

let TriesLeft = 20;

CheckButton.addEventListener('click', function () {
  const TriesText = document.getElementById('Tries-Text');
  const numberhelper = document.getElementById('number-helper');
  if (Number(NumberInput.value) === SecretNumber) {
    body.classList.toggle('win');
  }

  if (Number(NumberInput.value) > SecretNumber) {
    numberhelper.textContent = 'Too high! Try a lower number.';
    numberhelper.style.color = '#ff6b6b';
    TriesLeft--;
    TriesText.textContent = `Tries: ${TriesLeft}`;
  } else if (Number(NumberInput.value) < SecretNumber) {
    numberhelper.textContent = 'Too low! Try a higher number.';
    numberhelper.style.color = '#48dbfb';
    TriesLeft--;
    TriesText.textContent = `Tries: ${TriesLeft}`;
  } else {
    numberhelper.textContent = '🎉 Correct! You guessed the number!';
    numberhelper.style.color = '#1dd1a1';
    title.textContent = `YOU WON 🎉 The number was ${SecretNumber}`;
    CheckButton.disabled = true;
    CheckButton.textContent = 'You Did It!';
  }
});

RestartButton.addEventListener('click', function () {
  TriesLeft = 20;
  TriesText.textContent = `Tries: ${TriesLeft}`;
  CheckButton.disabled = false;
  title.textContent = `GUESS THE NUMBER (1-50)`;
});
