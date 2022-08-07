// 1-100 Prime - Two Factor; Composite - More Than Two Factor
// 1/1 = 0
// 2/1 = 0; 2/2 = 0 ; Prime
// 3/1 = 0; 2/2 = 0 ; Prime
// 4/1 = 0; 4/2 = 0 ; 4/4 = 0; Composite


function printPrimeNumber(num) {
  let isPrime
  for (let i=2; i <=num; i++ ) {
    isPrime = true;
    for (let j=2; j < i; j++){
      if(i%j === 0) {
        isPrime = false;
        break;
      } 
    }
    if (isPrime === true){
      console.log(i)
    }
  }
  return isPrime
}


