// 중복을 허용하지 않음

let s = new Set('abcdeeeeeeeee');

//set 은 순서가 없습니다. 인덱스로 호출 할수 없다.




let a = new Set('abc');
let b = new Set('cde');
//전개       
[...a].filter(value => b.has(value))
// 교집합 방법 같이 중복되는거 찾기


// concat 은 두 개의 문자열을 하나의 문자열로 만들어주는 역활을 하는 함수이며,
// 입력값을 문자열 대신 배열을 사용하면 두 개의 배열을 하나의 배열로 만들어주는 역활도     하는 함수입니다.
let c = new Set([...a].concat([...b]));
//합집합.             
Set(5) {'a', 'b', 'c', 'd', 'e'}




function add(...x){ // Spread Operator(전개 연산자) 사용하면 매개변수의 인자값을 여러개
  return x;            //담을수 있다.
}

add(1, 2, 3, 4, 5)



//가장큰 숫자를 나타낸다.
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
Math.max(1, ...arr1, 2, ...arr2, 25); // 25

//가장 작은 숫자를 나타낸다.
Math.min(1, ...arr1, 2, ...arr2, 25); // -8