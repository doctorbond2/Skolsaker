
const bodyMainElement = document.querySelector('.js-body-main');
const sectionOneElement = document.createElement('section');
console.log(bodyMainElement);

const todoList = [
  {
    task: 'Build a car from mud',
    person: 'Jeffrey',
    dueDate: '2024-12-21'
  },
  {
    task: 'Build another from mud',
    person: 'Jimmy',
    dueDate: '2025-12-21'
  }
];

generatePage();
renderTodoList();


function renderTodoList(){

  todoList.forEach((object, index) => {
    const {task, person, dueDate} = object;
    const objectLength = Object.keys(object).length;

    for(let i = 0; i < objectLength; i++) {
      const cellNode = document.createElement('div');
      cellNode.innerText = `${objectLength[i]}`;
      console.log(cellNode.innerText);
    }

    // const cellText = document.createTextNode(`
    // ${task}\n${person}\n ${dueDate}`);
    // cellNode.classList.add('standard-flexbox');
    // cellNode.appendChild(cellText);
    // sectionOneElement.appendChild(cellNode);
  });
  
}

function generatePage() {
  const mainDivElement = document.createElement('div');
  
  sectionOneElement.classList.add('js-section-one', 'section-one');
  mainDivElement.classList.add('main-box', 'js-main-box');
  bodyMainElement.appendChild(sectionOneElement);
  sectionOneElement.appendChild(mainDivElement);
}

