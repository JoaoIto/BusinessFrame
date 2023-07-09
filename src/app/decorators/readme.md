# Decorators

Os decorators no projeto atual foram usados em princípio para teste de tempo de execução dos métodos que são chamados, afim de melhorar a performance da aplicação em tempo de execução.

Basicamente um trecho de código em funçãp que chama o método original e chama o trecho para o tempo de performance em diferentes horas da execução.

---

## Code: 

```ts
export function execucaoTime(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor){

            const method = descriptor.value;
            descriptor.value = function(args: Array<any>){
                const t1 = performance.now();
                const returnMethod = method.apply(this, args);
                const t2 = performance.now();

                console.log(`O tempo de performance do método de ${propertyKey} foi: ${(t2 - t1) / 1000} seg!`);
                returnMethod;
            }
            return descriptor;
    }
}
```

- ***target***: representção de parâmetro que é o constructor da classe, o prototype que é retornado, na qual quando tempos um método que não é estático da classe, usando de forma comum, ele retornará o prototype daquela classe que está o utilizando...

- ***propertyKey***: propriedade que me retorna o nome em string que está sendo chamado em tempo de execução...

- ***descriptor***: a função principal, servindo para que consigamos saber tudo sobre a método, mesmo uma descrição, do método que está sendo testado.

---