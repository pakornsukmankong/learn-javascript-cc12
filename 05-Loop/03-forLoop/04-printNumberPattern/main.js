let num = 8;
let store = "";


for (i=0; i < num; i++) {
  // console.log(`I = ${i} \n`)
  // console.log("================== \n")
  for (j=0; j <= i; j++) {
    // console.log(`\t J = ${j} \n`)
    // console.log("----------------- \n")
    store += `${j+1} `
  }
  store += ("\n")
}

// console.log(store.trim())

