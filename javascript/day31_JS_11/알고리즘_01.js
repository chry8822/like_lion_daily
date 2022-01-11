// 구글 입사문제 중에서
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열 만들기 // 빈 배열은  메모리를 잡아먹지 않는다. null, undefined 가 아님.
Array(10) 
let x = Array(10);
x[2] = undefined;
x[3] = null;
Array(10) [ <2 empty slots>, undefined, null, <6 empty slots> ]

Array(10).fill(o); // 0 으로 배열 10개 채우기
Array(10) [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

Array(10).fill(10); // 10 으로 배열 10개 채우기
Array(10) [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]

find, filter, map, 

// 1부터 100 까지 배열 만들기.
Array(100).fill(1).map((value, index) => value + index);
[...Array(100)].map((_, index) => 1 + index);


'.'.repeat(10);
".........."
'.'.repeat(10).split('.')   // repeat에서 split로 배열로 만든다. 11개가 나온다. 10개를 하려면 Array(9)
Array(11) [ "", "", "", "", "", "", "", "", "", "", … ] 

Array.from('abc'); // 문자열을 하나씩 나눠서 배열로 만들어줌
Array(3) [ "a", "b", "c" ]

Array.from('a'.repeat(10)); // a 를 10개 반복해서 배열로 반환
Array(10) [ "a", "a", "a", "a", "a", "a", "a", "a", "a", "a" ]

// 몸풀기 문제 1
//구글 입사문제
// 정답                           // + '' 로 하나씩 스트링으로 바꾸기 그리고 split 으로 8 짜르기
(Array(100).fill(1).map((value, index) => value + index) + '').split('8');
                                  // 8을 짜르고 랭쓰에서 - 1 을 해주면 정답.
(Array(100).fill(1).map((value, index) => value + index) + '').split('8').length - 1;
split(/8/g);
split(/8/g).length - 1;


// 몸풀기 문제 2 최소 격차가 나는 두개의 수를 찾기
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();                       //배열 생성
for (let i = 1; i < s.length; i++) {         // 첫번째 인덱스부터 배열 길이만큼 1씩 증감하면서 반복
  //  console.log(s[i], s[i-1]) 
  //  console.log(s[i] - s[i-1]) 

   arr.push(s[i] - s[i-1])                   // 1번 인덱스 - 0번 인덱스 (3-1) (4-3) ...
}                                            // 그 값들을 생성한 배열에 push

// arr.indexOf(5)
// arr.indexOf(최솟값)
// let result = arr.indexOf(Math.min.apply(null, arr));
let result = arr.indexOf(Math.min(...arr));   // 결과값을 변수에 인덱스에 가장 작은 최소값을 찾는다
console.log( s[result], s[result+1] )         // 최솟값의 인덱스로 문제에 배열에서 숫자를 찾고 +1로 빼기를 해준 배열의 숫자를 콘솔로그로 찾아준다.  3 은 인덱스 1 이고 4는 3다음 인덱스이고 4-3 을 해줬기 때문이다.




// 몸풀기 문제 2번 다른풀이

let s = [1, 3, 4, 8, 13, 17, 20];
// let ss = [3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value, index) => [value, b[index]])
//const zip = (a, b) => a.map((v, i) => [v, b[i]])
// zip([1,2,3,],[10, 20, 30])
zip(s.slice(0, s.length - 1), s.slice(1));
let pairs = zip(s.slice(), s.slice(1)).slice(0, -1);  // 첫번째 인덱스 부터 -1 이면 맨 마지막 값을 자른다.

// -1 순서 유지
// 1 순서 바꿈
// 오름차숨 정렬: 뒤에 값이 더 크면 순서 유지
//                뒤에 값이 작으면 순서 바꿈

function compare (a, b ) {
    if (a[1]- a[0] < b[1] - b[0]) {
      return -1;
    }
    if (a[1]- a[0] > b[1] - b[0]) {
      return 1;
    }
    return 0;
}
pairs.sort(compare)
pairs.sort(compare)[0] // 정답


//////////////////// 쉬운 풀이 /////////////////////
let s = [1, 3, 4, 8, 13, 17, 20];
                               
const zip = (a, b) => a.map((value, index) => [value, b[index]])

// zip(s.slice(0, s.length - 1), s.slice(1));

let pairs = zip(s.slice(), s.slice(1)).slice(0, -1);  // 첫번째 인덱스 부터 -1 이면 맨 마지막 값을 자른다.

// 초기값. for 문 안에서는 최솟값을 비교하는 용도로 사용.
// MAX_SAFE_INTEGER 를 주로 사용합니다.
// let init = Number.MAX_SAFE_INTEGER; 최댓값
// let init = Number.MIN_SAFE_INTEGER; 최솟값
let init = pairs[0][1] - pairs[0][0];
let result = [];

for (let i of pairs) {
  console.log(i);
  if(init > i[1] - i [0]){
     init = i[1] - i [0]
     result = i;
  }
}
console.log(result)

// 몸풀기 끝 //

// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회



// 1. 스택과 큐
class Stack {
  constructor(){
      this.arr = [];
  }

  push(data) {
      this.arr.push(data);
  }

  pop(index=this.arr.length-1) {
      // index가 입력이 안되었을 때
      // index가 입력이 되었을 때
      if (index === this.arr.length-1){
          return this.arr.pop();
      }

      let result = this.arr.splice(index, 1);
      // let result = this.arr[index]
      // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)]
      return result
  }

  empty() {
      if(arr.length == 0) {
          return true;
      } else {
          return false;
      }
  }

  top(){
      return this.arr[this.arr.length-1]
  }

  bottom(){
    // console.log 에서는 아래 코드만 해도 문제가 없다.
      // return this.arr[0]
      try {
        return this.arr[0]
      }
      catch(error) {
        return undefined
      }
  }
}
let s = new Stack()
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

s.pop();
console.log(s);

s.pop(2);
console.log(s);



// 2. 연결리스트(linked list)
// 2.1 첫번째시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js 에서는 그다지 메모리 효율이 좋지 못함
// 개념 :
// 알고리즘 시각화 : https://visualgo.net/ko

// 연결리스트의 기본구조
const list = {
  head: {
      value: 90,
      next: {
          value: 2,
          next: {
              value: 77,
              next: {
                  value: 35,
                  next: null
              }
          }
      }
  }
}

class Node {
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      let init = new Node('init');
      this.head = init;
      this.tail = init;

      this.현재노드 = undefined;
      this.데이터수 = 0;
  }

  length(){
      return this.데이터수;
  }

  append(data){
      let 새로운노드 = new Node(data);
      // 마지막 값(null)은 새로운 노드가 됨
      this.tail.next = 새로운노드;
      // 마지막 노드는 새로운 노드가 됨
      this.tail = 새로운노드;
      this.데이터수 += 1;
  }
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length()

/////////////////////////////////////////////////

class Node {
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      let init = new Node('init');
      this.head = init;
      this.tail = init;

      this.데이터수 = 0;
  }

  get fullData(){
      // return 'hello world'
      let 순회용현재노드 = this.head;
      순회용현재노드 = 순회용현재노드.next;

      let s = ''
      for (let i = 0; i < this.데이터수; i++) {
          s += `${순회용현재노드.data}, `;
          순회용현재노드 = 순회용현재노드.next;
      }
      return JSON.parse(`[${s.slice(0, -2)}]`)
  }

  length(){
      return this.데이터수;
  }

  append(data){
      let 새로운노드 = new Node(data);
      // 마지막 값(null)은 새로운 노드가 됨
      this.tail.next = 새로운노드;
      // 마지막 노드는 새로운 노드가 됨
      this.tail = 새로운노드;
      this.데이터수 += 1;
  }

  toString(){
      // return 'hello world';
      let 순회용현재노드 = this.head;
      순회용현재노드 = 순회용현재노드.next;

      let s = '';
      for (let i = 0; i < this.데이터수; i++) {
          s += `${순회용현재노드.data},`
          순회용현재노드 = 순회용현재노드.next;
      }
      return s.slice(0, -1);
  }

  insert(index, data){
      let 순회용현재노드 = this.head;
      순회용현재노드 = 순회용현재노드.next;

      for (let i = 0; i < index - 1; i++) {
        순회용현재노드 = 순회용현재노드.next;
    }

      let 새로운노드 = new Node(data);
      새로운노드.next = 순회용현재노드.next;
      순회용현재노드.next = 새로운노드;

      this.데이터수 += 1;
  }
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length()
console.log(l.fullData)

l.insert(2, 999)


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 3. 정렬

선택정렬
//직접해보기
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];  최솟값을 찾아서 순회하고
let 후 = [];                                       찾아진 최솟값은 순회없이 순차적으로 들어온다.

