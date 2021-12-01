글씨 거꾸로 출력하기

let s = 'hello world'

for (let i = s.length; i >= 0; i--) {
  console.log(s[i])
}


let temp = '';
for (let i = 0; i < s.length; i++) {
  temp = s[i] + temp
}
console.log(temp)


let i = '*';
let result = '';
for (let i = 0; i < 5; i++){
  result = i;
}
console.log(result);



// let r = 0;
// let s = [10,20,30,10,20,30,40,10]

for (let i = 0; i < s.length; i++) {
  r = (s[i] + r) ; 
}
console.log(r/8)

// let 평균 = 21.25;
// let 분산 = 0;
// let 점수 = [10,20,30,10,20,30,40,10];

// for (let i of 점수 ) {
//   분산 += ( i - 평균 ) **2;
// }

// console.log(분산);


