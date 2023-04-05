import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error('Elemento form não encontrado.');
}
