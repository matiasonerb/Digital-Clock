function atRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    document.getElementById("relogio").textContent = `${horas}:${minutos}:${segundos}`;
  }

  setInterval(atRelogio, 1000);
  atRelogio();