// 객체지향

// 1. 모듈 패턴 - 값을 은닉하기 위해 클로져테크니을 사용한다.
// 값을 은닉할수 있다. 
function person (){
  let age = 35;

  return {
    getAge : function() { return age},
    setAge : function(data) { age = data }
  }
}

const myPerson = Person();
person.getAge();
console.log(myPerson.getAge());

// 2. 사용자 정의 타입 패턴
// 생성자 함수, 예) person이라는 type 을 만들어주는 함수
function PersonType() {
  this.age = 35;  // 외부에서 값을 불러올수있다. 값을 숨길수 없다.
}// 생성자 함수가 만드는 인스턴스를 가르킨다.

PersonType.prototype.getAge = function () {
  return this.age
}
e
const instancePerson = new PersonType(); // PersonType 생성자 함수의 인스턴스 생성
instancePerson.getAge()                  // PersonType의 함수의 this 는 인스턴스를 가르킨다.
console.log(instancePerson.getAge());
instancePerson.age // 이렇게 해도 접근이 가능하다.


// 3. 모듈 + 사용자 정의 타입

function PersonType2() {
   let age = 25;

   function innerPersonType() {}
   innerPersonType.prototype.getAge = function () {
     return age;
   }

   return innerPersonType;
}

const Person3 = PersonType2(); //  function innerPersonType() 의 리턴값을 Person3 에 할당
const person3 = new Person3(); //  person3 를 innerPersonType() 의 인스턴스로 생성
console.log(person3.getAge()); //  인스턴스가된 person3 로 클로저 접근가능 age를 호출할수 있다. 

// IIFE 패턴으로 만들기.

const PersonTpye3 = (function () { // 즉시실행 함수로 리턴값을 바로 상수에 할당해준다.
  let age = 25;

  function innerPersonType() {}
  innerPersonType.prototype.getAge = function () {
    return age;
  }

  return innerPersonType;
})();

const personTpye3 = new PersonTpye3(); // 리턴값을 인스턴스로 생성해주면
console.log(personTpye3.getAge()); // 인스턴스에서 클로져함수에 접근할수 있게된다.