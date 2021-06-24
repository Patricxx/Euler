function sumFibs(num) {
	let previous = 0;
	let current = 1;
	let sum = 0;
	let next;
      
	for(current; current <= num;){
	  next = current + previous;
	  previous = current;
      
	  if(current % 2 === 0) {
	    sum += current;
	  }
      
	  current = next;
	}
      
	return sum;
      }
      
      sumFibs(4000000);