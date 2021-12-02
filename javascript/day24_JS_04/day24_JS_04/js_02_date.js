let d = new Date(); //변수 d 에 new Data();를 넣어준다.

d //호출

Wed Dec 01 2021 10:35:01 GMT+0900 (한국 표준시) //결과

12월 1 일
// 실시간이 아닌 new Data()를 불러온 시점의 시간이다.
d.getMonth()
11 //12월    월은 0부터 시작
d.getDate()
1  //일은 1부터 시작
d.getDay()
3  //일요일부터 0
d.getHours()
10  //시간은 정상
d.getMinutes()
35  //해당 new data()를 불러온 시점의 시작.
d.getSeconds()
1   //해당 new data()를 불러온 시점의 시작.
d.getFullYear()
2021 // 년도. .getYear() 는 사용하지 말라고 나옴.