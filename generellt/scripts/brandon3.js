class Todolist {
  constructor() {
    this.todoList = [];
  }
  startUp() {
    const inputTodo = document.createElement("input");
    inputTodo.id = "input-todo";
    document.body.appendChild(inputTodo);

    const inputAddButton = document.createElement("button");
    inputAddButton.innerText = "Add todo";
    inputAddButton.id = "inputbutton";
    document.body.appendChild(inputAddButton);

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
}

//kör all kod här nere :)
const todoList1 = new Todolist();
todoList1.startUp();
