//숫자형 (Number)
var num = 10;

document.write(num, '<br>');  // 10
document.write(num/3, '<br>');  // 3.3333..
document.write(parseInt(num/3), '<br>');  // 3

/* 숫자형의 사칙연산 */
document.write("더하기 : ", 2 + 2.5, '<br>');  // 4.5
document.write("빼기 : ", 5 - 7, '<br>');  // -2
document.write("곱하기 : ", 3 * 2, '<br>');  // 6
document.write("나누기 : ", 2/2, '<br>'); // 1

/*특수 숫자 값*/
document.write("무한대 : ", 1/0,'<br>'); // Infinity
document.write( "숫자가 아님" / 2 ); 
// NaN, 문자열을 숫자로 나누면 오류가 발생합니다.


// let number = 1e9;
// let number = 123e-5;
// let number = 1.23e9;
// let number = 0b1010; //0, 1 -> 10
// let number = 0o12; //0 ~ 7 -> 10
// let number = 0xff; //0 ~ f -> 10
// let number = parseInt('13', 10)
let number = parseFloat('13.3px.10')

document.write(number, '<br>');
document.write(0.1 + 0.2 == 0.3, '<br>');
document.write(9999999999999999999, '<br>');

document.write("Nan?  " , isNaN(6), '<br>');
document.write("Nan?  " , isNaN("d"));