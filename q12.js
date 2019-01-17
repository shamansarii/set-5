//Question(5.12)
//Write a program that prints numbers from 1 to 1000. All numbers should be printed in the same line separated by comma and space (like this: 1, 2, 3).
let sentence = "";
	for(let i = 1; i <= 1000; i++) {
    	sentence += "" + i + ", " ;
	}   
console.log(sentence);
// answer(1,2,3,....1000)