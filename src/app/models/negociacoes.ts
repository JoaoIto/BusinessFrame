import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    /* Modificador que chama que o array cria um novo array 
    modificável, mas deixa o originável imutável 
    depois de adicionado
    */
   
    public lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}