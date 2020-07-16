"use strict";
class Calculator {
  // init the calculator
  constructor() {
    const display = document.querySelector(".calculator__display");
    const operator = document.querySelectorAll(".operator");
    const zeroStart = document.querySelector(".bigzero");
    const clear = document.querySelector(".clear");
    const numberListenser = document.querySelectorAll(".calculator__input");
    let displayVal = 0;
    display.innerHTML = displayVal;
  }

  //add function for lisenEvent "click"
  listenEvent() {
    numberListenser;
    return;
  }
  display() {
    return;
  }

  //each time press the button
  updateScreen(num) {
    return;
  }
  //run opeator
  method() {
    return;
  }

  //like "dot", only display once, or "operator" only work at last press
  uniOperator() {
    let checkUni = 0;
    while (this.displayVal) return;
  }
  //reset to 0
  clear() {
    while (displayVal[displayVal.length - 1] === this.clear.innerHTML) {
      this.displayVal = 0;
    }
  }
}
window.onload = function () {
  const calculator = new Calculator();
};
