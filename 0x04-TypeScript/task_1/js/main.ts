// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows extra properties
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define function type
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // J. Doe

// Class constructor interface
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Class methods interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement StudentClass
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example
const studentA = new StudentClass("Mary", "Jane");
console.log(studentA.displayName()); // Mary
console.log(studentA.workOnHomework()); // Currently working

