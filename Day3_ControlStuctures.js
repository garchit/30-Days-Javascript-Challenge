// Activity 1 if else statements 

let n = 0

if(n > 0){
    console.log("N is Positive")
}
else if(n == 0){
    console.log("N is 0")
}
else{
    console.log("N is odd")
}


// Task 2 


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter your age: ', (age) => {
//     if (isNaN(age)) {
//         console.log('Please enter a valid number.');
//     } else {
//         age = parseInt(age);
//         if (age >= 18) {
//             console.log('You are eligible to vote.');
//         } else {
//             console.log('You are not eligible to vote.');
//         }
//     }
//     rl.close();
// });


age = 33
if(age >= 18){
    console.log("eligible for voting")
}
else{
    console.log("Not eleigible")
}

// Activity 2 

let x , y , z 
x = 0
y = 2
z = 3

if(x > y){
    if(x > z){
        console.log("x is greater")
    }
    else{
        console.log("z is greater")
    }
}
else{
    if(y > z){
        console.log("y is greater")
    }
    else{
        console.log("z is greater ")
    }
}

// Activity 3 

switch (new Date().getDay() + 1) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
       day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
  }
  console.log(day)

// Activity 4 

let score = 99

switch(true){
    case (score > 90):
         console.log("A")
         break;

    case (score > 80 && score <= 90):
        console.log("B")
        break;
    
    case (score > 70 && score <= 80):
        console.log("C")
        break;
    
    case (score > 60 && score <= 70):
        console.log("D")
        break;
    
    case (score < 60):
        console.log("F")
        break;

    default:
        console.log("invalid value");
}

// console.log(grade)


//task 6

let a = 4;
let rs=(a%2==0)?"even":"odd";
console.log(rs);

//task 7
// task 7
const year=2024

if((year%4==0)&&(year%100!=0)||(year%400==0)){
    console.log("Year is leap year");
}else{
    console.log("Year is not leap year");
}


