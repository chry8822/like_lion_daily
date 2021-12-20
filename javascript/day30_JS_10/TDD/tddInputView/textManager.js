
  // 원시값은 값을 복사하기때문에 항상 새로 할당이 된다. 만들어지는 인스턴스마다 값을 공유하는게 아니고
  // 복사하기때문에 원시값이 아닌 객체자료형으로 만든다. 
  // 요약 원시값은로 만들면 값의 공유가 힘들다.

const TextManager = (() => {

  // 원시값으로 만들면 인스턴스간에 값 공유가 불가능합니다.
  let value = { data: "Hello Lions!" };

  function innerTextManager() { }

  innerTextManager.prototype.getValue = function () {
      return value.data;
  }

  innerTextManager.prototype.setValue = function (newValue) {
      value = newValue;
  }

  return innerTextManager;
})();