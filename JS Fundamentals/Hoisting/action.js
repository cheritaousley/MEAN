var foo = "bar";
function magic() {
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);


var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic() {         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted--var gets hoisted
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}
foo = "bar";              // here, we assign a value to the global 'foo'--declares variable down here instead
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo


//standalone functions-starts with the keyword 'function' and is followed by the unique identifier we give it//
//standalone functions also get hoisted