function createDomElements(todos) {
  var parentElement = document.getElementById("mainArea");
  let currentTodo = Array.from(parentElement.children);

  let added = 0,
    deleted = 0,
    updated = 0;

  todos.forEach((todo) => {
    let isExisted = currentTodo.find((displayTodo) => {
      return displayTodo.dataset.id === String(todo.id);
    });

    if (isExisted) {
      updated++;

      isExisted.children[0].innerHTML = todo.title;
      isExisted.children[1].innerHTML = todo.description;

      currentTodo = currentTodo.filter((ele) => {
        return ele !== isExisted;
      });
    } else {
      added++;

      let childElement = document.createElement("div");
      childElement.dataset.id = todo.id;

      let grandChildElement1 = document.createElement("span");
      grandChildElement1.innerHTML = todo.title;

      let grandChildElement2 = document.createElement("span");
      grandChildElement2.innerHTML = todo.description;

      let grandChildElement3 = document.createElement("button");
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.setAttribute("onclick", "delete(" + todo.id + ")");

      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);

      parentElement.appendChild(childElement);
    }

    currentTodo.forEach((displayTodo) => {
      deleted++;
      parentElement.removeChild(displayTodo);
    });
  });
  console.log("Added:", added);
  console.log("Updated:", updated);
  console.log("Deleted:", deleted);
}

window.setInterval(() => {
  let todos = [];
  for (var i = 0; i < Math.floor(Math.random() * 100); i++) {
    todos.push({
      id: i + 1,
      title: "My name is Gaurav",
      description: "i want to be the 100x developer",
    });
  }
  createDomElements(todos);
}, 5000);
