// 1. let声明的变量具有块级作用域的
// 2. let声明的变量不可以用全局对象（window）的属性访问
// 3. let声明的变量不可以重复定义的
// 4. let声明的变量不可以提升
// 5. const具有let所有特性
// 6. const必须初始化的并赋值，且不可以修改

// {
//   let a = 1
//   console.log(a)
// }
// // console.log(a)  --> a is not defined

// var b = 3
// let c = 4

// console.log(b, c)
// console.log(window.b, window.c) // let声明的变量不能当作window的属性来访问

// var b = 4
// console.log(b)

// // let c=5      -- let声明的变量不可以重复定义
// // console.log(c);

// const a = 2
// // a = 3 --> 不可以赋值
// // const b --> 不可以先声明后初始化, 必须初始化的时候赋值
// // b=3
// console.log(a)

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)   -->  3（输入3次）
// }

// 利用闭包实现按i的顺序来输出
// for (var i = 0; i < 3; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000)
//   })(i)
// }

// 利用块级作用域实现按i的顺序来输出
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
// }

// console.log(a)   -> 报错，不允许变量提升
// let a = 1