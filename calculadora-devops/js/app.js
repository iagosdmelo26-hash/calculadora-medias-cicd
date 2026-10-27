const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nota1 = Number(document.querySelector('#nota1').value);
  const nota2 = Number(document.querySelector('#nota2').value);
  try {
    const media = calcularMedia(nota1, nota2);
    resultado.textContent = `Média: ${media.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} — ${media >= 7 ? 'Aprovado' : 'Abaixo da média'}`;
  } catch (erro) {
    resultado.textContent = erro.message;
  }
});
