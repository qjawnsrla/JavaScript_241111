// 시간과 분을 입력, 45분 일찍 시간이 설정되도록 변경하는 프로그램
// 시간은 24시간제로 하고, 0:30 으로 입력된다면 23:45 로 출력되도록 하는 프로그램
// parseInt() 함수는 정수로 반환, Math.floor을 사용해도 동일한 효과

let hour = parseInt(prompt("시간 입력 : ", ""), 10);
let min = parseInt(prompt("분 입력 : "), 10);
let totalMin = hour * 60 + min;

if (totalMin < 45) totalMin = 24 * 60 + min;
totalMin -= 45;
hour = parseInt(totalMin / 60); //소수점 이하를 날리기 위해 정수로 형변환
min = totalMin % 60;
document.write("<h2>" + `${hour}시 ${min}분` + "</h2>");
