# View 

A classe principal de `View` entende-se que se trata de uma classe genérica, que tem um tipo que pode ser reescrito e/ou reutilizado em herança, para assim ser usado nas classes que de fato vão tratar com o tratamento da utilização. E para isso, foi utilizado os elementos do ***TypeScript em OO.***

- Classe:

```ts
export abstract class View<T>{ // Definição de classe abstrata com <T>, indicando tipo para herança;

    protected elemento: HTMLElement | null; // Elemento para ser usado somente pelas classes filhas;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        if (this.elemento) {
            const template = this.template(model);
            this.elemento.innerHTML = template;
        }
    }

    abstract template(model: T): string; // Perceba também o elemento que é usado como abstrato, oque obriga a responsabilidade de reescrever o elemento para de fato ser modificado, para as classes filhas.
}
```

---

## Utilizando os tipos:

**- `abstract`: O tipo *`abstract`* dentro do contexto da MessageView, que é a classe feita para responsabilidade de exibir a mensagem na tela depois da negociação feita, utilizando e obrigando a reescrita.**

**- `<T>`: Esta sintaxe explica que o elemento deve ser de tipo variável, dependendo da classe que usará a herança, e assim poderá modificar a classe que precisar, podendo usar seus métodos dependendo deste tipo.**


- Classe:

```ts
export class MessageView extends View<string> { // Especificando tipo, a partir da herança que é da classe pai com <T>

    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
```

Note ainda, que isso ajuda a principal vantagem do uso do TypeScript, pois se tirarmos os elementos abstratos, temos ainda sem erros de compilação, porém esta classe pode ser utilizada e criada a partir de qualquer parte do código, **OQUE NÃO FAZ SENTIDO!** 

Já que precisamos jogar a responsabilidade de usar a base desta classe, para a herança utilizada para as classes filhas.