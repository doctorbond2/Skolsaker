class Todolist {
  constructor() {
    this.todoList = [];
  }
  startUp() {
    const todoForm = document.createElement("form");
    todoForm.id = "todoForm";
    todoForm.setAttribute('style', 'display: flex; flex-direction: column; width: 20vw;')
    document.body.appendChild(todoForm);

    const firstName = document.createElement("input");
    firstName.id = "input-todo-firstname";
    firstName.setAttribute("placeholder", "Firstname");
    todoForm.appendChild(firstName);
    let break1 = document.createElement("br");
    todoForm.appendChild(break1);

    const lastName = document.createElement("input");
    lastName.id = "input-todo-firstname";
    lastName.setAttribute("placeholder", "Lastname");
    lastName.type = "text";
    todoForm.appendChild(lastName);
    let break2 = document.createElement("br");
    todoForm.appendChild(break2);

    const dateAndTime = document.createElement('div');
    dateAndTime.id = 'date-and-time';
    dateAndTime.setAttribute('style','height: 30px;')
    todoForm.appendChild(dateAndTime);

    const todoTime = document.createElement("input");
    todoTime.id = "input-time";
    todoTime.setAttribute("type", "time");
    todoTime.setAttribute("style", "width: 50%; height: 100%;")
    dateAndTime.appendChild(todoTime);

    const todoDate = document.createElement("input");
    todoDate.id = "input-date";
    todoDate.setAttribute("type", "date");
    todoDate.setAttribute("style", "width: 50%; height: 100%;")
    dateAndTime.appendChild(todoDate);

    const inputAddButton = document.createElement("button");
    inputAddButton.innerText = "Add todo";
    inputAddButton.id = "inputbutton";
    todoForm.appendChild(inputAddButton);

    const todoListBox = document.createElement("ul");
    todoListBox.setAttribute(
      "style",
      "width: 30vw; height: 40vh; background-color: gray;"
    );
    document.body.appendChild(todoListBox);
    this.eventListeners(inputAddButton);
  }
  eventListeners(a, d) {
    if (a) {
      a.addEventListener("click", () => {
        const input = document.querySelector("#input-todo");
        this.todoList.push(input.value);
        console.log(this.todoList);
        console.log(input.value);
        input.value = "";
      });
    } else if (d) {
      console.log("check");
      console.log(d);
    }
  }
  renderList() { }

  addTodo() { }
}

//kör all kod här nere :)
const todoList1 = new Todolist();
todoList1.startUp();
