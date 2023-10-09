import Customer from "./main2.js";

const inputElement = document.querySelector('.input-kaffe');
const buttonElement = document.querySelector('.buy-button');
let koppAntal = ''
const kaffePris = 25;
const customer_Fredde = new Customer(1000);
let resultHTML = document.querySelector('.result-text');

buttonElement.addEventListener('click', () => {
  koppAntal = inputElement.value;
  inputElement.value = '';
  customer_Fredde.addTransaction(koppAntal*kaffePris);
  resultHTML.textContent = `Du har spenderat totalt: $${customer_Fredde.getTotalSpent()}\n`
});

console.log(koppAntal);