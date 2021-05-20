/*
模块化模式:有助于保持应用项目的代码单元既能清晰地分离又有组织
*/

// 模块自实现
var testModule = (function () {
  var counter = 0;

  return {
    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    },
  };
})();


// 带命名空间
var myNamespace = (function () {
  var myPrivateVar, myPrivateMethod;

  myPrivateVar = 0;

  myPrivateMethod = function (foo) {
    console.log(foo);
  };

  return {
    myPublicVar: "foo",

    myPublicFunction: function (bar) {
      myPrivateVar++;

      myPrivateMethod(bar);
    },
  };
})();
