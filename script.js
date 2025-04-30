// script.js
const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = Number.isFinite(result) ? result : 'Error';
  } catch {
    display.value = 'Error';
  }
}
