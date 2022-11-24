'use strict';

function executePayment(paymentType) {
 if (paymentType == 'KAKAO_PAYMENT') {
  return '카카오 결제 처리';
 } else if (paymentType == 'NAVER_PAYMENT') {
  return '쿠팡 결제 처리';
 } else if (paymentType == 'COUPANG_PAYMENT') {
  return '쿠팡 결제 처리';
 } else if (paymentType == 'PAYCO_PAYMENT') {
  return '페이코 결제 처리';
 } else if (paymentType == 'APPLE_PAYMENT') {
  return '애플 결제 처리';
 }
}

console.log(executePayment('KAKAO_PAYMENT'));

// 위의 코드를 더 가독성 좋게 바꿔보자
const paymentMap = {
 KAKAO_PAYMENT: '카카오 결제 처리2',
 NAVER_PAYMENT: '쿠팡 결제 처리2',
 COUPANG_PAYMENT: '쿠팡 결제 처리2',
 PAYCO_PAYMENT: '페이코 결제 처리2',
 APPLE_PAYMENT: '애플 결제 처리2',
};

function executePayment2(paymentType) {
 return paymentMap[paymentType];
}

console.log(executePayment2('KAKAO_PAYMENT'));