let 전 = [199, 22, 33, 32, 64, 72, 222, 233];
let 후 = [12];

let 전 = [199, 33, 32, 64, 72, 222, 233];
let 후 = [12, 22];

let 전 = [199, 33, 64, 72, 222, 233];
let 후 = [12, 22, 32];

선택정렬이란
조건에 맞게 순차적으로 들어간다.

let = 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
정렬된배열 = [];
let 길이 = 입력값.length; // 전체 순회를 하려면 길이값을 고정해준다.

for (let i = 0; i < 길이; i++) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값), 1)
  }
   console.log(정렬된배열);
// 주의!! : pop 하면 길이가 줄어서 배열전체를 돌기전에 반복문이 종료된다.
// for (let i = 0; i < 입력값.length; i++) {
//     console.log(입력값.pop())  
//     console.log(i);
// }


let = 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
정렬된배열 = [];
let 길이 = 입력값.length; // 전체 순회를 하려면 길이값을 고정해준다.

while (!!입력값.toString()) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    console.log(정렬된배열);
    입력값.splice(입력값.indexOf(최솟값), 1)
    console.log( 입력값.splice(입력값.indexOf(최솟값), 1));
  }
   console.log(정렬된배열);



// 3.1 선택정렬(메서드 최소화)
// 제대로 하려면 (자리바꾸는 것까지)

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



삽입정렬
순차적으로 들어가고 자기위치에 맞게 끼어든다.

let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];  배열원본을 순회하지 않는다.
let 후 = [];                                       새로운 배열에 순회하며 끼어든다.

let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [199];

let 전 = [33, 12, 32, 64, 72, 222, 233];
let 후 = [22, 199];

