# Main: Controller

**Este é o código principal da nossa aplicação! Aqui pegamos os 3 elementos HTML, que já adicionamos o `HTMLInputElement` através do *TypeScript*, e assim definimos os 3 campos através do contructor com o DOM.**

**Logo após, os métodos são os mais importantes:**

```ts
adiciona(): void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
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
```

Identificamos que aqui, primeiramente definimos, através daquela propriedade tipada como *Date* e agora podemos utilizá-la através do botão, com addEventListenter dentro do arquivo de *app.ts*. 

**O método de `criaNegociacao(): Negociacao` que chama o objeto principal de todos, ele apenas cria 3 variáveis principais com os campos. E assim utilizamos o `adiciona(): void` com a tipagem sem retorno apenas para chamar na função principal de app!E assim devolvemos todo o objeto com suas propriedade tipadas corretamente!**
