# Models: propriedades e valores

## Negociacao:

**O arquivo de `negociacao.ts` é utilizado para que consigamos definir privados as propriedades de cada valor do input, e assim já definir também seus métodos de pegar com `get()` e assim já definir o objeto principal, `Negociacao`, da nossa aplicação**

```ts
export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

// Criando método estático de classe:

/* Este método, é puxado diretamente de classe para o
controller, para que a responsabilidade seja da classe, e assim
puxada para o controller */

    public static criaDe(dateString: string, quantidadeString: string, valorString: string){
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
```

---
## Negociacoes

**A partir do arquivo que temos de negociacao, a classe que temos, construimos a classe de negocicacoes. Como o próprio nome no plural já diz tudo, é isso... Uma classe que serve para construir um array com os objetos de cada negociacão.**

### Passo a passo:
1. **Definimos o import e uma variável comum de array no TypeScript.**

- Quer dizer que assim, vamos chamar uma variável comum, que é do tipo do próprio objeto de `Negociacao`, e assim só precisamos definir que é um array, com o trecho entre colchetes. Muito parecido com a sintaxe de Java no back-end...


2. **Após isso, entendemos que este array precisa adicionar a cada vez que for chamado seu método principal, cada negociacao feita, e assim usamos o método comum de array: `push()`.**

- Este método, não é um método especial, já é um método comum no JavaScript, onde apenar empurra para o final do elemento o seu parâmetro, que no caso será o objeto de `negociacao()`.


3. **Depois, o código já está funcional. Porém precisamos entender como tornar este array, não pode ser mutável ou modificável. Usaremos a propriedade [readonly](https://tutorialsnest.com/typescript-readonly-and-static/#:~:text=Readonly%20in%20Typescript%20If%20we%20mark%20any%20property,the%20value%20assigned%20and%20cannot%20modify%20or%20update.)**

- E assim, utilizamos um marcador de, `readonly`, que já faz essa função. Sempre, e é comum utilizarmos a instanciação destes arrays para não serem mutáveis, criando-se uma cópia mutável, porém o array original, não pode ser modificável

- Agora com este marcador, basicamente diz que qualquer método de array e qualquer set, se torna imutável para este array, desligando estes métodos comuns, e toda vez que ele for chamado fora de ambiente de código, deve retornar uma mensagem de erro no console!

---
```ts
import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    /* Modificador que chama que o array cria um novo array 
    modificável, mas deixa o originável imutável 
    depois de adicionado
    */
   
    lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}
```