
// 기명 함수
let add = function (a, b) {
  return a + b
}


let add10 = function (a, b) {
  return a + b
}
console.dir(add10)


let add20 = function (a, b) {
  return a + b
}
console.dir(add20)


// 익명 함수
console.dir(function (a, b) {
  return a + b
})


(function (a, b) {
  return a + b
})