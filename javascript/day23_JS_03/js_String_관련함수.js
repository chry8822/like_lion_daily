//String 관련 함수
let s = 'abcedfABCDEF';

console.dir(s);
abcedfABCDEF
//스트링의 갯수를 보여준다.
s.length
12
//작성한 스트링의 인덱스(위치를 가리키는 숫자를 인덱스(index)라고 합니다.) 값을 보여준다. 
s.indexOf('ced')
2

s.search('ABC')
6

s.search('Z')
-1
// slice 지정한 위치까지의 값을 보여준다.
// 음수는 2. -2 일때 2번째 인덱스에서 시작해서 마지막에서 -2 된 값까지 보여준다.
s.slice(0, 3) 
'abc'
s.slice(3, 7)
'edfA'
s.slice(4, 8)
'dfAB'
s.slice(1, 3)
'bc'

// substr 지정한 값부터 지정한 값까지 slice 와 비슷지만 다름
// 지정한 숫자부터 지정한 숫자의 갯수만큼 보여줌
s.substr(6, 3)
'ABC'
s.substr(6, 4)
'ABCD'
s.substr(6, 5)
'ABCDE'

// slice 와 비슷하게 지정한 위치의 값을 보여준다.
// 음수로 지정했을때 다른데 2, -1 면 음수를 0로 만든다
s.substring (6, 9)
'ABC'
s.substring (5, 9)
'fABC'
s.substring (3, 9)
'edfABC'

//지정한 스트링을 지정한 스트링으로 변환한다(대체).
s.replace('ABC', '오국화')

'abcedf오국화DEF'