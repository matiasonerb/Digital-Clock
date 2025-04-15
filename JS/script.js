//Relógio Digital
function atRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    document.getElementsByClassName("relogio")[0].textContent = `${horas}:${minutos}:${segundos}`;
  }
  setInterval(atRelogio, 1000);
  atRelogio();

//Estrelas no Fundo
const canvas = document.getElementsByClassName('estrelas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrelas = [];

for (let i = 0; i < 100; i++) {
  estrelas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    d: Math.random() * 100
  });
}

function desEstrelas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.shadowBlur = 2;
  ctx.shadowColor = "#0f0";
  for (let i = 0; i < estrelas.length; i++) {
    let s = estrelas[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

function animaçãoEstrelas() {
  for (let i = 0; i < estrelas.length; i++) {
    estrelas[i].y += 0.2;
    if (estrelas[i].y > canvas.height) {
      estrelas[i].y = 0;
      estrelas[i].x = Math.random() * canvas.width;
    }
  }
  desEstrelas();
  requestAnimationFrame(animaçãoEstrelas);
}

desEstrelas();
animaçãoEstrelas();


//Data do Relógio
function atData() {
  const agora = new Date();
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const diaSemana = dias[agora.getDay()];
  const dia = agora.getDate();
  const mes = meses[agora.getMonth()];
  const ano = agora.getFullYear();

  document.getElementsByClassName('data')[0].textContent = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

atData();


//Botão
let cont = 0;

function Clicker() {
    cont++;
    document.getElementsByClassName("contador")[0].textContent = cont;
}