// 자바스크립트는 원시 타입을 제외하면 모든 데이터 타입이 객체타입
// 객체 타입의 자료형에는 배열, 객체 리터럴, 함수 등이 있음
// 배열 : 복수의 데이터를 정의할 수 있는 자료형, 인덱스 기반

let score = [80, 99, 77, 65];
console.log(score[1]); // 인덱스를 기반으로 값을 찾을 수 있음

// 자바스크립트의 배열은 데이터타입이 달라도 됨
let array = [
  "아이브",
  "안유진",
  21,
  true,
  [99, 88, 60],
  ["장원영", "이서", "레이"],
];
console.log(array);
console.log(array[5][0]);

// 객체 리터럴(오브젝트) : 객체를 정의하는 가장 간단한 방법, 중괄호 사용{}
let memberInfo = {
  kor: 88,
  eng: 90,
  name: "장원영",
  age: 20,
  addr: "서울시 강남구 역삼동",
  score: [99, 88, 77],
  getInfo: function () {
    const avg = score[0];
    return `이름:${this.name}, 나이:${this.age}, 주소:${this.addr}, 성적:${this.score}`;
  },
};
console.log(memberInfo.getInfo());

// 비교 연산자 : 자바스크립트에서는 동등연산자와 일치연산자가 있음
console.log(1 == "1"); //true, 동등연산자, 값이 같은지 확인
console.log(1 === "1"); //false, 일치연산자, 값과 타입이 같은지 확인
console.log(1 !== "1"); //true

// 형변환 : 묵시적 형변환과 명시적 형변환
let num1 = 10 + "10"; // 1010, 숫자와 문자열을 결합하면 문자열로 자동 형변환
console.log(num1);

let num2 = 10 + Number("10");
console.log(num2);

let num3 = 10 + String(10); // 명시적 형변환과 묵시적 형변환이 동시에 일어남
console.log(num3);
