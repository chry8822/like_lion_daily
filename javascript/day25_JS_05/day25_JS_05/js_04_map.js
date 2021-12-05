// map
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);
                  //화살표함수( 즉시 실행 함수로 일반 함수를 정의해서 넣거나 익명함수를 직접 넣을 수도 있다.)
array
(4) [1, 4, 9, 16]

값1
(4) [2, 8, 18, 32]


  
let 결과 = '';
(function () {
    for(var x of array){        
    결과 += x * 2    
}}());


let array = [1, 4, 9, 16];
for(let i = 0; i < array.length; i++) { <— array.map의 영역
	익명콜백함수(array[i])
} <— array.map의 영역
const 익명콜백함수 = x => x * 2
  

//  4cm를 배열로 표현한다고 억지로 표현해보면
//  [1cm, 1cm, 1cm, 1cm]인 거고
//  그럼 길이가 4
//  인덱스는 0 ,1, 2, 3

// 1번째 요소를 가리키는 인덱스 1 - 1 = 0
// 2번째 요소를 가리키는 인덱스 2 - 1 = 1



function 제곱(x){
    return x ** 2
}
//함수를 만들고 맵에 콜백 함수를 넣어서 사용할수있다.
값2 = array.map(제곱);

(4) [1, 16, 81, 256]

array
(4) [1, 4, 9, 16]

값2
(4) [1, 16, 81, 256]



//맵에 메서드를 쓰고 연달아 맵에 함수를 또 함께 사용할수 있다.
// 메소드 체이닝 (Method chaining)
array.map(Math.sqrt).map(x=>x**3)
(4) [1, 8, 27, 64]


//맵으로 배열안에 키값 또는 벨류와 키값을 가져올수있다.


let data = [{
             반 : 1,
             번 : 1,
             이름 : '국화',
             중간고사점수 : 100
              },
            {
             반 : 1,
             번 : 2,
             이름 : '방구',
             중간고사점수 : 40
            },
            {
             반 : 1,
             번 : 3,
             이름 : '희원',
             중간고사점수 : 15
            },
            {
             반 : 1,
             번 : 4,
             이름 : '뽀짝',
             중간고사점수 : 25
            }]


            console.log(data.map(x => x.중간고사점수))
            console.log(data.map(x => [x.이름,x.중간고사점수]))


            let s = 0;
            data.map(x => x.중간고사점수).forEach(y => s+=y)

            undefined

            s
            180




            let array = [1, 2, 3, 4]
            let result = []
            function 제곱(x) {
                return x ** 2
            }

            array.forEach(x => result.push(x**2));

            undefined

            result
            (4) [1, 4, 9, 16]



            let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
            let newData = data.map(a => a.map(n => n *2));



// Map 객체는 키-값 쌍을 가지는 객체 자료형의 한 종류입니다.

          let m = new Map();
            // Map에 값을 넣기
                m.set('하나', '1');
                m.set(1, '하나');
                m.set(true, 1);
                m.set(false, 0);

            // Map의 값에 접근하기
                console.log(m.get('하나'));
                console.log(m.get(true));

            // Map의 값이 있는지 확인하기
               console.log(m.has('하나'));

            // Map의 값을 제거하기
                console.log(m.delete('하나'));
                console.log(m.has('하나'));
                console.log(m);

            // Map의 크기를 확인하기
                console.log(m.size);