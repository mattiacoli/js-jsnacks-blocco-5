const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

/* const evenNumbs = nums.filter((num)=>{
  if (num % 2 === 0) {
    return true
  }
  return false
}) */

// shortend version
const evenNumbs = nums.filter((num)=> num % 2 === 0)

// Risultato: [2, 8, 4, 12]
console.log(evenNumbs);
