/* // 全局变量
var abc = 1234
// 非全局变量，是全局对象window的属性abcd，window.abcd === abcd(window可省略不写)
abcd = 2345
// 函数中的ab是非全局变量，也是window的属性
function test() {
    ab = 45
}
test() */

// 函数作用域
// function test () { // -->   作用域链 向上查找
//   var a = 3
//   function test2 () {
//     var b = 4
//     return a + b
//   }
//   return test2
// }

// function test () {
//   var a = 3
//   if (a === 3) {
//     let b = 4 // 块级作用域, 不会变量提升
//     console.log('abc')
//     console.log('abcddd')
//   } else {
//     console.log('abcd')
//   }
//   console.log(b) // b is not defined
//   return a + 4
// }
// console.log(test())
// console.log(a) // a is not defined

// 动态作用域  this
window.a = 3
function test () {
  console.log(this.a)
}
test() // 3
test.bind({ a: 100 })() // 100
