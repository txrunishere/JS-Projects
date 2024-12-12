const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-";

// Selectors
const passwordBox = document.querySelector('#password');
const pwLength = document.querySelector('.length');
const upperEl = document.querySelector('.upper');
const lowerEl = document.querySelector('.lower');
const numberEl = document.querySelector('.number');
const symbolEl = document.querySelector('.symbol');
const genPassword = document.querySelector('.gen-password');


const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = '') => {

  if (!lowerEl.checked && !upperEl.checked && !symbolEl.checked && !numberEl.checked) {
    alert('Please select at least one character type!');
    return;
  }

  if (lowerEl.checked) {
    password += getRandomData(lowerLetters);
  }
  if (upperEl.checked) {
    password += getRandomData(upperLetters);
  }
  if (symbolEl.checked) {
    password += getRandomData(symbols);
  }
  if (numberEl.checked) {
    password += getRandomData(numbers);
  }

  if (pwLength.value > 50) {
    alert('Enter a valid value');
    pwLength.value = "";
  }

  // Use recursion function here
  if (password.length < pwLength.value) {
    return generatePassword(password)
  }

  passwordBox.value = trimString(password, pwLength.value);

  console.log(trimString(password, pwLength.value));
}

// generatePassword();

function trimString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num)
    return subStr;
  } else {
    return str;
  }
}

genPassword.addEventListener('click', () => {
  generatePassword();
});

function copypassword() {
  passwordBox.select();
  document.execCommand("copy");
}