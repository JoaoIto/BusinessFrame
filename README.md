# Alura Frame 💰🤑

***Negociações: Aluraframe{***

**Esse projeto vai ser um projeto desenvolvido pela Alura, como um site de negociações, uma agenda para negociações! Vamos pegar um projeto básico de um site de HTML e CSS e vamos implementar as funções em JS para que seja totalmente funcional. E assim vamos conhecer os padrões de projetos do browser para que seja executado o nosso JS.**
# 
## Modelo de negociação {

- **Parte 1**

**No nosso projeto, obviamente, dados precisam ser armazenados para que os usuários em uma negociação consigam em si estudar o mercado com informações de que a negociação foi feita, como a data de hora da negociação, sua quantidade e valor. Assim eles estudam a partir de informações e fazem gráficos de estudos a partir de em si fazer com que seja feito um estudo do mercado a partir disso!**

**Isso no JavaScript será feito a partir de objetos criados para fazer o estudo dessas negociações...**

```jsx
**class Business{**

**contructor(){**

**this.date = new Date();**

**this.much = 1;**

**this.value = 0;**

**}**

**}**
```
# 

Porém podemos perceber que a nossa função ainda precisamos definir o valor de volume! O volume é quantidade * valor da negociação, porém precisamos primeiramente fazer com que o browser receba esses valores e logo depois que ele crie um comportamento para todas as instâncias e que ele identifique oque é aquele valor, que foi definido pelo usuário e depois que ele diretamente já retorne o valor desse volume totalmente!

**Isso faremos primeiro com, ao invés de ele só entender oque é aquele valor manualmente para que o mesmo programador faça isso, vamos fazer com que ele diretamente entenda qual dos valores foi colocados com os parâmetros já definidos, assim dizendo oque ele deve fazer por si só, a partir de parâmetros pré definidos a si, tornando a vida de um programador mais simples para a manutenção de código por exemplo... Então faremos que:**

```jsx
**class Business{**

**contructor(date, much, value){**

**this.date = date;**

**this.much = much;**

**this.value = value;**

**}**

**calcVolumn(much, value) {**

**return (this.much * this.value)**

**}**

**}**
```

E isso é feito para que seja além de o sistema conseguir por si só definir uma data definida pelo usuário, o programador em si, pode sim definir uma data através desses parâmetros que definimos como ( date, much, value ), e assim conseguiremos ter um melhor controle da nossa função. E além disso também adicionamos um comportamento á nossa classe de negociação, fazendo com que toda ela seja diretamente capaz de conseguir calcular, ( também a partir de valores de parâmetros já definidos na função ), e assim conseguir calcular o volume daquela negociação!
#

## Encapsulamento {

- **Parte 2**

**Já conseguimos trabalhar com a classe Negociacao, precisamos implementar a seguinte regra de negócio: após criada a negociação, esta não poderá ser alterada. Mas até, agora, podemos fazer alterações! Isto pode causar problemas... Imagine que acabamos de fazer uma negociação e combinamos um determinado valor, mas depois decidimos alterá-lo para benefício próprio.**

**Nosso objetivo é que as propriedades de uma negociação sejam somente para leitura. No entanto, a linguagem JavaScript até a atual data, não nos permite usar modificadores de acesso. Não podemos dizer que uma propriedade seja apenas leitura (ou gravação). O que podemos é utilizar a convenção de que nos atributos das propriedades de uma classe que não pode ser modificada, usaremos um underline(). Você irá adicionar um underline "_" em todos aquelas propriedades que não devem ser acessadas diretamente pelo usuário que tentar mexer no console, pois essas informações não devem ser compartilhadas em si. Então esse método faz com que tudo que esteja com ele seja estritamente aceito somente pelo programador em si.**

```jsx
**class Business{**

**contructor(date, much, value){**

**this._date = date;**

**this._much = much;**

	**this._value = value;**

**}**

**calcVolumn(much, value) {**

**return (this._much * this._value)**

**}**

**}**
```

**O "_" funciona como um aviso dizendo: "programador, você não pode alterar esta propriedade!". Então, se usamos a convenção de utilizar o prefixo, como faremos para imprimir a classe? Se não podemos acessá-la, como podemos fazer isso?**

**Para isto, criou-se métodos chamados acessadores, em que serão utilizados o prefixo get. No caso, em Business.js, adicionaremos o método getDate(), que retornará o _date. Usaremos também o getMuch() e o getValue() que terão finalidades semelhantes.**

```jsx
**get volumn(much, value) {**

**return (this._much * this._value);**

**}**

**get date() {**

**return this._date;**

**}**

**get much() {**

**return this._much;**

**}**

**get value(){**

**return this._value;**

**}**
```

# 

## Class BusinessControll {

- Parte 1

**Nós já temos a negociação criada, agora, precisamos capturar as ações do usuário e interagir com o modelo por meio de uma controller no modelo MVC. Nós criaremos instâncias de negociação. Primeiramente, precisamos criar o controller.  A estratégia utilizada aqui é um pouco diferente do que vem sendo feita, geralmente, a associação entre tag e o evento é feita no parte JS do projeto. Mas inspirado por framework como o AngularJS, por exemplo, que faz a associação de uma ação da controller utilizando um evento. Usaremos isso, para escrever menos código na parte JavaScript. Como nossa página é dependente de JS, podemos fazer isso facilmente.**

**Se atualizarmos a página e preenchermos o formulário com dados aleatórios, após submetermos as informações, veremos a mensagem do alert. Já que adicionamos o objeto de controle:**

```jsx
**class NegociacaoController {**

**add(event) {**

**let inputDate = document.querySelector('#data');**

**let inputMuch =  document.querySelector('#quantidade');**

**let inputValue = document.querySelector('#valor');**

**console.log(inputDate.value);**

**console.log(inputMuch.value);**

**console.log(inputValue.value);**

**}**

**}**
```

**Então, a ação da controller foi chamada. Mas o nosso objetivo não é exibir a mensagem, nós queremos criar um negociação. Teremos que gerar o código que instância a negociação. Então primeiramente vamos utilizar o document.querySelector() será o responsável por buscar no DOM os elementos com id #data, #quantidade e #valor - observe que conseguimos utilizar os seletores CSS. Os itens foram dispostos na ordem do formulário. Lembrando que cada input tem id no arquivo index.html.**

**Os dados apareceram corretamente no Console, nós já conseguimos capturá-los. Mas veja que repetimos bastante o código, ficou uma sintaxe trabalhosa de ser digitada. Como em JavaScript temos e podemos declarar a variável $ - como usado no jQuery - e dentro, jogaremos o document.querySelector. Porém, no JavaScript, não podemos atribuir á uma função pré-definida, já que ela simplesmente não irá funcionar simplesmente por uma variável declarado "á mão" em nosso código. Então precisamos usar uma outra função para assim, conseguir fazer com que tudo seja "comprimido" em uma única variável que será definida e em si conseguir usar a função corretamente. Poderemos fazer as seguintes substituições no código:**

```jsx
**class NegociacaoController {**

**add(event) {**

**const $ = document.querySelector.bind(document)**

**let inputDate = $('#data');**

**let inputMuch = $('#quantidade');**

**let inputValue = $('#valor');**

**console.log(inputDate.value);**

**console.log(inputMuch.value);**

**console.log(inputValue.value);**

**}**

**}**
```

```jsx
constructor() {

        const $ = document.querySelector.bind(document)

        this._inputDate = $('#data');
        this._inputMuch =  $('#quantidade');
        this._inputValue = $('#valor');
    }
```
# 
## Criando um objeto Date {

- Parte 2

**Existem várias maneiras de construirmos uma data passando parâmetros para o construtor. Uma das formas que já vimos é que se já temos uma data, podemos colocar o retorno de getTime e passar para o construtor de Date. Será que podemos fazer este processo de forma direta? Se for possível, já resolvemos o nosso problema.**

```jsx
adiciona(event) {

  event.preventDefault();

  let data = new Date(this._inputData.value);
  console.log(data);
}
```
**Porém, ainda sim podemos otimizar este código, fazendo com que ele além de transformar ele em um array de string a nossa data, fará com não se torne mais 3 valores distintos á se formar uma data, mas sim agora utilizaremos o método de join() para que possamos fazer com que agrupemos os três valores e separaremos por um separador de "," os três valores da data.**

**Temos a string que esperávamos receber. Mas, além de usar o split(), poderíamos utilizar o replace(). Adicionaremos uma expressão regular pedindo que seja trocado o hífen de todas as ocorrências da string (ou seja, global) por ,: replace(/-/g, ','). A data ficou correta. Vimos que existem várias formas de resolver a questão da data, e o array nem precisa ser de string. Pode ser um array de número, que também será aceito, e assim fica nosso código:**

```jsx
adiciona(event) {

    event.preventDefault();

    let data = new Date(this._inputData.value.replace(/-/g, ','));
    console.log(data);
}
```

![https://s3.amazonaws.com/caelum-online-public/JS+Avan%C3%A7ado+I/3.6_1_Console.png](https://s3.amazonaws.com/caelum-online-public/JS+Avan%C3%A7ado+I/3.6_1_Console.png)

---

**A data impressa é 12/12/2016. Por que ele imprimiu dezembro, se escrevemos mês 11? Porque nesta forma de se passar o Date, o mês deve ser passado de 0 a 11. Então, se queremos que a data seja em novembro, precisaremos diminuir o valor do mês. No construindo um array de datas que transforme todos os objetos de meses por exemplo, para passarem a conta de 1 á 12, e não de 0 a 11. Formando assim, corretamente os 12 meses.**

```jsx
adiciona(event) {

    event.preventDefault();

    let data = new Date(...this._inputData.value.split('-'));
    console.log(data);
}
```

---

**No ES6, temos o recurso spread operator. Que basicamente consiste em indicarmos que o array será desmembrado - e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor. Como já construímos o código, a data será passada, mas o mês ficará incorreto e não será subtraído 1. Executaremos o código como está e a data aparecerá como o mês de Dezembro, mas conseguimos demonstrar que o spread operator está funcionando corretamente.** 

**Porém, temos que encontrar uma forma de, antes de reposicionarmos cada parâmetro para o constructor, decrementarmos 1 do valor do mês. Para isto, trabalharemos com a função map(), bem conhecida no mundo JavaScript e que nos permitirá subtrair 1. Então, iremos chamar a função map no array criado e dependendo do elemento, iremos diminuir -1.**

---

```jsx
adiciona(event) {

    event.preventDefault();

    let data = new Date(...
        this._inputData.value
        .split('-')
        .map(function(item, indice) {
            if(indice == 1) {
                return item - 1;
            }
            return item;
        })
    );
    console.log(data);
}
```

---

**Apesar de item ser uma string, quando usamos -1, o JS entende que deverá fazer um operação numérica e faz a conversão implícita da string. Caso não seja o segundo elemento, a posição do mês, o retorno será equivalente ao valor do elemento do array.**

**Veremos se o código vai funcionar. No formulário, preencheremos o campo da data com 12/11/2016. Desta vez, a data que aparecerá no Console estará correta. Porém ainda sim podemos perceber que ainda podemos "enxugar" ainda mais essa função!**

**Como podemos perceber, ela ainda esta dependendo de uma condicional if para funcionar. E isso não é bom já que causa mais uma dependência ao nosso código, e devemos aprender que ainda podemos enxugar ainda mais nossa função e fazer com as funções do ES6 do JS nos ajude a resolver melhor nosso problema.**

---

**Se estamos na primeira posição do array, o valor de indice é 0. Por isso, o resultado de indice % 2 será igual a 0 também. Se subtrairmos este valor de item, nada irá mudar. Mas quando estivermos na segunda posição do array, o indice será igual a 1. Agora, quando calcularmos 1 módulo de 2, o resultado será 1. E quando estivermos na terceira posição do array, 2 módulo de 2, também será igual a 0. Não diminuiremos nada do valor do item. Dessa forma conseguimos evitar a criação de um if.**

**Para entendermos melhor o que fizemos, calcularemos os módulos no Console:**

---

```jsx
0 % 2
```

---

---

![https://s3.amazonaws.com/caelum-online-public/JS+Avan%C3%A7ado+I/3.8_3_modulo+de+0.png](https://s3.amazonaws.com/caelum-online-public/JS+Avan%C3%A7ado+I/3.8_3_modulo+de+0.png)

---

**A última linha retornou o valor do resultado: 0, ou seja, a primeira posição do array. Se calcularmos os módulos dos demais, teremos os seguintes valores.**

---

![https://s3.amazonaws.com/caelum-online-public/JS+Avan%C3%A7ado+I/3.8_4_valores+dos+modulos.png](https://s3.amazonaws.com/caelum-online-public/JS+Avan%C3%A7ado+I/3.8_4_valores+dos+modulos.png)

---

**Desta forma, conseguimos evitar o if e ajustar apenas o mês. Até aqui, o nosso código ficou assim:**

---

```jsx

class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        let data = new Date(...this._inputData
            .value.split('-')
            .map(function(item, indice) {
                return item - indice % 2;
            }));

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}COPIAR CÓDIGO
```

---

**Se ele for executado, veremos que a data que surgirá no Console será 12 de novembro de 2016. Portanto conseguimos transformar todo o array de data em 3 parâmetros separados, para que consiga assim transformar a data em um valor legível e correto...** 

**Além disso ainda assim podemos usar uma arrow function para que sirva de uma forma de enxugar nosso código, tornando ele maois legível e ainda mais simples... Dessa forma:**

---

```jsx
add(event) {

        event.preventDefault();
    
        let date = new Date(...this._inputDate
            .value.split('-')
            .map((item, index) => item - index % 2)
            );

        let business = new Business(
            date,
            this._inputMuch.value,
            this._inputValue.value
        );

        console.log(business);
    }
```
#
## Date Views
**Temos um modelo de Negociacao, outro de ListaNegociacoes, e temos uma controller que orquestra o acesso aos modelos de acordo com as ações do usuário. No entanto, ainda não conseguimos refletir o estado do modelo para a tela. A tabela ainda não exibe os dados cadastrados.**

**Agora temos que atacar a View, do MVC, já temos o model e a controller. Para que possamos aplicar vários conceitos e conhecer novos recursos da linguagem JavaScript, a proposta é que em cada parte da View que sincronizarmos com o modelo, não será feita no arquivo HTML.**

**Em vez disso, criaremos a classe NegociacoesView dentro da pasta views que irá encapsular a apresentação que exibiremos para o usuário. É o arquivo NegociacoesView.js que terá as definições de como será a tabela.**

Começaremos com ela assim:

---

```jsx
<table class="table table-hover table-bordered">
    <thead>
        <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
        </tr>
    </thead>

    <tbody>
    </tbody>

    <tfoot>
    </tfoot>
</table>
```

---

**Como retiramos o trecho do código referente à tabela, no `index.html`, ela já não será mais exibida abaixo do formulário.**

---

![https://s3.amazonaws.com/caelum-online-public/JS+Avan%C3%A7ado+I/5.1_1_formulario+sem+tabela.png](https://s3.amazonaws.com/caelum-online-public/JS+Avan%C3%A7ado+I/5.1_1_formulario+sem+tabela.png)

---

Bom, faz sentido uma função que agora tornamos dinâmico, com que a tabela esteja totalmente invisível dentro do código, porém agora quando quisermos que ainda ela se apareça dentro do código, ( quando o cliente fizer a sugestão de venda ou compra e chamar o update de página ), faz com que a tabela se apareça e torne tudo simples e dinâmico. 

**Bom obviamente agora que apagamos totalmente o modelo da tabela diretamente dentro do nosso HTML, agora vamos fazer com que se torne um lugar dentro dela, para termos uma noção de onde ela deve aparecer... E ainda vamos colocar o exemplo dessa função dentro do nosso objeto, com um objeto de template.**

---

```html
<div id="negociacoesView"></div>
```

---

Note que o lugar base da nossa tabela é representada a partir de um ID de um elemento no nosso HTML.

---

```jsx
class NegociacoesView {

    constructor(elemento){

        this._elemento = elemento;
    }
    _template() {

        return `
        /*  <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        </tbody>
        
        <tfoot>
        </tfoot>
    </table>
     */
        `;
    } 

    update(){
        this._elemento.innerHTML = this._template();
    }
}
```

---

**Agora fizemos esta classe para que enfim usaremos o template da nossa tabela e faremos com que ela tenha a função própria a ser usada dentro do método do constructor... Existindo também já a função de update, que atualiza a tabela a partir de um método dentro do nosso constructor que chamamos de "elemento", que faz a função de  índice dentro da função...**

Bom, para isso também já indicamos dentro do controle de negociações, oque é que chamaremos e suas possibilidades.

---

```jsx
this._negociacoesView = new NegociacoesView($("#negociacoesView"));
this._negociacoesView.update();
```

---

Já que fizemos a base da visualização de tabela, agora precisamos com que tornamos ela ligada com nossas ações dentro do código JS, vamos tornar ela ligada ao código, de novo...

**A partir de agora, precisamos com que o template da nossa tabela, continue recebendo as funções a partir de que estávamos usando, ou seja, dinamize ele novamente com todas as funcionalidades que já fizemos e construímos ao longo de todo o código... Primeiramente vamos chamar as funções a tudo que atualizar a página, chamar nova negociação, e também na função de adiciona evento! Usamos também a lista de negociações, como índice do método do View.** 

Para que tudo funcione, ainda vamos utilizar todo em um modelo, já que a nossa template vai ser um modelo a ser usado por uma classe e não simplesmente um elemento em HTML. A nossa tabela uma das alterações foi o nosso corpo:

---

```jsx
<tbody>
        ${model.negociacoes
          .map(
            (n) =>
              `
            <tr>
            <td>${DateHelper.dataParaTexto(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            <td>${n.volume}</td>
            </tr>`
          )
          .join("")};
        </tbody>
```

---

**Bom, fazemos com que o modelo seja totalmente em MVC, e chame como funções todos os tipos de dados no nosso modelo HTML, e que seja os valores em tabela, com isso, utilizamos um parâmetro a partir da função map, que irá fazer com que seja adicionado, de acordo com o valor mostrado na tela don usuário, seja inteiramente adicionado a nossa negociação de template.  E depois a partir disso, fazer com o método de join, com que seja enxugado totalmente como string o nosso código, e não uma template!**

---

```jsx
<tfoot>
    <td colspan="3"></td>
    <td>
        ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
    </td>
    <tfoot>
```

---

**Logo isso, usamos o mesmo método de MVC dentro do nosso footer tabelar, e fazemos com que isso seja utilizado uma função de total dentro de volume, que utiliza o reduce, para indicar os demais valores e somar dentro de somente um inner de um elemento do template HTML!**

#