// Define Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create 2 students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Abuja"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Vanilla JS to render a table
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Loop through students and append rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append table to the DOM
document.body.appendChild(table);