let 전 = [12, 32, 64, 72, 222, 233];
let 후 = [22, 33, 199];

let 전 = [32, 64, 72, 222, 233];
let 후 = [12, 22, 33, 199];

let 전 = [64, 72, 222, 233];
let 후 = [12, 22, 32, 33, 199];

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이들어갈인덱스(정렬된배열, 삽입값) {
    for (const i in 정렬된배열) {
      if (삽입값 < 정렬된배열[i]) {
        return i
      }
    }
    return 정렬된배열.length;
}
for (let i = 0; i < 배열의길이-1; i++) {
  삽입값 = 입력값.shift()
  인덱스 = 삽입값이들어갈인덱스(정렬된배열,삽입값);
  정렬된배열.splice(인덱스, 0, 삽입값);
  console.log(`인덱스: ${인덱스}\n삽입값 : ${삽입값}\n 정렬된배열 : ${정렬된배열}\n` )
}

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


병합정렬 (Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 쿽 정렬과 동일할수 있음)
O(1);


병합정렬(분할정복,mergesort)
[180, 173, 145, 165, 170, 45, 175, 171]
[180, 173, 145, 165], [170, 45, 175, 171]
[180, 173], [145, 165], [170, 45], [175, 171]
[180], [173], [145], [165], [170], [45], [175], [171]
[173, 180], [145, 165], [45, 170], [171, 175]
[145, 165, 173, 180], [45, 170, 171, 175]
[45, 145, 165, 170, 171, 173, 175, 180]


let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
function getDouble(num) {
    return num * 2;
}
function 병합정렬(입력배열) { // [5, 10, 66, 77, 54, 32, 11, 15] => [5, 10, 66, 77] = > [5, 10]
    let 입력배열의길이 = 입력배열.length;
    let 결과값 = [];

    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    let 중간값 = parseInt(입력배열의길이 / 2);
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값)); // [5, 10, 66, 77]
      // 함수를 호출한 자리에 반환한다
    // 1.그룹하나라는 변수를 만든다.
    // 2.병합정렬 함수를 호출한다
    // 3.호출의 결과를 그룹하나 변수에 할당한다.
    let 그룹둘 = 병합정렬(입력배열.slice(중간값)) // [11, 15, 32, 54]
      // 함수를 호출한 자리에 반환한다

    //   [], [] => [5, 10, 11, 15, 32, 54, 66, 77]
    while (그룹하나.length != 0 && 그룹둘.length != 0) {
        if (그룹하나[0] < 그룹둘[0]) {
            결과값.push(그룹하나.shift());
        } else {
            결과값.push(그룹둘.shift());
        }
    }

    while(그룹하나.length != 0){
        결과값.push(그룹하나.shift());
    }

    while(그룹둘.length != 0){
        결과값.push(그룹둘.shift());
    }
    // 결과값.push(66, 77)
    // 결과값.concat(그룹둘)

    // let obj = {a:1, b:2}
    // let obj2 = {
    //     ...obj,
    //     c: 2,
    // }
    // Object.assign(obj, { c: 2 });

    return 결과값
}                                                          

console.log(병합정렬(입력값));

병합정렬 (고급)




경우의수가 줄고 성능이 좋다.
나눈뒤 합친다. 
앞에값끼리 비교하고 합쳐지고 비교하고 합쳐지고 반복

로직
배열을 쪼갤 수 없을 때까지 계속하여 분할한다.
더 이상 쪼갤 수 없을 때, 왼쪽 배열과 오른쪽 배열을 정렬하여 병합한다.
이 때, 정렬된 리스트를 도출하기 위해 새로운 리스트를 생성한다.
두 배열 값들을 처음부터 하나씩 비교해가며 더 작은 값을 새로운 리스트에 추가한다.
만약 하나의 배열이 먼저 소진됐다면 남은 배열의 값들을 왕창 추가한다.
새로운 리스트를 기존의 리스트에 반영한다.
2번 작업을 원본 배열 크기가 될 때까지 재귀적으로 반복한다.


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


정렬알고리즘 - 퀵정렬
퀵정렬(best - O(nlog2n), worst - O(n**2))
피봇값(pivot)을 기죽으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음

let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

//피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

//피봇값 : 54(66과 77은 값이 한 개이기 때문에 더이상 재귀로 호출되지 않음.)
[32, 10, 5, 11, 15] + [54] + [66] + [77]

//피봇값 : 32
[10, 5, 11, 15], [32] + [54] + [66] + [77]

//피봇값 : 10 
[5] + [10], [11, 15] + [32] + [54] + [66] + [77]

//피봇값 : 11
[5] + [10], [11], [15] + [32] + [54] + [66] + [77]

let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

function 퀵정렬(입력배열) {
    let 입력배열의길이 = 입력배열.length;
  
    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    const 피벗값 = [입력배열.shift()]; //기준점
    const 그룹하나 = [];
    const 그룹둘 = [];

    for (let i in 입력배열) {
        if (입력배열[i] < 피벗값) {
            그룹하나.push(입력배열[i])
        } else {
            그룹둘.push(입력배열[i]);
        }
    }


    console.log(`그룹하나: ${그룹하나}\n그룹둘 : ${그룹둘}\n 피벗값 : ${피벗값}\n`);
    
    const 결과 = 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘)); // concat 앞에 있는걸 뒤에 붙인다.
    return 결과;
}
const result = 퀵정렬(입력값);
console.log(result);

