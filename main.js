// Load Existing Data from localStorage or Set Defaults
let branchData = JSON.parse(localStorage.getItem('branchData')) || [];
let employeeData = JSON.parse(localStorage.getItem('employeeData')) || [];
let borrowedBooksData = JSON.parse(localStorage.getItem('borrowedBooksData')) || [];

// Save Data to localStorage
function saveData() {
    localStorage.setItem('branchData', JSON.stringify(branchData));
    localStorage.setItem('employeeData', JSON.stringify(employeeData));
    localStorage.setItem('borrowedBooksData', JSON.stringify(borrowedBooksData));
}

// Populate Branch Table
function populateBranchTable() {
    const tableBody = document.querySelector('#branchTable tbody');
    tableBody.innerHTML = '';
    branchData.forEach((branch, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${branch.Branch_no}</td>
            <td>${branch.Manager_id}</td>
            <td>${branch.Branch_address}</td>
            <td>${branch.Contact_no}</td>
            <td>
                <button class="delete-btn" onclick="deleteBranch(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Populate Employee Table
function populateEmployeeTable() {
    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = '';
    employeeData.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.Emp_id}</td>
            <td>${employee.Emp_name}</td>
            <td>${employee.Position}</td>
            <td>${employee.Salary}</td>
            <td>${employee.Branch_no}</td>
            <td>
                <button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Populate Borrowed Books Table
function populateBorrowedBooksTable() {
    const tableBody = document.querySelector('#borrowedBooksTable tbody');
    tableBody.innerHTML = '';
    borrowedBooksData.forEach((record, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.Book_name}</td>
            <td>${record.Borrower_name}</td>
            <td>${record.Borrower_phone}</td>
            <td>${record.Issue_date}</td>
            <td>${record.Return_date}</td>
            <td>${record.Fine_date}</td>
            <td>${record.Fine_amount}</td>
            <td>
                <button class="delete-btn" onclick="deleteBorrowedBook(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Add Branch
function addBranch(event) {
    event.preventDefault();
    const branchNo = document.querySelector('#branchNo').value;
    const managerId = document.querySelector('#managerId').value;
    const branchAddress = document.querySelector('#branchAddress').value;
    const branchContact = document.querySelector('#branchContact').value;

    if (branchNo && managerId && branchAddress && branchContact) {
        branchData.push({ Branch_no: branchNo, Manager_id: managerId, Branch_address: branchAddress, Contact_no: branchContact });
        saveData();
        populateBranchTable();
        document.querySelector('#branchForm').reset();
    } else {
        alert('Please fill all fields to add a branch!');
    }
}

// Add Employee
function addEmployee(event) {
    event.preventDefault();
    const empId = document.querySelector('#empId').value;
    const empName = document.querySelector('#empName').value;
    const empPosition = document.querySelector('#empPosition').value;
    const empSalary = parseFloat(document.querySelector('#empSalary').value);
    const empBranchNo = document.querySelector('#empBranchNo').value;

    if (empId && empName && empPosition && empSalary && empBranchNo) {
        employeeData.push({ Emp_id: empId, Emp_name: empName, Position: empPosition, Salary: empSalary, Branch_no: empBranchNo });
        saveData();
        populateEmployeeTable();
        document.querySelector('#employeeForm').reset();
    } else {
        alert('Please fill all fields to add an employee!');
    }
}

// Add Borrowed Book
function addBorrowedBook(event) {
    event.preventDefault();
    const bookName = document.querySelector('#bookName').value;
    const borrowerName = document.querySelector('#borrowerName').value;
    const borrowerPhone = document.querySelector('#borrowerPhone').value;
    const issueDate = document.querySelector('#issueDate').value;
    const returnDate = document.querySelector('#returnDate').value;
    const fineDate = document.querySelector('#fineDate').value;
    const fineAmount = parseFloat(document.querySelector('#fineAmount').value);

    if (bookName && borrowerName && borrowerPhone && issueDate && returnDate && fineDate && fineAmount) {
        borrowedBooksData.push({
            Book_name: bookName,
            Borrower_name: borrowerName,
            Borrower_phone: borrowerPhone,
            Issue_date: issueDate,
            Return_date: returnDate,
            Fine_date: fineDate,
            Fine_amount: fineAmount
        });
        saveData();
        populateBorrowedBooksTable();
        document.querySelector('#borrowedBooksForm').reset();
    } else {
        alert('Please fill all fields to add a borrowed book record!');
    }
}

// Delete Branch
function deleteBranch(index) {
    branchData.splice(index, 1);
    saveData();
    populateBranchTable();
}

// Delete Employee
function deleteEmployee(index) {
    employeeData.splice(index, 1);
    saveData();
    populateEmployeeTable();
}

// Delete Borrowed Book Record
function deleteBorrowedBook(index) {
    borrowedBooksData.splice(index, 1);
    saveData();
    populateBorrowedBooksTable();
}

// Initial Table Population
document.addEventListener('DOMContentLoaded', () => {
    populateBranchTable();
    populateEmployeeTable();
    populateBorrowedBooksTable();
});

// Add Event Listeners
document.querySelector('#branchForm').addEventListener('submit', addBranch);
document.querySelector('#employeeForm').addEventListener('submit', addEmployee);
document.querySelector('#borrowedBooksForm').addEventListener('submit', addBorrowedBook);
