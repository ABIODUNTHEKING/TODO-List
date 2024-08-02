let todoListContainer = document.querySelector("#todo-container");
let savedTask = JSON.parse(localStorage.getItem("task")) || [];

window.onload = () => {
  displayTask(savedTask);
};

const taskStructure = (value, index, status) => {
  return `<li class="task" id="task">
      <p>${value}</p>
      <div>
      <button class="done-button ${
        status == "completed" ? "none" : ""
      }" onclick="completeTask(event)" id="${index}"><span class="material-symbols-outlined icon">
      check
      </span></button>
      <button class="trash-button" onclick="deleteTask(event)" id="${index}"><span class="material-symbols-outlined icon">
      delete
      </span></button>
      </div>
      </li>`;
};

const displayTask = (collectionOfTask) => {
  if (collectionOfTask.length <= 0) {
    todoListContainer.innerHTML =
      "<li class='no-task'>Task is not available</li>";
    return;
  }

  todoListContainer.innerHTML = "";
  collectionOfTask.reverse().forEach((task) => {
    todoListContainer.innerHTML += taskStructure(
      task.value,
      task.id,
      task.status
    );
  });
};

const addTask = (event) => {
  event.preventDefault();
  const element = event.target[0];
  let inputtedValue = element.value;
  let noTask = document.querySelector(".no-task");

  noTask ? noTask.innerHTML = "" : "";

  if (inputtedValue.trim() == "") {
    alert("Enter in a task");
  } else {
    savedTask.push({
      id: savedTask.length,
      value: inputtedValue,
      status: "pending",
    });
    localStorage.setItem("task", JSON.stringify(savedTask));

    todoListContainer.insertAdjacentHTML(
      "afterbegin",
      taskStructure(inputtedValue, savedTask.length - 1)
    );
  }

  event.target.reset();
};

const deleteTask = (e) => {
  const element = e.target.parentElement;
  const taskList = element.parentElement.parentElement;

  taskList.id == "task" && taskList.remove();

  savedTask = savedTask.filter((task) => task.id != element.id);
  localStorage.setItem("task", JSON.stringify(savedTask));

  if (savedTask.length <= 0) {
    todoListContainer.innerHTML =
      "<li class='no-task'>Task is not available</li>";
    return;
  }
};

const completeTask = (e) => {
  const element = e.target.parentElement;
  savedTask.forEach((task) => {
    if (task.id == element.id) {
      task.status = "completed";
      element.remove();
      let tabButton = document.querySelector(".active-button");
      const notDoneTasks = savedTask.filter((task) => task.status == "pending");
      tabButton.id == "notDone" ? displayTask(notDoneTasks) : "";
      localStorage.setItem("task", JSON.stringify(savedTask));
    }
  });
};

const changeTab = (e) => {
  const tabButton = e.target;
  let button = document.querySelector(".active-button");
  button.classList.remove("active-button");
  tabButton.classList.add("active-button");

  const elementId = tabButton.id;

  const doneTasks = savedTask.filter((task) => task.status == "completed");
  const notDoneTasks = savedTask.filter((task) => task.status == "pending");

  todoListContainer.innerHTML = "";

  if (elementId == "done") {
    displayTask(doneTasks);
  } else if (elementId == "all") {
    displayTask(savedTask);
  } else {
    displayTask(notDoneTasks);
  }
};
