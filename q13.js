//Question(1.13)
//Write a program that prints all EVEN numbers between 1 and 99. All numbers should be printed in the same line separated by comma and space (like this: 2, 4, 6).
let sentence = "";
	for(let i = 1; i <= 99; i++) {
    	if(i%2==0) {
        	sentence += "" + i + ", " ;
    	}
    }   
console.log(sentence);
// answer(2,4,6,......98)