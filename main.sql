-- Create a Database called 'Library' 
CREATE DATABASE library;
USE library;
-- Create table "Branch"
CREATE TABLE Branch (
    Branch_no VARCHAR(10) PRIMARY KEY,
    Manager_id VARCHAR(10),
    Branch_address VARCHAR(50),
    -- Address can exceed 30 characters
    Contact_no VARCHAR(15)
);
DESC Branch;
-- Create table "Employee"
CREATE TABLE Employee (
    Emp_id VARCHAR(10) PRIMARY KEY,
    Emp_name VARCHAR(50),
    -- Employee name might be longer than 30 characters
    Position VARCHAR(30),
    Salary DECIMAL(10, 2),
    Branch_no VARCHAR(10),
    -- Added Branch_no for future FK reference
    FOREIGN KEY (Branch_no) REFERENCES Branch(Branch_no)
);
DESC Employee;
-- Create table "Customer"
CREATE TABLE Customer (
    Customer_Id VARCHAR(10) PRIMARY KEY,
    Customer_name VARCHAR(50),
    -- Increased to accommodate longer names
    Customer_address VARCHAR(50),
    -- Address field expanded for flexibility
    Reg_date DATE
);
DESC Customer;
-- Create table "Books"
CREATE TABLE Books (
    ISBN VARCHAR(25) PRIMARY KEY,
    Book_title VARCHAR(80),
    Category VARCHAR(30),
    Rental_Price DECIMAL(10, 2),
    Status ENUM('Yes', 'No'),
    Author VARCHAR (50),
    Publisher VARCHAR (50)
);
DESC Books;
-- Create table "IssueStatus"
CREATE TABLE IssueStatus (
    Issue_Id VARCHAR(10) PRIMARY KEY,
    Issued_cust VARCHAR(10),
    Issued_book_name VARCHAR(80),
    Issue_date DATE,
    Isbn_book VARCHAR(25),
    FOREIGN KEY (Issued_cust) REFERENCES Customer(Customer_Id) ON DELETE CASCADE,
    FOREIGN KEY (Isbn_book) REFERENCES Books(ISBN) ON DELETE CASCADE
);
DESC IssueStatus;
-- Create table "ReturnStatus"
CREATE TABLE ReturnStatus (
    Return_id VARCHAR(10) PRIMARY KEY,
    Return_cust VARCHAR(10),
    Return_book_name VARCHAR(80),
    Return_date DATE,
    Isbn_book2 VARCHAR(25),
    FOREIGN KEY (Return_cust) REFERENCES Customer(Customer_Id) ON DELETE CASCADE,
    FOREIGN KEY (Isbn_book2) REFERENCES Books(ISBN) ON DELETE CASCADE
);
DESC ReturnStatus;
-- Show tables
SHOW TABLES;
-- Insert values into each table
INSERT INTO Branch
VALUES ('B001', 'M101', '123 Main St', '+919099988676'),
    ('B002', 'M102', '456 Elm St', '+919099988677'),
    ('B003', 'M103', '789 Oak St', '+919099988678'),
    ('B004', 'M104', '567 Pine St', '+919099988679'),
    ('B005', 'M105', '890 Maple St', '+919099988680');
SELECT *
FROM Branch;
INSERT INTO Employee
VALUES ('E101', 'John Doe', 'Manager', 60000.00, 'B001'),
    ('E102', 'Jane Smith', 'Clerk', 45000.00, 'B001'),
    (
        'E103',
        'Mike Johnson',
        'Librarian',
        55000.00,
        'B001'
    ),
    (
        'E104',
        'Emily Davis',
        'Assistant',
        40000.00,
        'B001'
    ),
    (
        'E105',
        'Sarah Brown',
        'Assistant',
        42000.00,
        'B002'
    ),
    (
        'E106',
        'Michelle Ramirez',
        'Assistant',
        43000.00,
        'B003'
    ),
    (
        'E107',
        'Michael Thompson',
        'Manager',
        62000.00,
        'B002'
    ),
    (
        'E108',
        'Jessica Taylor',
        'Clerk',
        46000.00,
        'B002'
    ),
    (
        'E109',
        'Daniel Anderson',
        'Librarian',
        57000.00,
        'B002'
    ),
    (
        'E110',
        'Laura Martinez',
        'Assistant',
        41000.00,
        'B004'
    ),
    (
        'E111',
        'Christopher Lee',
        'Manager',
        65000.00,
        'B003'
    );
SELECT *
FROM Employee;
INSERT INTO Customer
VALUES (
        'C101',
        'Alice Johnson',
        '123 Main St',
        '2021-05-15'
    ),
    ('C102', 'Bob Smith', '456 Elm St', '2021-06-20'),
    (
        'C103',
        'Carol Davis',
        '789 Oak St',
        '2021-07-10'
    ),
    (
        'C104',
        'Dave Wilson',
        '567 Pine St',
        '2021-08-05'
    ),
    (
        'C105',
        'Eve Brown',
        '890 Maple St',
        '2021-09-25'
    ),
    (
        'C106',
        'Frank Thomas',
        '234 Cedar St',
        '2021-10-15'
    ),
    (
        'C107',
        'Grace Taylor',
        '345 Walnut St',
        '2021-11-20'
    ),
    (
        'C108',
        'Henry Anderson',
        '456 Birch St',
        '2021-12-10'
    ),
    (
        'C109',
        'Ivy Martinez',
        '567 Oak St',
        '2022-01-05'
    ),
    (
        'C110',
        'Jack Wilson',
        '678 Pine St',
        '2022-02-25'
    );
SELECT *
FROM Customer;
-- Correct insertion for Books
UPDATE Books
SET Status = 'No'
WHERE ISBN IN ('978-0-307-58837-1', '978-0-141...');