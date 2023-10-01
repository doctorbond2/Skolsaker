
const dayElement = document.querySelector('.js-day');
const time1Element = document.querySelector('.js-time1');
const time2Element = document.querySelector('.js-time2');
const payElement = document.querySelector('.js-salary');
const submitButton = document.querySelector('.js-submitButton');
const formReciever = document.querySelector('.js-form-reciever');
let recieverText = '';

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  whatToPay();
});

generateOptions(time1Element);
generateOptions(time2Element);

function generateOptions(targetElement) {
  console.log('start');

  for (let hour = 7; hour <= 20; hour++) {

    for (let minute = 0; minute < 31; minute += 30) {
      const hoursAndMinutes = `${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,0)}`;
      const option = new Option(hoursAndMinutes, hoursAndMinutes);
      targetElement.appendChild(option);
    }
  }
}


function whatToPay(day, time1, time2, pay) {
  
  const time1ElementSelect = Array.from(time1Element.options).find(option => option.selected);
  const time2ElementSelect = Array.from(time2Element.options).find(option => option.selected);
  console.log(time1ElementSelect);
  console.log(time2ElementSelect);

  if (wp.day === 'Saturday' || wp.day === 'Sunday') {
    pay = pay*1.5;
  }
  
    // recieverText = document.createTextNode(`On a ${wp.day} you will be paid $${wp.hourlyPay * (wp.time[0])} for ${wp.time[0]} hours of work.`);

    // const newText = document.createElement('p');
    // newText.appendChild(recieverText);
    // formReciever.appendChild(newText);

}





