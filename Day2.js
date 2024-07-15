// DAY 2 Operators 
//  Arithematic Operators 
x = 10
y = 10

let add = x + y 
console.log(add)

let sub = x - y
console.log(sub) 

let product = x * y
console.log(product) 

let Division = x / y
console.log(Division)

let rem = x % y
console.log(rem)

// Assignment Operators 

x+=5
console.log(x)
x-=5
console.log(x)

// Comparison Operators 
console.log(x < 20)

// logical 
if((x < 20) && (x > 5)){
    console.log("Value of x " , x)
}
let name = "qwerty"
if(name.length < 0 || name.length > 0){
    console.log("name of the ",name)
}

// Ternary Operator 
name == "qwerty" ? console.log("yes") : console.log("no ")
