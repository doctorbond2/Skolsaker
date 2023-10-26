class Todolist {
  constructor() {
    this.todoList = [];
  }
  startUp() {
    const todoForm = document.createElement("div");
    todoForm.id = "todoForm";
    todoForm.setAttribute(
      "style",
      "display: flex; flex-direction: column; width: 20vw;"
    );
    document.body.appendChild(todoForm);

    const firstName = document.createElement("input");
    firstName.id = "input-todo-firstname";
    firstName.setAttribute("placeholder", "Firstname");
    firstName.type = "text";
    todoForm.appendChild(firstName);
    firstName.classList.add("xyz");

    let break1 = document.createElement("br");
    todoForm.appendChild(break1);

    const lastName = document.createElement("input");
    lastName.id = "input-todo-lastname";
    lastName.setAttribute("placeholder", "Lastname");

    lastName.type = "text";
    todoForm.appendChild(lastName);
    let break2 = document.createElement("br");
    todoForm.appendChild(break2);
    lastName.classList.add("xyz");

    const todoTask = document.createElement("input");
    todoTask.id = "todo-task";
    todoTask.type = "text";
    todoTask.setAttribute("placeholder", "Task?");
    todoTask.setAttribute("style", "height: 50px;");
    todoTask.classList.add("xyz");
    todoForm.appendChild(todoTask);

    const dateAndTime = document.createElement("div");
    dateAndTime.id = "input-date";
    dateAndTime.setAttribute("style", "height: 30px;");
    todoForm.appendChild(dateAndTime);
    dateAndTime.classList.add("xyz");

    const todoTime = document.createElement("input");
    todoTime.id = "input-time";
    todoTime.setAttribute("type", "time");
    todoTime.setAttribute("style", "width: 50%; height: 100%;");
    dateAndTime.appendChild(todoTime);
    todoTime.classList.add("xyz");

    const todoDate = document.createElement("input");
    todoDate.id = "input-date";
    todoDate.setAttribute("type", "date");
    todoDate.setAttribute("style", "width: 50%; height: 100%;");
    dateAndTime.appendChild(todoDate);
    dateAndTime.classList.add("xyz");

    const inputAddButton = document.createElement("button");
    inputAddButton.innerText = "Add todo";
    inputAddButton.id = "inputbutton";
    todoForm.appendChild(inputAddButton);

    const todoListBox = document.createElement("ul");
    todoListBox.id = "todo-list-box";
    todoListBox.setAttribute(
      "style",
      "width: 30vw; height: 40vh; background-color: gray;"
    );

    document.querySelectorAll(".xyz");
    document.body.appendChild(todoListBox);
    this.eventListeners(inputAddButton);
  }

  eventListeners(a, d) {
    if (a) {
      a.addEventListener("click", () => {
        this.addTodo();
      });
    } else if (d) {
      console.log("check");
      console.log(d);
    }
  }
  renderList() {
    const box = document.querySelector("#todo-list-box");
  }

  addTodo() {
    const todo = {};
    const form = document.querySelectorAll(".xyz");
    form.forEach((x) => {
      const listName = x.id.split("-");
      todo[`${listName[listName.length - 1]}`] = x.value;
      x.value = "";
    });
    this.todoList.push(todo);
    console.log(this.todoList);
  }
}

//kör all kod här nere :)
const todoList1 = new Todolist();
todoList1.startUp();
todoList1.renderList();
