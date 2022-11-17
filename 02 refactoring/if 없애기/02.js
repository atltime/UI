'use strict';

function payOnKakao() {
 console.log('Kakao pay 처리중');
}
function payOnNaver() {
 console.log('Naver pay 처리중');
}
function payOnCoupang() {
 console.log('Coupang pay 처리중');
}
function payOnPayco() {
 console.log('Payco pay 처리중');
}
function payOnApple() {
 console.log('Apple pay 처리중');
}
function sendLog() {
 console.log('..로그 보냄...');
}
function executePayment(paymentType) {
 if (paymentType == 'KAKAO_PAYMENT') {
  payOnKakao();
 } else if (paymentType == 'NAVER_PAYMENT') {
  sendLog();
  payOnNaver();
 } else if (paymentType == 'COUPANG_PAYMENT') {
  sendLog();
  payOnNaver();
 } else if (paymentType == 'PAYCO_PAYMENT') {
  sendLog();
  payOnPayco();
 } else if (paymentType == 'APPLE_PAYMENT') {
  sendLog();
  payOnApple();
 }
}

// executePayment('KAKAO_PAYMENT');

// 위의 코드를 더 가독성 좋게 객체 literal로 바꿔보자
const paymentMap = {
 KAKAO_PAYMENT() {
  payOnKakao();
 },
 NAVER_PAYMENT() {
  sendLog();
  payOnNaver();
 },
 COUPANG_PAYMENT() {
  sendLog();
  payOnNaver();
 },
 PAYCO_PAYMENT() {
  sendLog();
  payOnPayco();
 },
 APPLE_PAYMENT() {
  sendLog();
  payOnApple();
 },
};

function executePayment2(paymentType) {
 return paymentMap[paymentType]();
}
executePayment2('KAKAO_PAYMENT');
executePayment2('COUPANG_PAYMENT');
