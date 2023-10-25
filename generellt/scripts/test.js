
const dayParam = document.querySelector('.js-day');
const timeParam = document.querySelector('.js-time');
const salaryParam = document.querySelector('.js-salary');
const submitButton = document.querySelector('.js-submitButton');
const formReciever = document.querySelector('.js-form-reciever');
let recieverText = '';




function whatToPay(dayParam, timeParam, salaryParam) {
  
    const dayParamSelect = Array.from(dayParam.options).find(option => option.selected);
    const timeParamSelect = Array.from(timeParam.options).find(option => option.selected);

  const wp = {
    day: dayParamSelect.value.toLowerCase(),
    time: timeParamSelect.value,
    hourlyPay: salaryParam.value
  }

  if (wp.day === 'Saturday' || wp.day === 'Sunday') {
    wp.hourlyPay = wp.hourlyPay*1.5;
  }
  
    recieverText = document.createTextNode(`On a ${wp.day} you will be paid $${wp.hourlyPay * (wp.time[0])} for ${wp.time[0]} hours of work.`);

    const newText = document.createElement('p');
    newText.appendChild(recieverText);
    formReciever.appendChild(newText);
}

function asd(str) {
  str.split('').reverse().join('');
}
asd('joey');
summation(4);
function summation(num) {
  let stop = 0;
  let start = 0;

  while (start < num) {
    start++
    stop = stop + start;
  }
  return stop;
}

function countPositivesSumNegatives(input) {
  let positives = 0;
  let negatives = 0;
  const final = [];
  if(!input) {
    return final;
  } else {
    input.forEach((value,index) => {
      value === 0 ? null : value > 0 ? positives++ : negatives += value;
    });
  
    if(positives > 0 || negatives < 0) {
      final.push(positives);
      final.push(negatives);
    } 
    return final;
  }
}

function countSheeps(sheep) {
  let count = sheep.filter(x => x);
  return count.length;
}



const testElement = document.querySelector('.for-loop');

for(i = 0; i < 7; i++) {
  const newV = document.createElement('div');
  newV.innerHTML = `
  <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <img src="/generellt/images/okguy.jpg">
  </a>
  `;
  testElement.appendChild(newV);
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})