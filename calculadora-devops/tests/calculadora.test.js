const test = require('node:test');
const assert = require('node:assert/strict');
const { calcularMedia } = require('../js/calculadora.js');

test('média de 8 e 6 é 7', () => {
  assert.equal(calcularMedia(8, 6), 7);
});

test('média de 10 e 10 é 10', () => {
  assert.equal(calcularMedia(10, 10), 10);
});

test('aceita notas decimais', () => {
  assert.equal(calcularMedia(7.5, 8.5), 8);
});

test('rejeita notas fora de 0 a 10', () => {
  assert.throws(() => calcularMedia(11, 5), /entre 0 e 10/);
  assert.throws(() => calcularMedia(-1, 5), /entre 0 e 10/);
});

test('rejeita valores não numéricos', () => {
  assert.throws(() => calcularMedia(NaN, 5), /entre 0 e 10/);
});
