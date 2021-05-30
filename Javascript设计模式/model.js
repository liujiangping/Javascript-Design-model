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

var basketModule = (function () {
  // privates

  var basket = [];

  function doSomethingPrivate() {
    //...
  }

  function doSomethingElsePrivate() {
    //...
  }

  // Return an object exposed to the public
  return {
    // Add items to our basket
    addItem: function (values) {
      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    // Public alias to a  private function
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal: function () {
      var q = this.getItemCount(),
        p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    },
  };
})();
