// let Animal = function (type) {
//   this.type = type
// }
//
// Animal.prototype.eat = function () {
//   console.log('i am eat food hello')
// }
//
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
//
// console.log(dog)
// console.log(monkey)
//
// 这里monkey.constructor === Animal (构造函数 --> 通过new 构造函数 创建实例对象并初始化)
// monkey.constructor.prototype.eat = function () {
//   console.log('error')
// }
//
// dog.eat()
// monkey.eat()

// es6 新特性
// 语法糖 --> 语法不同 效果一样
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     console.log('i am eat food')
//   }
// }
//
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog)
// console.log(monkey)
// dog.eat()
// monkey.eat()
// console.log(typeof Animal)

// 私有属性通过 get/set来进行设置，下面的age只是个访问入口，并不是真正存数据的变量
// let _age = 4
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   get age () {
//     return _age
//   }
//   set age (val) {
//     if (val < 7 && val > 4) {
//       _age = val
//     }
//   }
//   eat () {
//     console.log('i am eat food')
//   }
// }
// let dog = new Animal('dog')
// console.log(dog.age)
// dog.age = 8
// console.log(dog.age)
// console.log(dog._age)
//
// let Animal = function (type) {
//   this.type = type
// }
//
// 实例方法
// Animal.prototype.eat = function () {
//   Animal.walk()   -- 静态方法引用
//   console.log('i am eat food hello')
// }
//
// 静态方法
// Animal.walk = function () {
//   console.log('i am walking')
// }
// let dog = new Animal('dog')
// dog.eat()

// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     Animal.walk()
//     console.log('i am eat food')
//   }
//   static walk () {
//     console.log('i am walking')
//   }
// }
// let dog = new Animal('dog')
// dog.eat()
// let Animal = function (type) {
//   this.type = type
// }
//
// Animal.prototype.eat = function () {
//   Animal.walk()
//   console.log('i am eat food hello')
// }
//
// Animal.walk = function () {
//   console.log('i am walking')
// }
//
// es5 继承
// let Dog = function () {
//   // 初始化父类的构造函数
//   Animal.call(this, 'dog')
//   this.run = function () {
//     console.log('i can run')
//   }
// }
// // 值类型，引用类型
// Dog.prototype = Animal.prototype
//
// let dog = new Dog('dog')
// dog.eat()
class Animal {
  constructor (type) {
    this.type = type
  }
  eat () {
    Animal.walk()
    console.log('i am eat food')
  }
  static walk () {
    console.log('i am walking')
  }
}

// es6 继承
class Dog extends Animal {
  // 显式，隐式
  constructor (type) {
    super(type)
    this.age = 2
  }
}

let dog = new Dog('dog')
dog.eat()
