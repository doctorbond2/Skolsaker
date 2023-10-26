class Todolist {
  constructor() {
    this.todoList = [];
  }
  startUp() {
    const todoForm = document.createElement("form");
    todoForm.id = "todoForm";
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

    const todoDate = document.createElement("input");
    todoDate.id = "input-date";
    todoDate.setAttribute("type", "date");
    todoForm.appendChild(todoDate);

    const todoTime = document.createElement("input");
    todoTime.id = "input-time";
    todoTime.setAttribute("type", "time");
    todoForm.appendChild(todoTime);

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
  renderList() {}

  addTodo() {}
}

//kör all kod här nere :)
const todoList1 = new Todolist();
todoList1.startUp();
