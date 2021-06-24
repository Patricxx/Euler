let vorigNR = 0;
let huidigNR = 1;
let Som = 0;
let volgendNR;

//for loop
for (i = 1; i < 100; i++) {
  volgendNR = huidigNR + vorigNR;
  vorigNR = huidigNR;
  huidigNR = volgendNR;

  if (huidigNR % 2 === 0 && huidigNR < 4000000) {
    Som += huidigNR;
  }
}
console.log(Som);  //4613732

//-------------------------------------

// function sumFibs(num) {
// 	let previous = 0;
// 	let current = 1;
// 	let sum = 0;
// 	let next;
      
// 	for(current; current <= num;){
// 	next = current + previous;
// 	previous = current;
      
// 	if(current % 2 === 0) {
// 	sum += current;
// 	}
// 	current = next;
// 	}
// 	return sum;
//      }
//      sumFibs(4000000); // return 4613732

//-------------------------------------

let fib = [0, 1]
        let sum = 0;
        while (true) {
            let i = fib[fib.length - 2] + fib[fib.length - 1]
            fib.push(i)
            if (i % 2 === 0) sum += i
            if (i >= 4000000) break;
        }
        console.log(sum);


	let series = [0, 1]

//-------------------------------------

for (i=0; i<50; i++) {
    nextNumber = series[i] + series[i+1]
    series.push(nextNumber)
}
console.log(series)

let evenFibonacci = []

for (j=0; j<series.length; j++) {
    if(series[j] % 2 === 0 && series[j] <= 4000000) {
        evenFibonacci.push(series[j])
    }
}

const sum = evenFibonacci.reduce((a, b) => a + b, 0);
console.log(sum)