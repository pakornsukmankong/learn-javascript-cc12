let grade = prompt("Enter grade")

if (grade === null || grade === '' || grade.trim() === '' || isNaN(grade) ) {
  alert("Invalid Number")
} else {
  if (grade >= 80) {
    alert("A")
  } else if (grade >= 70) {
    alert("B")
  } else if (grade >= 60) {
    alert("C")
  } else if (grade >= 50) {
    alert("D")
  } else {
    alert("F")
  }
}