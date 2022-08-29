
//1.

//let studentRecords = [
 //   { name: "John", id: 123, marks: 98 },
 //   { name: "yaga", id: 101, marks: 45 },
  //  { name: "Wick", id: 200, marks: 75 },
   // { name: "Baba", id: 115, marks: 23 },
  //];
  
 // let names = [];
  
  //for (let i = 0; i <= studentRecords.length; i++) {
  
  //  names.push(studentRecords[i].name.toUpperCase());
 // }
  
 // console.log(names);

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let names = [];
  
  for (let i = 0; i < studentRecords.length; i++) {
  
    names.push(studentRecords[i].name.toUpperCase());
  }
  
  console.log(names);


  //////////////////////////////////////////////////////////////////////////////////////////


//2.

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let students = [];
  
  for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks > 50) {
      students.push(Object.assign(studentRecords[i]));
    }
  }
  
  console.log(students);

  //3

  let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let students = [];
  
  for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].id > 120 && studentRecords[i].marks > 50) {
      students.push(Object.assign(studentRecords[i]));
    }
  }
  
  console.log(students);

  //4

  let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let total = 0;
  
  for (let i = 0; i < studentRecords.length; i++) {
    total += studentRecords[i].marks;
  }
  
  console.log(total);

  //5

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

let names = [];

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks > 50) {
    names.push(studentRecords[i].name);
  }
}

console.log(names);

//6

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

let total = 0;

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].id > 120) {
    total += studentRecords[i].marks;
  }
}

console.log(total);

//7

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

let totalMarks = 0;

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks < 50) {
    totalMarks += studentRecords[i].marks + 15;
  }
}

console.log(totalMarks);

//8

const student1 = {
  name: "Sanjeev",
  class: 12,
  rollNo: 23,
};

const student2 = {
  name: "Sans",
  class: 9,
  rollNo: 20,
};
const student3 = {
  name: "Arpit",
  class: 5,
  rollNo: 5,
};
const student4 = {
  name: "Rohit",
  class: 8,
  rollNo: 45,
};
const student5 = {
  name: "Suman",
  class: 12,
  rollNo: 26,
};
const student6 = {
  name: "John",
  class: 1,
  rollNo: 10,
};

let students = [];

const studentRecords = (student) => {
  students.push(student);
};

studentRecords(student1);
studentRecords(student2);
studentRecords(student3);
studentRecords(student4);
studentRecords(student5);
studentRecords(student6);

console.log(students);
