function test (a, b) {
    console.log(a);
    // function(){}
    console.log(b);
    // undefined
  
    var b = 234;
    console.log(b);
    // 234
    a = 123;
  
    console.log(a);
    // 123
    function a () {}
  
    var a;
    b = 234;
    var b = function () {}
    console.log(a);
    // 123
    console.log(b);
    // function() {}
  }
  
  test(1);