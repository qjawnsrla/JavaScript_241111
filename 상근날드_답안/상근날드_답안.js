function getPrice() {
  let menu = [];
  for (let i = 0; i < 5; i++) {
    menu[i] = Number(document.getElementById("menu" + (i + 1)).value);
  }
  let minBurger = menu[0];
  let minDrink = menu[3];
  for (let i = 0; i < menu.length; i++) {
    if (i < 3 && minBurger > menu[i]) minBurger = menu[i];
    if (i > 2 && minDrink > menu[i]) minDrink = menu[i];
  }
  document.getElementById("value").innerHTML = minBurger + minDrink - 50 + "원";
}
