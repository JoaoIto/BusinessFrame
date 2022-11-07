import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    /* Modificador que chama que o array cria um novo array 
    modificável, mas deixa o originável imutável 
    depois de adicionado
    */
    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}