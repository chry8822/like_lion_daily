let result = 0;

for (let x = 0; x < 101; x++) {
  // console.log(x)
  if (x % 3 == 0 || x % 5 == 0) {
    result += x // result = result + x
  }
 
}

console.log(result);

-------------------------------------------------------------------------------------

1-100까지 더하기
let result = 0;
​
for (let i = 0; i < 101; i++){
    result += i;
}
console.log(result);


-------------------------------------------------------------------------------------

짝수 더하기
let result = 0;
​
for (let i = 0; i < 101; i += 2){
    result += i;
}
console.log(result);


-------------------------------------------------------------------------------------

이중 포문 구구단 출력하기

for(let i = 2; i < 10; i++){
    for(let j = 2; j< 10; j++){
    console.log(`${i} x ${j} = ${i*j}`)
 }
}


-------------------------------------------------------------------------------------



let text = '';
let count = 0;

for (let i = 0; x < 101; x++) {
  text += i
}

console.log(text);

for (let i = 0; i < text.length i++) {
  if (text[i] == '8') {
    count += 1;
  }
}

console.log(count);


-------------------------------------------------------------------------------------


최소값 구하기
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 98];
let temp = sample[0]


for (let i = 0; i < sample.length ; i++) {
    if (temp > sample[i]){
        temp = sample[i];
    }
}


console.log(temp);

-------------------------------------------------------------------------------------

최대값 구하기/

let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 98];
let temp = sample[0]


for (let i = 0; i < sample.length ; i++) {
    if (temp < sample[i]){
        temp = sample[i];
    }
}

-------------------------------------------------------------------------------------


let text = 'javascript';

for (let i = 1; i < text.length; i ++){
  console.log(text[i-1], text[i+1]);
}

-------------------------------------------------------------------------------------

let x = [1, 3, 4, 8, 13, 17, 20];
let temp = x[1] - x[0]

for(let i =1; i < x.length; i++) {
    if (temp > (x[i+1] - x[i])){
    }
    console.log(x[i], x[i + 1]);
}


let value = [1, 3, 4, 8, 13, 17, 20];
let temp = value[1] - value[0]

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        console.log(value[i], value[i + 1])
    }
}


let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0]
let result = 0

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i]
        result = i;
    }
}

console.log(value[result], value[result+1]);

//  i == 0 ,temp=3 ,result=0
for (let i = 0; i < 8; i++) {
  if (3 > 3){
      temp = value[i+1] - value[i]
      result = i;
  }
}
//  i == 1, temp=2, result=1
for (let i = 0; i < 8; i++) {
  if (3 > 2){
      temp = 2
      result = 1;
  }
}
//  i == 2, temp=2, result=1
for (let i = 0; i < 8; i++) {
  if (2 > 2){
      temp = 2
      result = 1;
  }
}

//  i == 2, temp=2, result=1
for (let i = 0; i < 8; i++) {
  if (2 > 2){
      temp = 2
      result = 1;
  }
}

-------------------------------------------------------------------------------------

