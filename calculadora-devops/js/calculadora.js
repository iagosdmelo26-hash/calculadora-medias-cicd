// Regra de negócio compartilhada pelo site e pelos testes.
function calcularMedia(nota1, nota2) {
  if (!Number.isFinite(nota1) || !Number.isFinite(nota2) ||
      nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    throw new Error('As notas devem ser números entre 0 e 10.');
  }
 return nota1 + nota2;
}

// Exportação apenas quando o arquivo roda no Node.js (testes).
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calcularMedia };
}
