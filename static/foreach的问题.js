/* forEach在拿到数组每个元素时，是复制过来的，如果数组元素是基本类型，
那复制过来的数据和原来的没有任何关系，毕竟基本数据类型是保存至栈内存中的，
但引用数据类型就不一样了，他复制过来的是引用（地址），也就是引用类型保存在堆内存中的地址，
实际上就是改变了原数组本身！ */

// 基本数据类型
let arr = [1, 2, 3, 4]
// undefined
arr.forEach(e => {
  e += 1
})
// undefined
console.log(arr)
// (4) [1, 2, 3, 4]

// 引用数据类型
let objarr = [
  { a: 1 },
  { a: 2 },
  { a: 3 }
]
// undefined
objarr.forEach(e => {
  e.a = 99
})
// undefined
console.log(objarr)
// [{a:99},{a:99},{a:99}]

// forEach如何改变元素为基本数据类型的数组
let myArr = [1, 2, 3, 4]
// undefined
myArr.forEach((e, i, arr) => {
  arr[i] += 1
})
// undefined
console.log(myArr)
// (4) [2, 3, 4, 5]
