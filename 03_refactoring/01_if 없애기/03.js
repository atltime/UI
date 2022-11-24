const naverLogin = (id) => {
 return '네이버';
};
const kakaoLogin = (id) => {
 return '카카오';
};
const facebookLogin = (id) => {
 return '페이스북';
};

const socialLogin1 = (where, id) => {
 let domain;
 if (where == 'naver') {
  domain = naverLogin(id);
 } else if (where == 'kakao') {
  domain = kakaoLogin(id);
 } else if (where == 'facebook') {
  domain = facebookLogin(id);
 }

 return `${domain} ${id}`;
};

// console.log(socialLogin1('naver', 'kim'));
// console.log(socialLogin1('facebook', 'kim'));

// 위의 코드를 리터럴 객체로 리팩토링 해보자
// step1
const socialLogin2 = (where, id) => {
 let domain;
 switch (where) {
  case 'naver':
   domain = naverLogin(id);
   break;
  case 'kakao':
   domain = kakaoLogin(id);
   break;
  case 'facebook':
   domain = facebookLogin(id);
   break;
 }
 return `${domain} ${id}`;
};

// console.log(socialLogin2('naver', 'kim'));
// console.log(socialLogin2('facebook', 'kim'));

// step2
const executeLogin3 = (where, id) => {
 switch (where) {
  case 'naver':
   return naverLogin(id);
  case 'kakao':
   return kakaoLogin(id);
  case 'facebook':
   return facebookLogin(id);
 }
};
const socialLogin3 = (where, id) => {
 const domain = executeLogin3(where, id);
 return `${domain} ${id}`;
};

// console.log(socialLogin3('naver', 'kim'));
// console.log(socialLogin3('facebook', 'kim'));

// step3
const SocialLoginMap = {
 naver: naverLogin,
 kakao: kakaoLogin,
 facebook: facebookLogin,
};
const socialLogin4 = (where, id) => {
 const domain = SocialLoginMap[where](id);
 return `${domain} ${id}`;
};

console.log(socialLogin4('naver', 'kim'));
console.log(socialLogin4('facebook', 'kim'));
