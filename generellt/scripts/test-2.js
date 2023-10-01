
const dayElement = document.querySelector('.js-day');
const time1Element = document.querySelector('.js-time1');
const time2Element = document.querySelector('.js-time2');
const payElement = document.querySelector('.js-salary');
const submitButton = document.querySelector('.js-submitButton');
const formReciever = document.querySelector('.js-form-reciever');
let recieverText = '';
const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  whatToPay();
});

console.log(generateOptions(time1Element));
generateOptions(time2Element);
generateWeekdays(dayElement);

function generateWeekdays(targetElement) {

  weekdays.forEach(function(value,index) {
    const option = new Option(value);
    targetElement.appendChild(option);
  });
  
}


function generateOptions(targetElement,) {
  
  for (let hour = 7; hour <= 20; hour++) {
    
    for (let minute = 0; minute < 31; minute += 30) {
      const hoursAndMinutes = `${hour.toString().padStart(2,0)}:${minute.toString().padStart(2,0)}`;
      const option = new Option(hoursAndMinutes);
      targetElement.appendChild(option);
    }
  }
  
}


function whatToPay() {
  
  const time1ElementSelect = Array.from(time1Element.options).find(option => option.selected);
  const time2ElementSelect = Array.from(time2Element.options).find(option => option.selected);
  const day = dayElementSelect = Array.from(dayElement.options).find(option => option.selected);
  console.log(time1ElementSelect);
  console.log(time2ElementSelect);
  console.log(time1Element);
  console.log(time2Element);

  if (day === 'Saturday' || day === 'Sunday') {
    pay = pay*1.5;
  }

  recieverText = document.createTextNode(`On a ${day} you will be paid $${pay * (wp.time[0])} for ${wp.time[0]} hours of work.`)
  
    // recieverText = document.createTextNode(`On a ${wp.day} you will be paid $${wp.hourlyPay * (wp.time[0])} for ${wp.time[0]} hours of work.`);

    // const newText = document.createElement('p');
    // newText.appendChild(recieverText);
    // formReciever.appendChild(newText);

}





