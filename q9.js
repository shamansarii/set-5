//Question(5.9)
//Write a program that asks user to enter a "START number" and a "STOP number" and prints the numbers from START to STOP. Each number should be printed in a new line.
//.Create 2 input elements and 1 button called "Print". Label the first input element as "START" and the second input element as "STOP". Now, lets say the user enters 4 in START and 133 in STOP and clicks the PRINT button. The program should print numbers from 4 - 133.
function bhtPrint() {
  let start = parseInt(document.querySelector('#start').value);   
  let stop = parseInt(document.querySelector('#stop').value);
  let body = document.querySelector('body');
  body.innerHTML= "<input id='start' placeholder='Start' type='number'> <input id='stop' placeholder='Stop' type='number'> <button onclick='bhtPrint()'>Print Number</button>"
	for(let i = start; i <= stop; i++) {
      body.innerHTML= body.innerHTML + "<p>" + i + "</P>";
  	}
}
//Answer(start value se stop value tak print kare ga)