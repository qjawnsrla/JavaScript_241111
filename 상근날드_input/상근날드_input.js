function calculatePrice() {
  const burgers = [
    parseInt(document.getElementById("burger1").value, 10),
    parseInt(document.getElementById("burger2").value, 10),
    parseInt(document.getElementById("burger3").value, 10),
  ];

  const drinks = [
    parseInt(document.getElementById("drink1").value, 10),
    parseInt(document.getElementById("drink2").value, 10),
  ];

  const b_min = Math.min(...burgers);
  const d_min = Math.min(...drinks);
  const result = b_min + d_min - 50;

  document.getElementById(
    "result"
  ).innerHTML = `<h2 class='box'> 가장 저렴한 세트의 가격은 : ${result}원</h2>`;
}
