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