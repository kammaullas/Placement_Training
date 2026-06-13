function addStudent(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    if(name==="" || age==="" || course==="") alert("Please fill the required!!!!")
    else{
        let div = document.createElement('div');
        div.class='student-details';
        div.innerHTML = 
        `<b>Name: ${name}<br>
        Age: ${age}<br>
        Course: ${course}</b>
        <button onclick="deleteBtn(this)">Delete</button>`;
        document.getElementById('studentList').appendChild(div);

        document.getElementById("name").value="";
        document.getElementById("age").value="";
        document.getElementById("course").value="";
    }
}

function deleteBtn(div){
    div.parentElement.remove();
}