// 조금더 어려운 코드
function quickSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const pivot = arr[0]; //기준점
  const left = [];
  const right = [];

  for (let i=1; i<arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = ['개구리', '거위', '말', '북극곰', '얼룩말', '고릴라', '기린', '닭', '코끼리'];
console.log(quickSort(arr));
//['개구리', '거위', '고릴라', '기린', '닭', '말', '북극곰', '얼룩말', '코끼리']

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 4. 페이지 교체 알고리즘
// 페이징 기법으로 메모리를 관리하는 운영체제에서, 페이지 부재가 발생 하여 새로운 페이지를 할당하기 위해 현재 할당된 페이지 중 어느 것과 교체할지를 결정하는 방법이다. 이 알고리즘이 사용되는 시기는 페이지 부재가 발생해 새로운 페이지를 적재 해야하나 페이지를 적재할 공간이 없어 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용된다. 빈 페이지가 없는 상황에서 메모리에 적재된 페이지와 적재할 페이지를 교체함으로 페이지 부재 문제를 해결할 수 있다. 단점으로는 TimeStamping에 의한 overhead가 존재한다는 점이다

LRU 알고리즘

hit - 1
miss - 5

1회차
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
[ "Jeju"] 

2회차
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
[ "Jeju", "Pangyo"]

3회차
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
[ "Jeju", "Pangyo", "Seoul"]

4회차 // 캐시 크기가 3 이다 무엇을 빼야할까 최근에 사용된 값은 나두고 
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
[ "Jeju", "Pangyo", "Seoul"]

5회차 // 맨처음 불러온 제주를 빼고 그다음 뉴욕을 맨 뒤에 넣는다.
      // 맨 앞에 있다는건 최근에 히트된것이 아니기 때문에 맨앞에 값을 빼고 맨뒤로 새로운 값이 들어온다.
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
["Pangyo","Seoul", "NewYork"]

6 회차 // 맨처음 불러온 제주를 빼고 그다음 뉴욕을 맨 뒤에 넣는다.
      // 맨 앞에 있다는건 최근에 히트된것이 아니기 때문에 맨앞에 값을 빼고 맨뒤로 새로운 값이 들어온다.
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
[ "NewYork" "LA", "Jeju"]

... =  실행시간 50 (히트된게 하나도 없기때문에)


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

1회차
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Jeju"]
2회차 
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Jeju", "Pangyo"] 
3회차
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Jeju", "Pangyo", "Seoul"]
4회차 5
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Pangyo", "Seoul", "NewYork"] 
5회차 5
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Seoul", "NewYork", "LA"]
6회차 1
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["NewYork", "LA", "Seoul"] 
7회차 1
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["NewYork", "Seoul", "LA"] 
17


//LRU
['바나나','체리','한라봉','자몽','수박','수박','체리'] 
1. [바나나]                       5        
2.[바나나, 체리]                  5
3.[바나나, 체리, 한라봉]          5
4.[체리, 한라봉, 자몽]            5
4.[한라봉, 자몽, 수박]            5
4.[한라봉, 자몽, 수박] 수박 히트  1
4.[자몽, 수박, 체리]              5

실행시간 31

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

FIFO 알고리즘 // 캐시가 3일때

['바나나','체리','한라봉','자몽','수박','수박','체리'] 


['바나나','체리','한라봉','자몽','수박','수박','체리'] 
1. [바나나]                       5        
2.[바나나, 체리]                  5
3.[바나나, 체리, 한라봉]          5
4.[체리, 한라봉, 자몽]            5
5.[한라봉, 자몽, 수박]            5
6.[한라봉, 자몽, 수박] 수박 히트  1
7.[자몽, 수박, 체리]              5

실행시간 31

// 5. 트리와 그래프
그래프는 순환할수 있는 차이점이 있다.
트리 탐색은 최단으로 데이터를 검색 탐색 할수있다.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

BFS. Breadth First Search 너비우선(큐)
너비우선 탐색에서는 큐(Queue)를 사용한다.
큐에 넣는다 push 큐에서 뺀다 shift 

자신이 커런트에 들어오면 큐에 아래레벨 자식들이 왼쪽순으로 순차적으로 들어온다.
자신이 방문경로에 들어가면 아래레벨 왼쪽자식이 커런트로 들어오고 방문경로로 들어간다.


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

DFS, Depth First Search 깊이우선(스택) 중요함
깊이우선 탐색에서는 스택(stack)을 사용한다. 
스택에 노드가 들어가는 순서에 따라 탐색이 달라진다.
스택에 넣는건 push 꺼내는건 pop

작동방식

자신이 방문경로로 들어가는 순간 첫번째 자식이 전부다 stack 으로 간다.
그리고 첫번째 자식의 왼쪽 자식이 방문경로로 가면 왼쪽 자식의 자식이 stack 으로 들어간다. 
그리고 왼쪽 자식의 자식이 방문경로로 들어가고 더이상 자식이 없으면 오늘쪽 첫번째 자식의 자식이 stack 으로 들어가는데 왼쪽 오른쪽 자식이 있으면 왼쪽 먼저 그리고 오른쪽순으로 방문경로로 들어가게 된다.


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



전위 
자신 - 왼쪽 - 오른쪽 

중위
왼쪽 - 자신 - 오른쪽

후위
왼쪽 - 오른쪽 - 자신

이진탐색트리
나기준으로 왼쪽은 작고 오른쪽은 크다.

//5.1 트리
// 트리의 기본형태
// 자식은 항상 오른쪽 왼쪽으로 잡아주고 없으면 null 값은 준다.
// value 
// child - left
// child - right

const tree = {
  root: {
      value: 5,                 // 최상위 root 의 value 는 5
      left: {
          value: 3,             // 첫번째 왼쪽 자식
          left: {
              value: 1,          // 두번째 왼쪽의 왼쪽 자식
              left: null,        // 더이상 자식이 없어서 null
              righr: null,
          },
          right: {                // 두번째 왼쪽의 오른쪽 자식
              value: 4,
              left: null,
              righr: null,
          }
      },
      right: {                   // 첫번째 오른쪽 자식
          value: 8,
          left: {
              value: 6,          // 두번째 오른쪽의 왼쪽 자식
              left: null,
              righr: null,
          },
          right: {
              value: 9,           // 두번째 오른쪽의 오른쪽 자식
              left: null,
              righr: null,
          }
      }
  }
}

9 를 찾아보자
tree.root.right.right.value = 9


// object 로 linked list 와 tree 를 만들수 있는데
// 굳이 class 로 만드는 이유는?
object 는 상속 재사용 은닉이 되지 않기 때문

1. 확장성(예제 참고하기)
2. OOP에 철학에 맞기 때문에
 ㄴ OOP란 객체지향프로그래밍.


 class Node {
  constructor(data){
      this.data = data;
      // this.child = []; // 2진트리가 아닌 트리가 됨
      this.left = null;
      this.right = null;
  }
}

class Tree {
  constructor(data) {
      let init = new Node(data);
      this.root = init;
      this.데이터수 = 0;
  }

  length(){
      return this.데이터수;
  }

  insert(data){
      let 새로운노드 = new Node(data);
      let 순회용현재노드 = this.root;

      while(순회용현재노드){
          if (data === 순회용현재노드.data){
              // 중복된 값은 탈락!
              return;
          }
          if (data < 순회용현재노드.data){
              // 들어온 데이터가 작으면 왼쪽에
              // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
              if (!순회용현재노드.left){
                  순회용현재노드.left = 새로운노드;
                  return;
              }
              순회용현재노드 = 순회용현재노드.left;
          }
          if (data > 순회용현재노드.data){
              // 들어온 데이터가 크면 오른쪽에
              // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
              if (!순회용현재노드.right){
                  순회용현재노드.right = 새로운노드;
                  return;
              }
              순회용현재노드 = 순회용현재노드.right;
          }
      }
      
      this.데이터수 += 1;
  }
}

let t = new Tree(5); // root노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);


t.root.data
5
t.root.left.data
3
t.root.right.right.data
9

// 6. 트리의 순회 (손코딩하기)


class Node {
  constructor(value){
      this.data = value;
      // this.child = []; // 2진트리가 아닌 트리가 됨
      this.left = null;
      this.right = null;
  }
}

class Tree {
  constructor(data) {
      let init = new Node(data);
      this.root = init;
      this.데이터수 = 0;
  }

  length(){
      return this.데이터수;
  }

  insert(data) {
      let 새로운노드 = new Node(data);
      let 순회용현재노드 = this.root;

      while(순회용현재노드){
          if (data === 순회용현재노드.data){
              // 중복된 값은 탈락!
              return;
          }
          if (data < 순회용현재노드.data){
              // 들어온 데이터가 작으면 왼쪽에
              // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
              if (!순회용현재노드.left){
                  순회용현재노드.left = 새로운노드;
                  return;
              }
              순회용현재노드 = 순회용현재노드.left;
          }
          if (data > 순회용현재노드.data){
              // 들어온 데이터가 크면 오른쪽에
              // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
              if (!순회용현재노드.right){
                  순회용현재노드.right = 새로운노드;
                  return;
              }
              순회용현재노드 = 순회용현재노드.right;
          }
      }
      
      this.데이터수 += 1;
  }

  // 깊스너큐, 파선아실
  DFS() {
    //깊이우선탐색, DFS(Depth First Search)
    // Stack 이용!
    let 결과값 = [];
    let 스택 = [this.root];

    while(스택.length !== 0){
        let current = 스택.pop();
        if(current.right) {
          스택.push(current.right)
        }
        if(current.left) {
          스택.push(current.left)
        }
        결과값.push(current.data);
    }

    return 결과값;
  }
  BFS() {
    //너비우선탐색, BFS(Breadth First Search)
    // Queue 이용!
    let 결과값 = [];
    let 스택 = [this.root];

    while(스택.length !== 0){
      let current = 스택.shift();
      if(current.left) {
        스택.push(current.left)
      }
      if(current.right) {
        스택.push(current.right)
      }
      결과값.push(current.data);
  }
  return 결과값;


  }
}

let t = new Tree(5); // root노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);


t.root.data
5
t.root.left.data
3
t.root.right.right.data
9






// 목차(실전 코딩테스트 풀이)
// 1. 18년도
비밀지도 코테 (이진법,이진수,진법연산,replace,or,#)
https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

[9, 20, 28, 18, 11]
[30, 1, 21, 17, 28]
let x = 9; // 이진법으로 만드는법 x.toString(2) = '1001' 8,16 진법도있음

let x = 9;
let y = 30;

x.toString(2); // 이진법으로 만드는법
y.toString(2);

'01001'
'11110'
-------
'11111'  // 0 + 1 = 1 

|| - or
&& - and
! - not

let z = '11111'
z.replace(/1/g, '#').replace(/0/g, ' ')  // 1 은 # 으로 0 은 ' ' 공백으로 변환
'#####'

(9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ') // 비트 or 연산
(9 & 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ') // 비트 && 연산
(5 | 3).toString(2).replace(/1/g, '#').replace(/0/g, ' ')  // 앞에 공백없이 #만 출력되는 문제
(31 | 14).toString(2).replace(/1/g, '#').replace(/0/g, ' ')  // 앞에 공백없이 #만 출력되는 문제
// n의 값이 5 또는 6 이라서 #이 아닌공백도 같이 출력되야하는데 앞에 공백은 생략되서 나와서 해결해야됨

//////////////////////////////
코테 유틸리티 모듈
const fillZero = (n, arr) => {return ' '.repeat(n - arr.length) + arr}  // 공백채워주는 함수
const fillZero = (n, arr) => {return '0'.repeat(n - arr.length) + arr}  // 공백채워주는 함수

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  let result = [];
    for (let i = 0; i < n; i++) {
      result.push((arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' '))
    }
    return result;
}
console.log(solution(n, arr1 ,arr2));
// 통과 실패 ,  공백이 출력되지 않음
//////////////////////////////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  let result = [];
  const fillSpace = (n, arr) => {return ' '.repeat(n - arr.length) + arr}  // 공백채워주는 함수.
    for (let i = 0; i < n; i++) {
      result.push(fillSpace(n ,(arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' ')))
    }
    return result;
}
console.log(solution(n, arr1 ,arr2));
////////////////////////////////
zip 을 사용한 문제풀이

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    let result = []
    const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
    const fillSpace = (n, arr) => { return ' '.repeat(n - arr.length) + arr }
    for (let [i, j] of zip(arr1, arr2)) {
        result.push(fillSpace(n, (i | j).toString(2).replace(/1/g, '#').replace(/0/g, ' ')));
    }
    return result;
}

console.log(solution(n, arr1, arr2));

/////////////////////////////////////////////////////////

다트게임
https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/

1S2D*3T
[2, 8, 27]
37


1D2S#10S
[1, -2, 10]
9

1S*2T*3S
[4, 16, 3]


testcase = [
  '1S2D*3T',
  '1D2S#10S',
  '1D2S0T'
]

for (let c of testcase) {
  console.log(solution(c));
}
//37, 9, 3


const dartResult = '1S2D*3T'
let answer = [];
let result = 0;
let temp = 0; // 임시점수


// step 1
for (let i = 0; i < dartResult.length; i++) {
    // console.log(dartResult[i]);
    if (dartResult[i] >= 0 && dartResult[i] <= 9){   // 0~9 index  숫자로는 10까지 temp에 담는다.
       temp = parseInt(dartResult[i]);
    } else if(dartResult[i] === 'S'){                 // 전순회에 temp 에 들어간 값이
        answer.push(temp);                  // 순회때 조건에 걸리면 여기 temp에서 사용된다.
    } else if(dartResult[i] === 'D'){
        // answer.push(Math.pow(temp, 2));
        answer.push(temp**2);
    } else if(dartResult[i] === 'T'){
        // answer.push(Math.pow(temp, 3));
        answer.push(temp**3);
    }
}
console.log(answer);
[1, 4, 27]

// step 2

const dartResult = '1S2D*3T'
let answer = [];
let result = 0;
let temp = 0; // 임시점수

for (let i = 0; i < dartResult.length; i++) {
    // console.log(dartResult[i]);
    if (dartResult[i] >= 0 && dartResult[i] <= 9){  
        if(dartResult[i] == 1 && dartResult[i+1] == 0){
          temp = 10;
          i++
       } else {
         temp = parseInt(dartResult[i]);
       }
    } else if(dartResult[i] === 'S'){               
        answer.push(temp);                 
    } else if(dartResult[i] === 'D'){
        // answer.push(Math.pow(temp, 2));
        answer.push(temp**2);
    } else if(dartResult[i] === 'T'){
        // answer.push(Math.pow(temp, 3));
        answer.push(temp**3);
    } else if(dartResult[i] === '*'){
       // answer.push(Math.pow(temp, 3));
        answer[answer.length-1] *= 2;
        answer[answer.length-2] *= 2;
    } else if(dartResult[i] === '#'){
        // answer.push(Math.pow(temp, 3));
        answer.push(temp**3);
        answer[answer.length-1] *= -1;
    }

}
for (let i = 0; i < answer.length; i++) {
    result += answer[i];  
}
console.log(result);

// step 3

function solution(dartResult) {
  let answer = [];
  let result = 0;
  let temp = 0; // 임시점수
  
  for (let i = 0; i < dartResult.length; i++) {
      // console.log(dartResult[i]);
      if (dartResult[i] >= 0 && dartResult[i] <=9 ) {
          if (dartResult[i] == 1 && dartResult[i+1] == 0) {
              temp = 10;
              i++;
          } else {
              temp = parseInt(dartResult[i]);
          }
      } else if (dartResult[i] == 'S'){
          answer.push(temp);
      } else if (dartResult[i] == 'D'){
          // answer.push(Math.pow(temp, 2));
          answer.push(temp**2);
      } else if (dartResult[i] == 'T'){
          // answer.push(Math.pow(temp, 3));
          answer.push(temp**3);
      } else if (dartResult[i] == '*'){
          answer[answer.length-1] *= 2;
          answer[answer.length-2] *= 2;
      } else if (dartResult[i] == '#'){
          answer[answer.length-1] *= -1;
      }
  }
  for (let i = 0; i < answer.length; i++) {
      result += answer[i];
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////

캐시크기 (난이도 하)
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]

["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]

toLowerCase() // 소문자
toUpperCase() // 대문자
let x = ['a','b','c']

testcase = [
 [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]],
 [3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]],
 [2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]]
]

