let 회원정보 = [
  {
    아이디 : 'goggg8822',
    패스워드 : 'd86a60c77dfb53af83a4ff627a30d85b2ac5fa23008af8262f1f682ad586241d',
    성별 : '남',
    핸드폰번호 : '111-1111-1111',
    이메일 : 'ggg@naver.com',
    가입연도 : '2022-01-01',
    주접속위치 : '123.432.432.123'
},
 {
    아이디 : 'jjang',
    패스워드 : 'd86a60c77dfb53af83a4ff627a30d85b2ac5fa23008af8262f1f682ad586241d',
    성별 : '남',
    핸드폰번호 : '222-1111-1111',
    이메일 : 'jjang@naver.com',
    가입연도 : '2021-01-01',
    주접속위치 : '123.442.432.123'
},
 {
    아이디 : 'google',
    패스워드 : 'd86a60c77dfb53af83a4ff627a30d85b2ac5fa23008af8262f1f682ad586241d',
    성별 : '여',
    핸드폰번호 : '333-1111-1111',
    이메일 : 'google@naver.com',
    가입연도 : '2020-03-01',
    주접속위치 : '544.122.432.123'
}
]

// 1번 남자인 사람
회원정보.filter(x => x.성별 === '남');

// 2번 남자이면서 2021 에 가입한 사람
회원정보.filter(x => x.성별 ==='남' && x.가입연도.split("-") === '2021');

              (el) => el.성별 === "남" && el.가입연도.split("-")[0] === "2021"
// 3번 아이디가  jjang 인 사람을 검색하세요
회원정보.find(x => x.아이디 === 'jjang') //find 는 true 를 찾으면 멈춘다. filter 다 찾아본다. 메모리 효율에서 유일한 값은 find 를 이용해서 찾는게 효율적이다.


// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [{
  id : 1,
  title : 'title1',
  content : 'content1',
  section : '백수'
}, {
  id : 2,
  title : 'title2',
  content : 'content2',
  section : '운동'
}, {
  id : 3,
  title : 'title3',
  content : 'content3',
  section : '게임'
},
{
  id : 4,
  title : 'title4',
  content : 'content4',
  section : '개발'
}
];

let s = '개발';
let data = s? blogs.filter(b => b.section === s) : blogs;