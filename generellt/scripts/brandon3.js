class Todolist {
  constructor() {
    this.todoList = [];
  }
  startUp() {
    const todoForm = document.createElement("form");
    todoForm.id = "todoForm";
    todoForm.disabled = "disabled";
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

    let break1 = document.createElement("br");
    todoForm.appendChild(break1);

    const lastName = document.createElement("input");
    lastName.id = "input-todo-lastname";
    lastName.setAttribute("placeholder", "Lastname");

    lastName.type = "text";
    todoForm.appendChild(lastName);
    let break2 = document.createElement("br");
    todoForm.appendChild(break2);

    const todoTask = document.createElement("input");
    todoTask.id = "todo-task";
    todoTask.type = "text";
    todoTask.setAttribute("placeholder", "Task?");
    todoTask.setAttribute("style", "height: 50px;");
    todoForm.appendChild(todoTask);

    const dateAndTime = document.createElement("div");
    dateAndTime.id = "input-date-and-time";
    dateAndTime.setAttribute("style", "height: 30px;");
    todoForm.appendChild(dateAndTime);

    const todoTime = document.createElement("input");
    todoTime.id = "input-time";
    todoTime.setAttribute("type", "time");
    todoTime.setAttribute("style", "width: 50%; height: 100%;");
    dateAndTime.appendChild(todoTime);

    const todoDate = document.createElement("input");
    todoDate.id = "input-date";
    todoDate.setAttribute("type", "date");
    todoDate.setAttribute("style", "width: 50%; height: 100%;");
    dateAndTime.appendChild(todoDate);

    const inputAddButton = document.createElement("input");
    inputAddButton.type = "submit";
    inputAddButton.innerText = "Add todo";
    inputAddButton.id = "inputbutton";
    todoForm.appendChild(inputAddButton);

    const todoListBox = document.createElement("div");
    todoListBox.id = "todo-list-box";
    todoListBox.setAttribute(
      "style",
      "width: 30vw; height: 40vh; background-color: gray;"
    );
    const all = document.querySelectorAll("input");
    all.forEach((x) => {
      x.classList.add("xyz");
      x.required = "true";
    });
    inputAddButton.classList.remove("xyz");

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
      // console.log("check");
      // console.log(d);
    }
  }
  renderList() {
    this.todoList.forEach((x) => {
      const card = document.createElement("ul");
      card.style.backgroundColor = "red";
      Object.values(x).forEach((y, i) => {
        const item = document.createElement("li");
        item.innerHTML = y;
        card.appendChild(item);
      });
      document.querySelector("#todo-list-box").appendChild(card);
      this.eventListeners(0, "delete");
    });
  }

  addTodo() {
    const todo = {};
    const form = document.querySelectorAll(".xyz");
    for (let i = 0; i < form.length; i++) {
      if (!form[i].value) {
        return alert("All fields need to be filled");
      }
    }
    form.forEach((x) => {
      const tag = x.id.split("-");
      todo[`${tag[tag.length - 1]}`] = x.value;
      x.value = "";
    });
    this.todoList.push(todo);
    console.log(this.todoList);
    this.renderList();
  }
  formControl() {
    const form = document.querySelectorAll(".xyz");
  }
}

//kör all kod här nere :)
const todoList1 = new Todolist();
todoList1.startUp();
todoList1.renderList();
