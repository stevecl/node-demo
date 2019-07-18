var foo = function(){
  var a = 3, b = 5;
  debugger;
  var bar = function(){
    var b = 7, c = 11;
    a += b + c;
    console.log(1,a,b,c)
    debugger;
  }
  bar();
  debugger;
}
foo();

// cont repl node debug