for (let [cacheSize, cities] of testcase) {
  console.log(solution(cacheSize, cities));
}

// 50, 21, 60

function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i ++) {
      let city = cities[i].toLowerCase();
      let index = cache.indexOf(city);
      if (index !== -1) {
          //hit
          cache.splice(index, 1);
          cache.push(city);
          time += 1;
      } else {
          //miss
          cache.push(city);
          time += 5;
          if (cacheSize < cache.length) {
              cache.shift();
          }
      }

  }
  return time;
}
5677
// 2. 19년도
// 링크 :https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/
// 1번 오픈채팅반 문제

let test = [
    'A 10 !',
    'B 20 !',
    'A 22 @',
    'B 20 @',
    'A 21 @'
]

result = [];
test.forEach((el) => {
    const [one, two, three] = el.split(' ')
    if (one === 'A') {
        if (two >= 20) {
            result.push([two, three]);
        }
    }

})

// step1

let record = [                    //유저 프로필 아이디가 변하게 만드는 Enter,Change 가 들어왔을때.
    "Enter uid1234 Muzi",         //Enter 나 Change 가 들어오게 되면 마지막 프로필이름이 변할수도 있다.
    "Enter uid4567 Prodo",        //맨 마지막에 유져 아이디를 users 에서 찾아서 최종적으로 찍어준다.
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record) {
    let answer = [];
    let users = {};     // users 는 최종 닉네임만 가지고 있는다.

    for (const el of record) {
        const [상태, 아이디, 닉네임] = el.split(' ')
        answer.push([상태, 아이디, 닉네임])
    }

    // "Enter uid1234 Prodo 님이 들어왔습니다.",
    // "Enter uid4567 Ryan 님이 들어왔습니다.",
    // "Leave uid1234 Prodo 님이 들어왔습니다." ,
    // "Enter uid1234 Prodo 님이 들어왔습니다.",


    return answer
}

