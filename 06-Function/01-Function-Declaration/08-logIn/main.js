function login(username,password) {
  if (username === "admin" && password === "P@ssw0rd") {
    return "Login Successfully"
  } else {
    return "Something Wrong"
  }
}

console.log(login("admin","P@ssw0rd"))