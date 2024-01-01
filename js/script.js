const visorNumerosMinutos = document.querySelector('#minutos');
const visorNumerosSegundos = document.querySelector('#segundos');
const visorNumerosMilisegundos = document.querySelector('#milisegundos');
const btnIniciar = document.querySelector('#btn-iniciar');
const btnPausar = document.querySelector('#btn-pausar');
const btnParar = document.querySelector('#btn-parar');

const cronometro = new Cronometro(visorNumerosMinutos, visorNumerosSegundos, visorNumerosMilisegundos);

btnIniciar.addEventListener('click', () => cronometro.iniciarCronometro());
btnPausar.addEventListener('click', () => cronometro.pausarCronometro());
btnParar.addEventListener('click', () => cronometro.pararCronometro());

