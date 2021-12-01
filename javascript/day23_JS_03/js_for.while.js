// 무한 루프
let array = [10, 20, 30, 40, 50];
let i = 0;

for(;array.length;) {
  console.log(array[i]);
  i++;
}

/////////////////////////////////////////////////////////////////////

let array = [10, 20, 30, 40, 50];
let i = 0;

for(;i < array.length;) {
  console.log(array[i]);
  i++;
}

/////////////////////////////////////////////////////////////////////

// for each 문

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

/////////////////////////////////////////////////////////////////////

//for of

for (let value of array) {
  console.log(value);
}

/////////////////////////////////////////////////////////////////////

//평균 구하기

let array = [10, 20, 30, 40, 50];
let result = 0

for (let value of array) {
  result += value;
}
console.log(result/array.length);


/////////////////////////////////////////////////////////////////////


// while 문으로 짝수 출력
let i = 0;

while (i < 100){
    console.log(i);
    i += 2;
}
// while 문 짝수값만 더하기
let i = 0;
let result =0;

while (i < 101){
    result += i;
    i += 2;
}
console.log(result);
/////////////////////////////////////////////////////////////////////

//do while 문 while의 조건이 완료될때가지 do를 실행
do {
  console.log(num);
  num += 1;
} while (num < 11);

/////////////////////////////////////////////////////////////////////

// 구구단 for 문 while 문으로 변경하기
for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    document.write(`${i} X ${j} = ${i*j} <br>`);
  }
}

let i = 2;
let j = 1;
//while 문으로 구구단 만들기.
while (i < 10){
  while (j <10){
   console.log(`${i} x ${j} = ${i*j}`);
    j++;
  }
  j = 1;  // j의 값을 초기화 시켜주지 않으면 두번째 while 문은 이미 10이 되어서 들어가지 않아서
          // 2단만 출력되게 된다. 초기화를 시켜서 2번째 while 문으로 들어갈수있게 해줘야 한다.
  i++;
}

/////////////////////////////////////////////////////////////////////

//반복문과 break & continue
// 5까지만 곱하기. 
let i = 2;
let j = 1;

while (i < 10){
   while (j <10){
   console.log(`${i} x ${j} = ${i*j}`);
   if (j == 5){
     break;
    }
    j++;
  }
  j = 1;  
  i++;
}


// 5단까지 반복
let i = 2;
let j = 1;

while (i < 10){
      while (j <10){
      console.log(`${i} x ${j} = ${i*j}`);
       j++;
    }
     j = 1;  
     if (i == 5){
     break;
      }
     i++;
}

/////////////////////////////////////////////////////////////////////

// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.

outer: for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
      // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
      if (i === 5) break outer;
      console.log(`${i} X ${j} = ${i*j}`);
  }
}