solution(record);

// step2

let record = [                    //유저 프로필 아이디가 변하게 만드는 Enter,Change 가 들어왔을때.
    "Enter uid1234 Muzi",         //Enter 나 Change 가 들어오게 되면 마지막 프로필이름이 변할수도 있다.
    "Enter uid4567 Prodo",        //맨 마지막에 유져 아이디를 users 에서 찾아서 최종적으로 찍어준다.
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record) {
    let result = [];
    let answer = [];
    let users = {};     // users 는 최종 닉네임만 가지고 있는다.

    for (const el of record) {
        const [상태, 아이디, 닉네임] = el.split(' ')
        if (상태 === 'Enter') {
            users[아이디] = 닉네임;
            // console.log(users)
            result.push([아이디,'님이 들어왔습니다.'])
            console.log(result)
        }else if(상태 === 'Leave'){
            result.push([아이디,'님이 나갔습니다.'])
        }else if(상태 === 'Change'){
            users[아이디] = 닉네임;
        }
    }
    // console.log(users)
    // console.log(result)
    for (const [아이디,메세지] of result) {
        answer.push(users[아이디]+메세지)
    }
    // console.log(answer)
    
    return answer
}

solution(record);

// 2번 문제 실패율
// 링크 :https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/

// 실패율 === 아직 클리어 못한 플레이어 수 / 도달한 플레이어 수
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
//만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. (오름차순)

