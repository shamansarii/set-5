//Question(5.15)
//Write a program that prints all prime numbers between 1 and 1000. Each number should be on a new line.
    for(let number = 1; number <= 100; number++){
    	count = 0;
    for (i = 2; i <= number/2; i++) {
    	if(number%i == 0) {
        	count++;
      		break;
      	}
    }
    if(count == 0 && number != 1 ) {
    	console.log(" %d ", number);
    }  
}
//Answer(prime number 2 se 97 tak)