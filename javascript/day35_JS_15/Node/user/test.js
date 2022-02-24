// const fs = require("fs");

// fs.readFile("./username.csv", "utf8", (err, data) => {
//   data.split("\r\n").slice(1);
//   console.log(data);
// });

// const fs = require("fs");

// fs.readFile("./user.csv", "utf8", (err, csvdata) => {
//   // console.log(err);
//   csvdata
//     .split("\r\n")
//     .slice(1)
//     .map((v) => v.split(", "))
//     .forEach((value) => {
//       [이름, 번호, 직업] = value;
//       fs.mkdir(`./${이름}`, (err) => {});
//       userWriteData = `Username : ${이름} \nIdentifier : ${번호} \nJob : ${직업}`;
//       fs.writeFile(`./${이름}/userinfo.txt`, userWriteData, (err) => {});
//     });
// });

const fs = require("fs");

fs.readFile("./username.csv", "utf8", (err, data) => {
    console.log(data)
  data
    .split("\n") // splice() 주어진거 기준으로 자르고 배열로 반환한다 (split 은 원본을 바꾼다.)
    .slice(1) // 첫번째 배열이 타이틀이라 슬라이스로 잘라준다. 자른 배열을 반환해준다.
    .map((v) => v.split(", ")) // ,기준으로 잘라서 나눠준다.
    .forEach(([username, identifier, job]) => {
      // username 으로 폴더만듬
      fs.mkdir(`./${username}`, (err) => {
        // 폴더생성 명령 최종 완료후 (성공 실패 모두) ((err)를 실행 콜백함수)
        if (err) {
          // 성공을 하면 if 문을 안타고
          console.log(err);
          return; // 실패하면 폴더생성 안되고 다음 함수도 실행안됨 (안쪽에 있는것들.)
        }
        const text = `Username : ${username}\nIdentifier : ${identifier}\nJob : ${job}`;
        fs.writeFile(`./${username}/userinfo.txt`, text, (err) => {
          if (err) {
            console.log(err);
            return;
          }
        });
      });
    });
});
