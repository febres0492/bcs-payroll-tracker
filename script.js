// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const data = []

// Collect employee data
const collectEmployees = function () {
    // TODO: Get user input to create and return an array of employee objects
    const step = ['firstName', 'lastName', 'salary', 'Do you want add another employee','exit']
    let obj = {}
    let i = -1;

    while (step[i] !== 'exit') {
        i++
        if(step[i] !== step[3]){
            const input = window.prompt(`Enter ${step[i]}`)
            if(input === null){ break } // exiting loop if clicked cancel

            if(input?.length === 0){ // repeat step if click ok with no input
                window.alert(`Please Enter ${step[i]}`)
                i-= 1 
            }
            
            obj[step[i]] = input
            console.log( obj )

        } else {
            data.push(obj)
            obj = {}
            if(window.confirm(step[i])){ // if clicked ok to adding more emplyees
                i = -1
            } else { // if clicked cancel to adding more emplyees
                break
            }
        }
    }
    console.log('data', data)
    return data 
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
    // TODO: Calculate and display the average salary
    
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    // TODO: Select and display a random employee

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
