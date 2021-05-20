/*
构造器模式:构造器是一个当新建对象的内存被分配后，用来初始化该对象的一个特殊函数
*/

// 基本构造器
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());

// 使用“原型”的构造器
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// 注意这里我们使用Note here that we are using Object.prototype.newMethod 而不是
// Object.prototype ，以避免我们重新定义原型对象
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

// 使用:

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());
