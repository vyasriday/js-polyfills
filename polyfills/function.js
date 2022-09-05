Function.prototype.customBind = customBind;
Function.prototype.customCall = customCall;
Function.prototype.customApply = customApply;

// bind
function customBind(thisArg, ...args) {
  const originalFunction = this;
  const context = thisArg;
  const symbol = Symbol();
  context[symbol] = originalFunction;
  return function (...arguments) {
    context[symbol](...[...args, ...arguments]);
  };
}

function foo(age, name) {
  console.log({ age, name, this: this });
}

let boundFoo = foo.customBind({ name: 'Hridayesh' }, 1);
console.log(boundFoo('Hridayesh'));

// call
function customCall(thisArg, ...args) {
  const originalFunction = this;
  const context = thisArg;
  const symbol = Symbol();
  context[symbol] = originalFunction;
  context[symbol](...args);
}
function foo(name, age) {
  console.log({ age, name, this: this });
}

foo.customCall({ name: 'XYZ', age: 12 }, 'XZZ', 32);

//apply
function customApply(thisArg, args) {
  const originalFunction = this;
  const context = thisArg;
  const symbol = Symbol();
  context[symbol] = originalFunction;
  context[symbol](...args);
}

function foo(name, age, school) {
  console.log({ age, name, school, this: this });
}

foo.customApply({ name: 'XYZ', age: 12 }, ['XZZ', 32, 'yyy']);
