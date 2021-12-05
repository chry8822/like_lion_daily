// call by value
array 나 object 는 변경된다.
배열이나 오브젝트를 넘길때는 주의 해야한다.

let array = [100, 200, 300];

function test(a) {
    a[0] = 1000;
}

test(array)

array
let array = [1000, 200, 300];
//바뀜 원본의 영역을 바꾼다.



let x = 10;
function test(a) {
    a = 10000; // a 가 x 를 바라 보다가 a 의 새로운 할당이 생겨서 a 가 10000을 바라본다.
}               // 그래서 x 는 계속 10을 바라보기 때문에 10000이 되지 않고 10 이 된다.
test(x)

x
10
//안바뀜