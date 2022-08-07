let role = prompt("Enter Your Role")

const checkPermission = (role,cb1,cb2) => {
  if (role === "ADMIN") {
    cb1()
  } else {
    cb2()
  }
}

function roleAdmin()  {
  alert("ACCESS")
}

function notRoleAdmin() {
  alert("ACCESS DENIED")
}

checkPermission(role,roleAdmin,notRoleAdmin)