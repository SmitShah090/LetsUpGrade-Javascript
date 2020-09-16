// 1 : numbers :

let num = 5;
let num2 = 2;
// Arithmatic operators

//+ - * / % **

console.log(num + num2);
console.log(num2 - num);
console.log(num2 * num);
console.log(num / num2);
console.log(num % num2);
console.log(num ** num2);

// 2 : Strings :

let name = "Thor";
let weapon = "Stormbreaker";
let age = 1500;

let data1 = name + " has " + weapon;

// templating way of concatinating strings :

let data2 = `superhero ${name} has ${weapon} and
his age is ${age}`;

let data3 = `<h1>${name}</h1>`;

console.log("length is " + weapon.length);

console.log(weapon.replace("r", "a"));

let index = weapon.indexOf("r");
console.log(index);

let sub = weapon.substr(weapon.length - 3, 3);

let data = "hello";

console.log(data.substr(1, data));

substr(0,)

// 3 : Arrays :

// collection of elements of same type

let data4 = ["laptop", "mouse", "keyboard", "monitor", "camera", "mobile"];
data4.push("mic");

let numbers = [23, 45, 67, 89];

for (let i = 0; i < data4.length; i++) {
  console.log(data4[i]);
}

data4.forEach(function (a) {
  console.log(a);
});

// 4 : Control statements :

// booleans & conditional statements
// true & false : 

//==,<=,>=,!=,&&,||

let grade = 90;
console.log(a == b);
console.log(a <= b);

if (grade >= 50 && grade < 70) {
  console.log("second class");
} else if (grade >= 70 && grade <= 100) {
  console.log("first class");
} else if (grade >= 35 && grade < 50) {
  console.log("third class");
} else {
  console.log("fail");
}

// 5 : Null & undefined :

let data = null;
console.log(data);

let number = Number("sghf");
console.log(number);