스테이지수    어느 스테이지까지 도달했는지   실패율대로 정렬한 스테이지수
    // N	    stages                       result
    // 5	    [2, 1, 2, 6, 2, 4, 3, 3]	 [3, 4, 2, 1, 5]
    // 4	    [4, 4, 4, 4, 4]	             [4, 1, 2, 3]

// 스테이지에 도달한 사람의 수
// 1stage === 1
// 2stage === 3
// 3stage === 2
// 4stage === 1
// 5stage === 0

// 실패율
// 1stage === 1/8 
// 2stage === 3/7 === 3/(8-1)
// 3stage === 2/4 === 2/(7-3)
// 4stage === 1/2 === 1/(4-2)
// 5stage === 0/1 === 0/(2-1)

//[2, 1, 2, 6, 2, 4, 3, 3].filter((user) => user === 3);

function solution(스테이지수, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i < 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        실패율.push(도달한사람수);
        }
    return 실패율;
}

solution(5,[2, 1, 2, 6, 2, 4, 3, 3])

// step2

function solution(스테이지수, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        console.log()
        let 확률 = 도달한사람수/유저수;
        유저수 -= 도달한사람수;
        실패율.push({stage:i, 확률:확률});
        }
    return 실패율;
}

solution(5,[2, 1, 2, 6, 2, 4, 3, 3])



