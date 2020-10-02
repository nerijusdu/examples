let var1 = 'a';
const var2 = 'b'; // can't be changed, preferable option
var var3 = 'c'; // don't use this but it exists

console.log('---------------------------- Loose typing --------------------------');

let variable;
console.log(typeof variable, variable);

variable = null;
console.log(typeof variable, variable);

variable = 7;
console.log(typeof variable, variable);

variable = 'this is a string';
console.log(typeof variable, variable);

variable = true;
console.log(typeof variable, variable);

variable = []; // array
console.log(typeof variable, variable);

variable = {};
console.log(typeof variable, variable);

console.log('---------------------------- Functions --------------------------');

function fn1(arg1) {
  console.log('This is a basic function, arg:', arg1);
}

const fn2 = function(arg1) {
  console.log('This is a function in a variable, arg:', arg1);
}

const fn3 = (arg1) => {
  console.log('This is an arrow function, arg:', arg1);
}

fn1('yeet');
fn2('yeet');
fn3('yeet');

console.log('---------------------------- Scope --------------------------');

let globalVar = ' -This is global scope- ';

function firstFunction() {
    let functionVar = ' -This is inside first function- ';

    function innerFunction() {
      let innerVar = ' -This is inside a function inside a function- ';

      console.log('Logging inside inner funtion ', globalVar, functionVar, innerVar);
    }
    
    console.log('Logging inside first function', globalVar, functionVar); // innerVar is not defined here
    innerFunction()
}

console.log('Logging outside everything   ', globalVar); // functionVar and innerVar are not defined here

firstFunction()
