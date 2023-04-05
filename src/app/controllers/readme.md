# Main: Controller

**Este é o código principal da nossa aplicação! Aqui pegamos os 3 elementos HTML, que já adicionamos o `HTMLInputElement` através do *TypeScript*, e assim definimos os 3 campos através do contructor com o DOM.**

**Logo após, os métodos são os mais importantes:**

```ts
public adiciona(): void {
    const negociacao = Negociacao.criaDe(
        this.inputData.value,
        this.inputQuantidade.value,
        this.inputValor.value
    );
    if (!this.diaUtil(negociacao.data)) {
      console.log("Faça negociação em um dia útil!");
      window.alert("Faça negociação em um dia útil!");
      this.messageView.update("Faça negociação em um dia útil!");
      return;
    }
      this.negociacoes.adiciona(negociacao);
      console.log(this.negociacoes.lista());
      this.limparFormulario();
      this.updateView();
  }

    private diaUtil(date: Date) {
    return date.getDay() > weekDays.DOMINGO && date.getDay() < weekDays.SABADO;
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private updateView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.messageView.update("Negociação adicionada!");
  }
```

O método principal desta classe, **é o método adiciona, onde ele direciona o modelo de negociação, localizado em *`negociacao.ts`*, onde ele chama o `criaDe()` do modelo**, e assim ele consegue carregar a criação do modelo. Depois fazemos as verificações.

As verificações são feitas para a regra de que todo o objeto **só deve ser carregado quando a data dentro dele for verifica caso esteja em dia útil**! Para isso usamos a função de *`diaUtil()`* que consegue usar os ***enums*** também carregados dentro do projeto e assim fazer a verificação.

Dentro do arquivo, ainda sim temos a função de controlar para que tudo em view possa ser utilizado, onde lá será mexido. Porém aqui ainda sim temos a função de *`updateView()`*, que basicamente **consegue carregar a parte do array que é criado com cada objeto de Negociacao junto, e assim ser vizualizado** na tela a partir de view.

---