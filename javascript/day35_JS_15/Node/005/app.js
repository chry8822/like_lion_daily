// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require('path');

console.log(`구분자 : ${path.sep}`); 
// 구분자는 os 마다 다르기 때문에 폴더나 파일 경로를 사용할때 path.sep을 사용해야 한다.
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
// 이렇게 합쳐야됨.
console.log(path.join(__dirname, 'source')) 
console.log(path.join(__dirname, 'app.js')) 


// 이렇게 합치면 안됨
console.log(__dirname + '/'); 

console.table(path.parse(__filename).name);
 //객체라서 .name 하면 name만 볼수있음
