1. 재사용성
2. 아키텍처 파악
3. 유지보수




function 함수하나 () {
  let i = 10; // 지역함수 함수가 끝나는 즉시 사라짐.
  console.log('함수하나 호출')
}

function 함수둘 () {
  let y = 10; // 지역함수 함수가 끝나는 즉시 사라짐.
  console.log('함수둘 호출')
}

함수하나()
VM9227:3 함수하나 호출

함수둘()
VM9251:3 함수둘 호출

//함수 안에 선언한 변수들을 밖에서 볼수없다.



// changek 함수를 호출하면 전역변수  k 의 값이 변한다.

let k = 10; // 전역변수
function viewk(){
    console.log(k);
}
function changek(){
    k += 10;
    console.log(k)
}
viewk()
changek()
viewk()


let k = 10; // 전역변수
function viewk(){
    console.log(k);
}
function changek(){
    let k = 20;
    console.log(k)
}
viewk()
changek()
viewk()




// 매개변수(Parameter)

function add (a, b) { // 인수,매개변수(Parameter): a, b
  return(a + b);
}

add(10, 20)// 전달인자(Argument)
30

// 파라미터- 선언- 아규먼트- 실행

//a=디폴트 , b=300
add(undefined,300)

// 
function add({ a = 100, b = 200 }) {
  console.log(a+b);
}

add({b: 300}); // 400


let yy = 100; //함수스코프
if (true) {
   let yy = 10;  //블록스코프
    console.log(yy);
}
console.log(yy);

//10
//100

//encapsulation 캡슐화
함수 내에서의 선언된 변수는 밖에서 변수를 불러올수없다.