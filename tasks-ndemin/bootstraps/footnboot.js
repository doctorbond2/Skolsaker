const calcDisplay = document.querySelector(".calc-display");
let v1 = "";
let v2 = "";
let oIA = false;

let evaluation = "";
let operator = "";
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let operators = ["+", "-", "x", "/"];
const display = document.querySelector(".calc-display");
const display1 = document.querySelector(".value1");
const display2 = document.querySelector(".value2");
const operatorDisplay = document.querySelector(".operator");

const allButtons = document.querySelectorAll(".btn");
allButtons.forEach((x) => {
  buttonWork(x);
});

function updateValue(input) {
  console.log(input);
  if (!oIA) {
    let value = input;
    if (v1 === "0" && value === "0") {
      v1 += `.${value}`;
      display1.innerHTML = v1;
      return v1;
    } else if (value === "." && v1.charAt(v1.length - 1) === ".") {
      return alert("NO");
    } else {
      if (!commaCheck(value, v1)) {
        v1 += value;
        display1.innerHTML = v1;
        return v1;
      } else {
        return alert("Commacheck!");
      }
    }
  } else {
    let value = input;
    if (!value.includes(value)) {
      return alert("bip2");
    }
    if (v2 === "0" && value === "0") {
      v2 += `.${value}`;
      display2.innerHTML = v2;
      return v2;
    } else if (value === "." && v2.charAt(v2.length - 1) === ".") {
      return alert("NO");
    } else {
      if (!commaCheck(value, v2)) {
        v2 += value;
        display2.innerHTML = v2;
        return v2;
      } else {
        alert("CommaCheck v2!");
      }
    }
  }
}
function runCalculation(value1, operation, value2) {
  let v1 = Number(value1);
  let v2 = Number(value2);
  switch (operation) {
    case "+":
      evaluation = v1 + v2;
      display1.innerHTML = evaluation;
      reset();
      break;
    case "-":
      evaluation = v1 - v2;
      display1.innerHTML = evaluation;
      reset();
      break;
    case "x":
      evaluation = v1 * v2;
      display1.innerHTML = evaluation;
      reset();
      break;
    case "/":
      evaluation = v1 / v2;
      display1.innerHTML = evaluation;
      reset();
      break;
  }

  //if evaluation is true, use evaluation for value1 instead.
  //if operator is active -> run calculation 2
  //otherwise run calculator 1
}
function reset() {
  display2.innerHTML = "";
  operatorDisplay.innerHTML = "";
  v1 = evaluation;
  v2 = "";
  operator = "";
  oIA = false;
}
function commaCheck(value, v) {
  if (value === ".") {
    let toCheck = v.split("");
    console.log(toCheck);
    if (toCheck.includes(".")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function calculatorFunctionalities(input) {
  switch (input) {
    case "AC":
      reset();
      v1 = "";
      display1.innerHTML = "";
      break;
    case "C":
      console.log(v1);
      if (!oIA) {
        v1 = v1.toString();
        v1 = v1.slice(0, v1.length - 1);
        display1.innerHTML = v1;
      } else {
        v2 = v2.toString();
        v2 = v2.slice(0, v2.length - 1);
        display2.innerHTML = v2;
      }
      break;
    case "=":
      runCalculation(v1, operator, v2);
    case "+":
      console.log("ok");
      if (v2.length > 0) {
        console.log("ok?");
        runCalculation(v1, operator, v2);
      }
      break;
  }
}
function buttonWork(x) {
  let v = x.innerText;
  if (numbers.includes(v)) {
    x.addEventListener("click", () => {
      updateValue(v);
    });
  } else {
    x.addEventListener("click", () => {
      //adda här
      if (operators.includes(v)) {
        if (!oIA) {
          oIA = true;
          operatorDisplay.innerHTML = v;
          operator = v;
        } else {
          if (v === operator) {
            runCalculation(v1, operator, v2);
            operatorDisplay.innerHTML = v;
            operator = v;
            oIA = true;
          } else {
            operatorDisplay.innerHTML = v;
            operator = v;
          }
        }
      } else {
        calculatorFunctionalities(v);
      }
    });
  }
}
