"use strict";

class studentsInfo {
  constructor(name, adress, phone, course) {
    this.name = name;
    this.adress = adress;
    this.phone = phone;
    this.course = course;
  }

  getInfo() {
    return (
      "Name:" +
      this.name +
      "\n" +
      "Adress:" +
      this.adress +
      "\n" +
      "Phone:" +
      this.phone +
      "\n" +
      "Course:" +
      this.course
    );
  }
}

const student1 = new studentsInfo(
  "John Benson",
  "High Park 36",
  "(507) 883-3567",
  "Geography"
);

const student2 = new studentsInfo(
  "Rico Stivens",
  "Down Park 25",
  "(607) 663-3787",
  "Biology"
);

const student3 = new studentsInfo(
  "Samantha Robinson",
  "Middle Park 15",
  "(707) 773-4367",
  "Art"
);

console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());
