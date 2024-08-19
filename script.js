let inputTodoValues = document.getElementById("todo"); //input
let addTodoButton = document.getElementById("addTodo"); //button
let todoList = document.getElementById("task_list");

let todoMemo = JSON.parse(localStorage.getItem("todoItem")) || [];

addTodoButton.addEventListener("click", () => {
  let task = inputTodoValues.value.trim();
  setIntoLocalStorae(task);
});


function setIntoLocalStorae(task) {
  if (task && !todoMemo.includes(task)) {
    todoMemo.push(task);
    localStorage.setItem("todoItem", JSON.stringify(todoMemo));
    getItemfromLocalStorage();
  }
  inputTodoValues.value = "";
}

function getItemfromLocalStorage() {
  todoList.innerHTML = "";
  todoMemo.forEach((element, index) => {
    let listItem = document.createElement("li");
    let remove = document.createElement("Button");
    remove.innerHTML = "Delete";
    listItem.innerHTML = element;
    listItem.appendChild(remove);
    todoList.append(listItem);
    remove.addEventListener("click", () => {
      removeTask(index);
    });
  });
}

let removeTask= (index)=>{
    todoMemo.splice(index, 1); 
    localStorage.setItem("todoItem", JSON.stringify(todoMemo)); 
    getItemfromLocalStorage(); 
    
}

getItemfromLocalStorage();

