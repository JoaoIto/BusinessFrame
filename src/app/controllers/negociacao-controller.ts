import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MessageView } from '../views/message-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    private inputData!: HTMLInputElement;
    private inputQuantidade!: HTMLInputElement;
    private inputValor!: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView")
    private messageView = new MessageView('#message');

    constructor() {
        const inputData = document.querySelector('#data');
        if (inputData) {
            this.inputData = inputData as HTMLInputElement;
        }

        const inputQuantidade = document.querySelector('#quantidade');
        if (inputQuantidade) {
            this.inputQuantidade = inputQuantidade as HTMLInputElement;
        }

        const inputValor = document.querySelector('#valor');
        if (inputValor) {
            this.inputValor = inputValor as HTMLInputElement;
        }
        
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update("Negociação adicionada!")
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
