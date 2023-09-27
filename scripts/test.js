
const dayParam = document.querySelector('.js-day');
const timeParam = document.querySelector('.js-time');
const salaryParam = document.querySelector('.js-salary');
const submitButton = document.querySelector('.js-submitButton');
const formReciever = document.querySelector('.js-form-reciever');
let recieverText = '';


submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  whatToPay(dayParam,timeParam,salaryParam);
});

function whatToPay(dayParam, timeParam, salaryParam) {
  
    const dayParamSelect = Array.from(dayParam.options).find(option => option.selected);
    const timeParamSelect = Array.from(timeParam.options).find(option => option.selected);

  const wp = {
    day: dayParamSelect.value.toLowerCase(),
    time: timeParamSelect.value,
    hourlyPay: salaryParam.value
  }

  if (wp.day === 'Saturday' || 'Sunday') {
    wp.hourlyPay = wp.hourlyPay*2;
  }

  console.log(wp.time);

    
    recieverText = document.createTextNode(`On a ${wp.day} you will be paid $${wp.hourlyPay * (wp.time[0])} for ${wp.time[0]} hours of work.`);

    const newText = document.createElement('p');
    newText.appendChild(recieverText);
    formReciever.appendChild(newText);
}



