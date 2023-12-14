/*function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value !== ' ') {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(taskInput.value));
      taskList.appendChild(li);
      taskInput.value = '';
  
      li.onclick = function() {
        this.classList.toggle('completed');
      };
    }
  }
  

  /*function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    // Get the task value and create a new list item
    var taskText = taskInput.value;
    var newTask = document.createElement("li");
    newTask.textContent = taskText;
  
    // Add a delete button to the task
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = function() {
      taskList.removeChild(newTask);
    };
    newTask.appendChild(deleteButton);
  
    // Add the new task to the list
    taskList.appendChild(newTask);
  
    // Clear the input field after adding the task
    taskInput.value = "";
  }*/


  /*
  function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    var newTask = document.createElement('li');
    var taskText = document.createTextNode(taskInput.value);
    newTask.appendChild(taskText);
    
    taskList.appendChild(newTask);
    taskInput.value = '';
  }*/


  let todoinput=document.querySelector(".todoin")
  let todobutton=document.querySelector(".todobtn")
  let todolist=document.querySelector(".todolist")

  

  todobutton.addEventListener('click',add);

  function add() 
    {
      if(todoinput.value==="")
      {
        alert("enter the item")
        return;
      }
    //creating a div
     const tododiv=document.createElement('div')

     //adding a class to div
     tododiv.classList.add('todo')

     //creating a li
     const todoli=document.createElement('li')

     //adding a class to li
     tododiv.classList.add('todoitems')

     //to see  the items
     todoli.innerText=todoinput.value

     //append the list item to parent element div(tododiv)
     tododiv.appendChild(todoli)

     //append the div to parent element ul(todolist) 
     todolist.appendChild(tododiv)

     //clear the input
     todoinput.value=" "; 


    var deleteButton = document.createElement("span");
    deleteButton.textContent = "x";
    deleteButton.className="deletebutton"
    deleteButton.onclick = function() {
    todolist.removeChild(todoli);
    };
    todoli.appendChild(deleteButton);
    todolist.appendChild(todoli)
    todoinput.value="";
    


   


     
  }