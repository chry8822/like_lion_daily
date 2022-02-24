// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
const fs = require('fs');

// rename, readFile, writeFile, appendFile, copyFile, mkdir


// 1번 선택한 파일을 원하는 파일로 바꾼다.(이름.확장자등)
// let 변수 = '오국화' // 사용자 이름
// let 날짜 = new Date()
// fs.rename(
//     './test.txt',
//     `./${변수}${날짜.getMilliseconds()}.png`,
//     (err) => {
//         console.log(err);
// })

// 2번 파일 읽기.
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     console.log(err);
//     console.log(data);
// })


// 3번 폴더의 파일들 보여주기(읽기).
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 4번 해당 폴더에 파일 만들기.
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err)
// });

// 5번 해당 파일에 붙여 넣기.
// fs.appendFile('./test2.txt', 'hello world 3', (err)=>{
//     console.log(err)
// });

 // 6 번 선택 폴더를 선택한 이름으로 복사하기 (내용물도 다 복사됨)
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err)
// });

//7 번 해당 파일들을 원하는 폴더명으로 만들어서 넣는다.
fs.mkdir('./yoyo', (err)=>{
  console.log(err)
});

