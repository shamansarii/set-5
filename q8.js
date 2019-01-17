//Question(5.8)
//Write a program that counts how many EVEN numbers there are between 7 and 82 and then prints the count.
let count = 0;
for (let i = 7; i <= 82; i++) {
	if (i % 2 == 0) {
		count ++;
	} 
}
console.log(count);
//Answer(14 se 164 tak print hoga)