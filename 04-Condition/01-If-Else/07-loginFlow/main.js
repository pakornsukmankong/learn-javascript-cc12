let userName = prompt("Insert Your username")
let passWord = prompt("Insert Your password")

if ( userName === null || userName.trim() === "") {
  alert("username is required")
} else if (passWord === null || passWord.trim() === ""){
  alert("password is required")
} else {
  if ( (userName === "admin" && passWord === "1234") || (userName === "john" && passWord === "qwerty") ) {
    alert(`Hello ${userName}`)
  } else {
    alert("Invalid username and password")
  }
}  