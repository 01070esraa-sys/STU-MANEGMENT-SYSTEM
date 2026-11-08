class StudentInfo {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  calculateTotal() {
    return this.grades.reduce((total, mark) => total + mark, 0);
  }

  calculateAverage() {
    return this.calculateTotal() / this.grades.length;
  }

  getGrade() {
    let avg = this.calculateAverage();

    if (avg >= 90) {
      return "A";
    } else if (avg >= 80) {
      return "B";
    } else if (avg >= 70) {
      return "C";
    } else if (avg >= 60) {
      return "D";
    } else if (avg >= 50) {
      return "E";
    } else {
      return "F";
    }
  }

  getStatus() {
    let avg = this.calculateAverage();

    return avg >= 50 && this.attendance >= 75 ? "Passed" : "Needs Review";
  }
}

let students = [
  new StudentInfo(1, "Esraa", [95, 90, 88], 95),
  new StudentInfo(2, "Hana", [44, 46, 45], 90),
  new StudentInfo(3, "Adam", [70, 75, 72], 85),
  new StudentInfo(4, "Khaled", [42, 45, 48], 80),
];

console.log("===== Students Reports =====");

students.forEach(function (student) {
  console.log("--------------------");

  console.log("ID:", student.id);
  console.log("Name:", student.name);
  console.log("Average:", student.calculateAverage().toFixed(2));
  console.log("Grade:", student.getGrade());
  console.log("Status:", student.getStatus());
});

let struggling = students.filter(function (student) {
  let avg = student.calculateAverage();

  return avg >= 40 && avg <= 49;
});

let mercyResults = struggling.map(function (student) {
  let avg = student.calculateAverage();

  return {
    name: student.name,
    oldAverage: avg,
    newAverage: avg + 5,
  };
});

let totalAverages = mercyResults.reduce(function (total, student) {
  return total + student.newAverage;
}, 0);

let mercyAverage = 0;

if (mercyResults.length !== 0) {
  mercyAverage = totalAverages / mercyResults.length;
}

console.log("===== Mercy Results =====");

console.log(mercyResults);

console.log("Mercy Average:", mercyAverage.toFixed(2));
