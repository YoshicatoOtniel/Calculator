let currentInput = "";
let operation = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperation(op) {
  if (currentInput === "") return; // Prevents operations without a number
  if (previousInput !== "") {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr; // Handle multiplication
      break;
    case "/":
      result = prev / curr;
      break;
    case "%":
      result = prev % curr;
      break;
    // Add any additional operations here
    default:
      return;
  }

  currentInput = result;
  operation = "";
  previousInput = "";
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operation = "";
  updateDisplay("");
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  document.getElementById("display").value = value;
}

// Implement increment and decrement functions as needed
