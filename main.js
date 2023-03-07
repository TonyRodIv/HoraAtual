function carregar() {
  console.log("Atualizando...");
  let hour = document.getElementById("hour");
  let wall = document.getElementById("wallp");
  let data = new Date();
  let horaB = data.getHours();
  let hora = String(horaB).padStart(2,'0')
  let minutosB = data.getMinutes();
  let minutos = String(minutosB).padStart(2,'0')
  hour.innerHTML = `${hora}:${minutos}`;
  if (hora >= 3 && hora < 6) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_1 (Grande).jpeg")';
  
  } else if (hora == 6) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_2 (Grande).jpeg")';
  
  } else if (hora >= 7 && hora < 9) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_3 (Grande).jpeg")';

  } else if (hora == 9) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_4 (Grande).jpeg")';

  } else if (hora == 10) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_5 (Grande).jpeg")';

  } else if (hora == 11) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_6 (Grande).jpeg")';

  } else if (hora == 12) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_7 (Grande).jpeg")';

  } else if (hora == 13) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_8 (Grande).jpeg")';

  } else if (hora == 14) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_9 (Grande).jpeg")';

  } else if (hora == 15) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_10 (Grande).jpeg")';

  } else if (hora == 16) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_11 (Grande).jpeg")';

  } else if (hora == 17) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_12 (Grande).jpeg")';

  } else if (hora >= 18 && hora < 20) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_13 (Grande).jpeg")';

  } else if (hora >= 20 && hora < 21) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_14 (Grande).jpeg")';

  } else if (hora >= 21 && hora <= 22) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_15 (Grande).jpeg")';

  } else if (hora >= 23 || hora < 3) {
    wall.style.backgroundImage = 'url("./img/mojave_dynamic_16 (Grande).jpeg")';

  }
}
console.log(carregar())
setInterval(carregar, 2000);
