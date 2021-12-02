'5, 4, 10, 2, 5'

let data = '5, 4, 10, 2, 5'.split(',')
// split 문자열을 일정한 구분자로 잘라서 배열로 저장
let 합계 =0;
for (let i of data){
  합계 += parseInt(i)/data.length;
}

console.log(합계);


// 가독성과 연산속도가 더 빠르다 
// 나누기 연산이 한번만 하기 때문이다.
let data = '5, 4, 10, 2, 5'.split(',')
// split 문자열을 일정한 구분자로 잘라서 배열로 저장
let 통계 =0;
for (let i of data){
 통계 += parseInt(i);
}

console.log(통계/data.length);



//다음 array의 각 자리수의 합을 구하세요.
let data = [11, 22, 33, 111, 2];
data + '';                        //스트링으로 만들기
data = '11,22,33,111,2'.replace(/,/g,''); //전체 리플레이스 하기.
01122331112

// 여기서 01122331112 이게 데이타로 들어가고 parseInt 가되는데
// 왜 17일됨

let 합계 = 0;
for (let i of data) {  //01122331112 이게 for 문으로 들어가면
  합계 += parseInt(i); // '0''2''3''4' 이렇게 문자열이기때문에 
}                      // parseInt 로 형변환해서 숫자로 더해준다.

console.log(합계);


//

// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';


// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);
