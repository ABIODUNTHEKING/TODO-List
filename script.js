//VARIABLES
let inputTask = document.getElementById("task-input");
let addButton = document.getElementById("addButton");
let todoListContainer = document.getElementById("todo-div");
let form = document.getElementById('form')
let userRequest = document.getElementById('userInput')

//EVENTLISTENER
addButton.addEventListener('click', newTask)

//FUNCTIONS
function newTask(e){
    e.preventDefault()

    //Creating of the new HTML elements for the todo list container

    //UL
    let lisetdItem = document.createElement('ul')
    lisetdItem.classList.add('lisetdItem')
    //LI
    let task = document.createElement('li')
    task.classList.add('task')
    //SPAN
    let buttonCollection = document.createElement('span')
    //DONE BUTTON
    let doneButton = document.createElement('button')
    doneButton.classList.add('done-button')
    doneButton.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    //TRASH BUTTON
    let trashButton = document.createElement('button')
    trashButton.classList.add('trash-button')
    trashButton.innerHTML = '<i class="fa-solid fa-square-check"></i>'


    //Structure the elements
    todoListContainer.append(lisetdItem)
    lisetdItem.append(task)
    task.innerText = inputTask.value
    task.append(buttonCollection)
    buttonCollection.append(doneButton)
    buttonCollection.append(trashButton)


if(inputTask.value == ""){
    
    lisetdItem.remove() 
    alert("Put in a task you want to perform")
}


form.reset()
}


function deleteTask(){
    newTask()
}