// [
//     {stage: 1, 확률: 0.125}
//     {stage: 2, 확률: 0.42857142857142855}
//     {stage: 3, 확률: 0.5} // 4와 같은 확률이지만 오름차순이므로 3이 먼저 나와야함.
//     {stage: 4, 확률: 0.5}
//     {stage: 5, 확률: 0}
// ]

//result
// [3, 4, 2, 1, 5] 같은 확률이면 오름 차순으로.

// step3

function solution(스테이지수, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        let 확률 = 도달한사람수/유저수;
        유저수 -= 도달한사람수;
        실패율.push({stage:i, 확률:확률});
        }

    // 1, 3, 2, 4, 0

    // sort 의 내림차순
    // b - a
    // sort 의 오름차순
    // a - b
    실패율.sort((a, b) => {
        if(a.확률 === b.확률){
            return a.stage - b.stage;
        } else {
            return b.확률 - a.확률;
        }
    })
    


    return 실패율.map(x=> x.stage);
}

solution(5,[2, 1, 2, 6, 2, 4, 3, 3])


// 3. 20년도

// 문제 3  문자열 압축
// 링크 : https://tech.kakao.com/2019/10/02/kakao-blind-recruitment-2020-round1/
// aabbaccc -> a, a, b, b, a, c, c, c -> 2a2ba3c
// aabbaccc -> aa, bb, ac, cc -> aabbaccc
// aabbaccc -> aab, bac, cc -> aabbaccc
// aabbaccc -> aabb, accc -> aabbaccc

//'aabbaccc'.match(/[a-z]{1}/g); // 정규표현식 1나씩 쪼개기.

//step 1

function solution(s) {
    let answer = s.length;
    let len = s.length;

    for (let i = 1; i < len/2 + 1; i++) {
        const re = new RegExp(`[a-z]{${i}}`, 'g') 
        console.log(re); 
        let 잘린문자열 = s.match(re);
        console.log(잘린문자열);
    }

    return answer
}

solution('aabbaccc')

// step 2


function solution(s) {
    let answer = s.length;
    let len = s.length;

    if (len === 1) return 1

    for (let i = 1; i < len/2 + 1; i++) {
        const re = new RegExp(`[a-z]{${i}}`, 'g') 
        console.log(re); 
        let 잘린문자열 = s.match(re);
        console.log(잘린문자열);
        압축문자열 = '';
        let count = 1;
        for (let j = 0; j < 잘린문자열.length; j++) {
            if(잘린문자열[j] === 잘린문자열[j+1]){
                count += 1;
            } else if(count === 1){
                압축문자열 += `${잘린문자열[j]}`
            } else if(count > 1) {
                압축문자열 += `${count}${잘린문자열[j]}`
                count = 1;
            }
            console.log(압축문자열);
        }
        console.log(압축문자열);
    }

    return answer
}

solution('aabbaccc')

// step 3
function solution(s) {
    var answer = s.length;
    let len = s.length;

    if (len === 1) return 1;
    
    for(let i = 1; i <= len/2 + 1; i++){ //자르는 크기
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        // console.log(re)
        let 잘린문자열 = s.match(re);
        // console.log(잘린문자열)
        압축문자열 = ''
        let count = 1 //2a2b3c 여기서 앞에 나오는 숫자
        for (j = 0 ; j < 잘린문자열.length; j++) {
            if (잘린문자열[j] === 잘린문자열[j+1]) {
                //aa -> 2a // 뒤에 값을 봐서 같은지!
                count += 1;
            } else if (count === 1) {
                압축문자열 += `${잘린문자열[j]}`;
            } else if (count > 1) {
                // 왜 1보다 크냐면 aa가 1a1a가 아니기 때문!
                압축문자열 += `${count}${잘린문자열[j]}`;
                // 앞 문자열과 뒤 문자열이 다른 경우는
                count = 1;
            }
            // console.log(압축문자열);
        }
        if (len % i !== 0){
            압축문자열 += s.slice(-len % i)
        }
        // console.log(압축문자열);
        answer = Math.min(answer, 압축문자열.length)
    }
    return answer;
}

solution("aabbaccc")
solution("aabbaabbaccc") // accc를 추가하지 못하는 문제 발생


// 번외
// 입력 예시: aaabbcccccca
// 출력 예시: a3b2c6a1

let s = 'aaabbcccccca';
let 압축 = '';
let count = 1

for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]){
                count += 1
    } else if (count >= 1) {
        압축 += `${s[i]}${count}`;
        count = 1;
    }
}

console.log(압축);



// 4. 21년도