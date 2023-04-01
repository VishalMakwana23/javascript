console.log("----------- closures ----------------");

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function abc() {
  let a = 10;
  return function xyz() {
    console.log("a", a);
  };
}

const clos = abc();
clos();

// Uses of Closures :

// - module design CanvasPattern
// - Curring
// - Function like once
// - memoize
// - Maintaining state in asy6nc world
// - setTimeouts
// - iterators
