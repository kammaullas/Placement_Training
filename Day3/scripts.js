let count=0;
function increment(){
    document.getElementById('count').value = ++count; 
}


let tasks = []


function addTask(){
    const task = document.getElementById('task').value;
    let li = document.createElement('li');
    li.innerHTML=`${task} <button onclick="removeTask(this)">Delete</button>`;
    document.getElementById('tasks').appendChild(li);
    document.getElementById('task').value="";
    
}

function removeTask(button){
    button.parentElement.remove()
}

function updateTask(){

}