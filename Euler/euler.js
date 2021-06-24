// let sum = 0;
// for (let x = 0; x < 1000; x++)
// {
//     if (x % 3 === 0 || x % 5 === 0)
//     {
//        sum += x;
//     }
// }
// console.log(sum);

//=============

let sum=0, i=2;
while(i++ , i <1000) { sum += (i % 3 && i % 5) ? 0 : i; } 
console.log(sum);

//=============

// for(
//     let sum = 0, f1 = 1, f2 = 2, next;
//     f2 < 4E6;
//     f2 & 1 || (sum += f2), next = f1 + f2, f2 = (f1 = f2, next)
// );
// console.log(sum);

// //==============

// sum = 0;
// for(i = 1 ; i < 1000 ; i++){
// if((i % 3 === 0) || (i % 5 ===0)){
// sum += i;
// }
// }

// //==============

// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }
// console.log('Sum: %d', sum);