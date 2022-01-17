const aespa = ["카리나","윈터","지젤","닝닝"];

// aespa.forEach((item, index) => {   // 원본 데이터를 건드림.
//     aespa[index] = item + '💖';
// })

const aespa2 = aespa.map((item) => (item + '💖'));   // map 은 새로운 배열을 반환.
console.log(aespa);         
console.log(aespa2);

// 원본 데이터를 건들지 않고 새로운 배열을 사용할때 map으로 사용한다.