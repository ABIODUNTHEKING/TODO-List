//VARIABLES
let inputTask = document.getElementById("task-input");
let addButton = document.getElementById("addButton");
let todoListContainer = document.getElementById("todo-div");
let form = document.getElementById('form')
let userRequest = document.getElementById('userInput')
let lisetdItem = document.createElement('ul')


//EVENTLISTENER
addButton.addEventListener('click', newTask)
window.onload = function() {
    displayTask();;
}

//FUNCTIONS
function newTask(e){
    e.preventDefault()

    //Creating of the new HTML elements for the todo list container

    //UL
    lisetdItem.classList.add('lisetdItem')

    //LI
    let task = document.createElement('li')
    task.classList.add('task')

    //SPAN
    let buttonCollection = document.createElement('span')

    //Structure the elements

    task.innerText = inputTask.value
    task.append(buttonCollection)

    if(inputTask.value == ""){   
        lisetdItem.remove() 
        alert("Put in a task you want to perform")
        return
    }
    saveTask()  
    displayTask() 
    form.reset()
      
    }


function saveTask(){
    if(localStorage.getItem('task') == null){     
        let setOfTask = []
        let task = inputTask.value
        setOfTask.push(task)
        localStorage.setItem('task', JSON.stringify(setOfTask))
    }

    else{
       let setOfTask = JSON.parse(localStorage.getItem('task'))
       let task = inputTask.value
       setOfTask.push(task)
       localStorage.setItem('task', JSON.stringify(setOfTask))
    } 
}


function displayTask(){
    let addedTask = JSON.parse(localStorage.getItem('task'))
    lisetdItem.innerHTML = ""
    for(let i = 0; i < addedTask.length; i++){
        let task = addedTask[i]
        let newTask = document.createElement("li");
        newTask.classList.add('task')
        newTask.textContent = task;

        let doneButton = document.createElement('button')
        doneButton.classList.add('done-button')
        doneButton.innerHTML = ''
        doneButton.setAttribute("onclick", "deleteTask()")
        newTask.appendChild(doneButton)
        lisetdItem.appendChild(newTask);
    }

    todoListContainer.appendChild(lisetdItem)
   

}

function deleteTask(){
    let addedTask = JSON.parse(localStorage.getItem('task'))

    for(let i = 0; i < addedTask.length; i++){
        addedTask.splice(i, 1)
        lisetdItem.remove()
    }
    localStorage.setItem('task', JSON.stringify(addedTask))
    displayTask()
}







