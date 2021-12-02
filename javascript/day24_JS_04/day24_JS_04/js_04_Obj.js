let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
  이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'},
  10 : 100
}
person.소속 = '바울랩';

person.name
'이호준'
person['name']
'이호준'

person.이력.첫번째직장
'하나'
person['이력']['첫번째직장']
'하나'

person[10]
100
person['10']
100
person.10
//Uncaught SyntaxError: Unexpected number


// 에러 발생
person.'name'
person[name]

Object.keys(person) //키 값을 뽑아낸다
(6) ['10', 'name', 'age', 'height', 'weight', '이력']
Object.values(person) //벨류값을 뽑아낸다.
(6) [100, '이호준', 10, 30, 40, {…}]
Object.entries(person) //
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]


let data = Object.entries(person);
//Object.entries (오브젝트)를 변수의 값으로 넣어준뒤
//배열로 불러오면 키와,벨류값을 함께 뽑아낸다.

data[0]
(2) ['10', 100]
data[1]
(2) ['name', '이호준']
data[3]
(2) ['height', 30]
data[4]
(2) ['weight', 40]
data[5]
(2) ['이력', {…}]
      0: "이력"
      1: {첫번째직장: '하나', 두번째직장: '둘'}
      length: 2
      [[Prototype]]: Array(0)
      
//반복문으로 키와 벨류 값을 한번에 불러온다.
for (let i of data){
  console.log(i[0],i[1]);
}
// let 에 [키, 벨류] (언팩킹) 를 지정해서도 불러 올수있다.
for (let [i, j] of Object.entries(person)){
  console.log(i, j);
}

//언팩킹 딥하게 해보기..
for (let [[i, j], k] of [[[1, 2], 2], [[1, 2], 4]]) {
  console.log(i, j, k);
}