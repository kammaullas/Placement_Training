let employees = JSON.parse(localStorage.getItem("employees"))||[];

var idCounter = 0;
function addEmployee() {
    const name = document.getElementById('empName').value;
    const age = document.getElementById('empAge').value;
    const department = document.getElementById('empDepartment').value;
    const salary = document.getElementById('empSalary').value;
    // let tr = document.createElement('tr');
    // tr.innerHTML = `
    //     <td>${idCounter++}</td>
    //     <td>${name}</td>
    //     <td>${age}</td>
    //     <td>${department}</td>
    //     <td>$${Number(salary).toLocaleString()}</td>
    //     <td><button class="delete-btn">Delete</button></td>
    // `;
    // document.querySelector('tbody').appendChild(tr);

    let employee = {
        id: idCounter,
        name,
        age,
        department,
        salary
    };
    idCounter+=1;
    employees.push(employee);
    localStorage.setItem("employees",JSON.stringify(employees));
    // clearForm();
    displayEmployees();

}

function displayEmployees(){
    const employ = JSON.parse(localStorage.getItem("employees"));
    let table = document.querySelector('tbody');
    for(emp of employ){
    table.innerHTML+=
    `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td>
                <button class="edit-btn" onclick=editEmployee(${emp.id})>Edit</button>
                <button class="delete-btn" onclick=deleteEmployee(${emp.id})>Delete</button>
            </td>
        </tr>
        `
    }
}

function deleteEmployee(id){
    employees = JSON.parse(localStorage.getItem("employees"));
    employees = employees.filter((emp)=> {return emp.id!=id});
    localStorage.setItem("employees",JSON.stringify(employees));
}




