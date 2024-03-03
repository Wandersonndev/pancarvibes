// Função para formatar o tempo restante
function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Função principal para a contagem regressiva
function startCountdown() {
  let totalSeconds = 20 * 60; // 20 minutos em segundos
  const countdownElement = document.getElementById('countdown');

  function updateCountdown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    countdownElement.textContent = formatTime(minutes, seconds);

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      clearInterval(countdownInterval);
      // Iniciar um novo ciclo ou tomar a ação desejada quando a contagem regressiva atingir zero
      console.log("Contagem regressiva concluída!");
      startCountdown(); // Inicia um novo ciclo (loop)
    }
  }

  // Inicializar a contagem regressiva
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000); // Atualizar a cada segundo
}

// Iniciar a contagem regressiva quando a página carregar
document.addEventListener('DOMContentLoaded', startCountdown);
