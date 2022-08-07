// INPUT: Object ที่ใช้ตรวจสอบ
// OUTPUT: true === object ว่าง ไม่มี key , false === object มีอย่างน้อย  1 key

function isEmptyObject(obj) {

  // for loop when object has > 1 key
  for (let key in obj) {
    return false
  }
  // 0 key 
  return true
}

const user_1 = {name: "CC12"}
const user_2 = {name: "CodeCamp12", cohort:12}
const user_3 = {}

console.log(isEmptyObject(user_1))
console.log(isEmptyObject(user_2))
console.log(isEmptyObject(user_3))
console.log(isEmptyObject({name: "CC", age:12}))