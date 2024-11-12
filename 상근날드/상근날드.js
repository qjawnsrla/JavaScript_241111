// 실습문제 : 상근날드
// 3개의 햄버거와 2개의 음료의 가격을 입력 받아 제일 싼 세트 메뉴의 가격 구하기(50원 할인)

// - prompt로 연속해서 햄버거 3개 가격과 음료 2개의 가격을 입력 받음
// - 햄버거 3개 중 가장 싼 가격을 선택하고 음료둘 중 싼 음료의 가격을 합산하고 여기서 50원 할인
// - 결과를 웹화면에 이쁘게 출력

// let burger1 = parseInt(prompt("첫번째 햄버거 가격 입력 : ", ""), 10);
// let burger2 = parseInt(prompt("두번째 햄버거 가격 입력 : ", ""), 10);
// let burger3 = parseInt(prompt("세번째 햄버거 가격 입력 : ", ""), 10);

// let drink1 = parseInt(prompt("첫번째 음료 가격 입력 : ",""), 10);
// let drink2 = parseInt(prompt("두번째 음료 가격 입력 : ",""), 10);

const burgers = [];
const drinks = [];

for (i = 0; i < 3; i++) {
  burgers[i] = parseInt(prompt(i + 1 + "번째 햄버거 가격 입력 : ", ""), 10);
}

for (i = 0; i < 2; i++) {
  drinks[i] = parseInt(prompt(i + 1 + "번째 음료 가격 입력 : ", ""), 10);
}

let b_min, d_min;
b_min = Math.min(burgers[0], burgers[1], burgers[2]);
d_min = Math.min(drinks[0], drinks[1]);

let result = b_min + d_min - 50;

document.write(`<h2 class='box'> 가장 저렴한 세트의 가격은 : ${result}원</h2>`);
