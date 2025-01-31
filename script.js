/* No. chosen 7. If the number is bigger than 0 will output 1st message, 
if its less than 0 will output 2nd message, if 0 is chosen outputs 3rd message. */
let number = 7; 
if (number > 0) {
    console.log ('The number is greater than 0');

} else if (number < 0) {
    console.log ('The number is not greater than 0');

} else  {
    console.log ('The number is 0');
}

/* The Switch that gives you the day chosen which is no.4( Wednesday). Can put 
any other number between 1-7 and it gives the corresponding day If invaild will 
put out default message.*/
switch (4) {
    case 1:
        console.log('Today is Sunday');
        break;

    case 2:
        console.log('Today is Monday');
        break;

    case 3:
        console.log('Today is Tuesday');
        break;

    case 4:
        console.log('Today is Wednesday');
        break;

    case 5:
        console.log('Today is Thursday');
        break;

    case 6:
        console.log('Today is Friday');
        break;

    case 7:
        console.log('Today is Saturday');
        break;

    default:
    console.log("Today is a day that ends in day");
}

/* Loop starts at 1 and increases unitl it is 5 then stops prints numbers 1-5. */
for (let number = 1; number <= 5; number++) {
    console.log(number);
}

/* While loop starts at 1 and increases until 5 then 
stops prints numbers 1-5 side by side. */
let numbers = 1;
while (numbers <= 5) {
    console.log(numbers, numbers++);
}

/* Do while loop starts at 1 stops at 5 Prints the numbers 1-5 side by side. */
let numbered = 1;
do {
    console.log(numbered, numbered++);
} while (numbered <= 5);

/* Starts at 1-5 stops before 3. */
for (let number = 1; number <= 5; number++) {
    console.log(number);
    if (number === 2) {
        break;
    }
}

/* Starts at 1 goes to 2 skips 3 then continues at 4 till 5 then stops. */
for (let number = 1; number <= 5; number++) {
    if (number === 3){
        continue;
    }
        console.log(number);
}

/* This sets string for globalVar*/
let globalVar = "I'm global!";

/*This sets is so globalVar can be called into the function?*/
testFun(globalVar);

/*This sets the function where you can bring in and access local and global Var together. 
If local var called out outside of the function it will not be accessed*/
function testFun(test){
    let localVar = "I'm local!"
    console.log(test);
    console.log(localVar);
}