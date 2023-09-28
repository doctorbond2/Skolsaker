function removeChar(str) {
  strArray = str.split('');
  strArray.splice(0,1);
  strArray.splice((strArray.length-1),1);
  return strArray.join('');
}

console.log(removeChar('abrakadabra'));

function cafeP(money) {
  const coffee = 12;
  const rabatt = 0.10;
  const spendingLimit = 1000;
  const cash = money;
  if (cash < spendingLimit) {
    console.log(`You need to buy ${(spendingLimit-cash)/12} more cups of coffee!`);
  }
  else console.log(`You get a discount!`);
}

cafeP(850);

function greeting(name,greeting) {
  console.log(`${greeting} ${name}`);
}

greeting('Ygritte', 'Hejsan');