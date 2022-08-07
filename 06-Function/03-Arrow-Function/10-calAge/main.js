const calLeapYear = (year) => {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true
    } else {
      return false
    }
  } 
  else if (year % 4 === 0){
    return true
  } else {
    return false
  }
}


let calDayFromBirthDay = (birtdayYear) => {
  let day = 0
    // 2029 -> 2028 (1 year) 
    // 1995 -> 2028 (25 year)
    for (let i = birtdayYear ; i <= 2020; i++) {
      if (calLeapYear(i)){
        day += 366
      } else {
        day += 365
      }
    }
    return day
}

console.log(calDayFromBirthDay(2020))