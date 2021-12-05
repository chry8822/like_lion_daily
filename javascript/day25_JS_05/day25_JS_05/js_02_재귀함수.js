팩토리얼, 문자열뒤집기, 피보나치
factorial(3)
function factorial(3) {
  if(3 <= 1){
    return 3;
  }  
  const result = 3 * 2 // result === 6
  console.log(result);
  return result;
}

function factorial(2) {
  if(2 <= 1){
    return 2;
  }  
  const result = 2 * 1; // 2
  console.log(result); // 2
  return result; // 2
}

function factorial(1) {
  if(1 <= 1){
    console.log(1);
    return 1;
  }  
  const result = 1 * 0;
  console.log(result);
  return result;
}

function returnFunction(n) {
  return n * returnFunction(n-1);
}

returnFunction(5) * returnFunction(4) * returnFunction(3) * returnFunction(2) ;



// factorial(5) == 5 * factorial(4) == 5 * 24
// factorial(4) == 4 * factorial(3) == 4 * 6
// factorial(3) == 3 * factorial(2) == 3 * 2
// factorial(2) == 2 * factorial(1) == 2 * 1
// factorial(1) == 1


function sigma(n) {
  if(n <= 1){
    return n
  }  
  return n + sigma(n-1)

}

// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1
// sigma(1) == 1



function reverse (text){
  text += ''
    if(text.length <= 1){
        return text
  }
  return reverse(text.slice(1)) + text[0] 
}

reverse('olleh')

// reverse('olleh') == reverse('lleh') + 'o'  == 'hell' + 'o'
// reverse('lleh')  == reverse('leh')  + 'l'  == 'hel' + 'l'
// reverse('leh')  == reverse('eh')  + 'l'  == 'he' + 'l'
// reverse('eh')  == reverse('h')  + 'e'  == 'h' + 'e'
// reverse('h') == 'h' 

function fib(n) {
  if(n <= 2){
    return n
  }  
  return fib(n-1) + fib(n-2)

}

// 왼쪽 function 만 따라갔다.
// fib(4) == fib(3) + fib(2) 
// fib(3) == fib(2) + fib(1) == 3
// fib(2) == 2
// fib(1) == 1 

// 오른쪽 값인 fib(2) 를 다시 해야한다.
// fib(2) == 2


// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = []
function fibo(n){
  if (n in fibo_cache) {
    return fibo_cache[n]
  }
  fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
  return fibo_cache[n]
}

// fibo_cache = [0, 1, 1, 2, fibo(2) + fibo(3)]
// fibo(4) == fibo_cache[4] == fibo(2) + fibo(3) 
// fibo(2) == fibo_cache[2] == fibo(0) + fibo(1)

// fibo(0) == fibo_cache[0] == 0
// fibo(1) == fibo_cache[1] == 1
// fibo(3) == fibo_cache[3] == fibo(1) + fibo(2)
// fibo(1) == 1
// fibo(2) == 2


const node2 = { value: 2, children: [] }
const node7 = { value: 7, children: [], parent: node2}
const node5 = { value: 5, children: []}
const node22 = { value: 2, children: []}
const node6 = { value: 6, children: []}
const node55 = { value: 5, children: []}
const node11 = { value: 11, children: []}
const node9 = { value: 9, children: []}
const node4 = { value: 4, children: []}

node2.children.push(node7);
node2.children.push(node5);
node7.children.push(node22, node6);
node6.children.push(node55, node11)
node5.children.push(node9);
node9.children.push(node4);

function travel(node) { // node2
  console.log(node.value);
  for(const childNode of node.children) { // chidren: [node7, node5]
    // node5
    travel(childNode);
  }
}

arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach((x) => {
  console.loe(x);
  if(x === 5) return;
})



travel(node2);