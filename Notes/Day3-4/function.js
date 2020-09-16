// 1 : Function declaration : -

function add(num1, num2) {
  let result = num1 + num2;
  return result;
}

let res = add(30);
console.log(res);

// 2 : Function expression : -

const add = function (num1, num2) {
  let result = num1 + num2;
  console.log(result);
};

// 3 : Normal function : -

function doSomething(name) {
    console.log("hello " + name);
  }
  
  // 4 : Arrow function : -
  doSomething = (name) => {
    console.log("hello " + name);
  };
  
  doSomething("saurabh");