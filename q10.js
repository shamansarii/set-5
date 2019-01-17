//Question(1.10)
//Write a program that asks user to enter a "START number", a "STOP number" and a "JUMP number" and prints the numbers from START to STOP in increments of JUMP. Each number should be printed in a new line.
//Create 3 input elements and 1 button called "Print". Label the first input element as "START", the second input element as "STOP" and the third input element as "JUMP". 
//.Example # 1 -  lets say the user enters 4 in START, 33 in STOP,  and 3 in JUMP and clicks the PRINT button. The program should print the numbers 4, 7, 10, 13, 16, 19, 22, 25, 28, 31
//.Example # 2 -  lets say the user enters 4 in START, 33 in STOP,  and 5 in JUMP and clicks the PRINT button. The program should print the numbers 4, 9, 14, 19, 24, 29
function bhtPrint() {
   let start = parseInt(document.querySelector('#start').value);   
   let stop = parseInt(document.querySelector('#stop').value);
   let jump = parseInt(document.querySelector('#jump').value);
   let body = document.querySelector('body');
   body.innerHTML= "<input id='start' placeholder='Start' type='number'> <input id='stop' placeholder='Stop' type='number'> <input id='jump' placeholder='Jump' type='number'> <button onclick='bhtPrint()'>Print Number</button>"
	for(let i = start; i <= stop; i += jump) {
		body.innerHTML= body.innerHTML + "<p>" +  i+ "</P>";
    }
}
//Answer(start value se stop value dega or start value se stop value ke beach jump bhi kare ga)