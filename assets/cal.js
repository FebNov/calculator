"use strict";

let checkUni = 0;
let firstNumber = 0;
const display = document.querySelector(".screen");
const operator = document.querySelectorAll(".operator");
const zeroStart = document.querySelector(".zero");
const clearC = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const dot = document.querySelectorAll(".dot");
const number = document.querySelectorAll(".number");

var operatorLast = [];

number.forEach((number) => {
  number.addEventListener("click", () => {
    //console.log(display.value);
    number.classList.add("number--clicked");
    setTimeout(() => {
      number.classList.remove("number--clicked");
    }, 100);

    if (document.querySelector("operator--clicked")) {
      firstNumber = display.value;
      console.log(firstNumber);
      display = 0;
      document
        .querySelector("operator--clicked")
        .classList.remove("operator--clicked");
    }
    display.value += number.innerHTML;
  });
});
operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    //console.log(display.value);
    operator.classList.add("operator--clicked");
    setTimeout(() => {
      operator.classList.remove("operator--clicked");
    }, 100);
  });
});

dot.addEventListener("click", () => {
  if (display.value.indexOf(".") === -1) {
    display.value += dot.innerText;
  }
});
