//VARIABLES
let inputTask = document.getElementById("task-input");
let addButton = document.getElementById("addButton");
let todoListContainer = document.getElementById("todo-div");
let form = document.getElementById('form')
let userRequest = document.getElementById('userInput')


//EVENTLISTENER
addButton.addEventListener('click', newTask)
// addButton.addEventListener('submit', saveTask)



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
    doneButton.setAttribute("onclick", "done()")
  
    //Structure the elements
    //todoListContainer = JSON.parse(localStorage.getItem('task'))
    if(localStorage.getItem('task') != null){
        todoListContainer.clear()
        let setOfTask = JSON.parse(localStorage.getItem('task'))

        setOfTask.forEach(element => {
            todoListContainer.append(lisetdItem)
            lisetdItem.append(task)
            task.innerText = inputTask.value
            task.append(buttonCollection)
            buttonCollection.append(doneButton)
            todoListContainer.append(element)
        });
    }

    todoListContainer.append(lisetdItem)
    lisetdItem.append(task)
    task.innerText = inputTask.value
    task.append(buttonCollection)
    buttonCollection.append(doneButton)
 

    if(inputTask.value == ""){   
        lisetdItem.remove() 
        alert("Put in a task you want to perform")
        
    }
    saveTask()  
    form.reset()
          
    }


function saveTask(){
    
   

    if(localStorage.getItem('task') == null){
            
        let setOfTask = []
        let task = inputTask.value
        setOfTask.push(task)
        localStorage.setItem('task', JSON.stringify(setOfTask))
        console.log('I was here ')

      }

    else{
    
       let setOfTask = JSON.parse(localStorage.getItem('task'))
       //console.log(setOfTask)
       let task = inputTask.value
       setOfTask.push(task)
       localStorage.setItem('task', JSON.stringify(setOfTask))
    }
    
    //newTask()
}


function deleteTask(e){
    
    const item = e.target
    if(item.classList[0] === "trashButton"){
        item.remove()
    }
    
}





