Function.prototype.customBind = customBind;
Function.prototype.customCall = customCall;
Function.prototype.customApply = customApply;

// bind
function customBind(thisArgs, ...args) {
  const originalFunction = this;
  const context = thisArgs;
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
function customCall() {}
//apply
function customApply() {}
