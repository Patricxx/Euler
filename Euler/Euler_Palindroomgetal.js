function Palindrome(){

	let arr = [];    
	for(let i = 999; i>100; i--){
	    for(let j = 999; j>100; j--){
		let yes = j*i;
		if(isPalindrome(yes)){
		    arr.push(j * i);
		}
	    }
	}
    
	return Math.max.apply(Math, arr);
    }
    
    function isPalindrome(i){
	return i.toString() == i.toString().split("").reverse().join("");
    }
    
    console.log(Palindrome());


//-----------------------------------


function findHighestPalindroom() {
	let highestPalindroom = 0;
	for (let i = 999; i > 100; i--) {
	    for (let j = 999; j > 100; j--) {
		const result = i * j; // first calculation is 999 * 999 = 998001
		const resultInString = result.toString(); // convert to string to be able to loop through each number "998001" 

		//find palindroom
		let isPalindroomNumber = true;
		for (let k = 0; k < resultInString.length - 1; k++) {
		    // compare  two numbers to see if it's the same. If it's not the same, than it's not a palindroom.
		    if (!(resultInString[k] === resultInString[resultInString.length - 1 - k])) {
			isPalindroomNumber = false;
			break;
		    }
		}

		if (isPalindroomNumber && highestPalindroom < result) {