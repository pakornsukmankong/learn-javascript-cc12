let user = prompt("Enter your username")

if (user === null || user === "") {
  user = "Guest"

} else if (user === "codecamp") {
  let passWord = prompt("Enter your password")
  if (passWord === "123456") {
    user === "codecamp"
  } else {
    alert("Wrong Password")
    user = "Guest"
  }
} else {
  user = "Guest"
}

alert(`Welcome ${user}`)