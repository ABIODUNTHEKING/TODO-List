let form = document.getElementById("form")
form.addEventListener("submit", saveTask)
// This is the code that is expected to save the code to the system
function saveTask(e){
    e.preventdefault;
    console.log("I was here")
    let task = {
        newTask : document.getElementById("newTask").value
    }
    if(localStorage.getItem("task") == null){
        let setOfTask = []
        setOfTask.push(task)
        localStorage.setItem("task", JSON.stringify(setOfTask))
    }
    else{
        let savedTask = JSON.parse(localStorage.getItem("task"))
        let setOfTask = savedTask.push(task)
        localStorage.setItem("task", JSON.stringify(setOfTask))
    }
    form.reset()
    taskStructure()
}

function taskStructure(){
    
    let listOfTask = document.getElementById('list')
    let savedTask = JSON.parse(localStorage.getItem("task"))

    for(let i = 0; i < savedTask.length; i++){
        let newTask = savedTask[i].task

        listOfTask.innerHTML += '<ul>' +
                                '<li>' + newTask + '<button class="trash"><i class="fa-duotone fa-trash"></i></button></li>'       
                                "</ul>"
    }
}

