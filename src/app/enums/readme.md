# [Enums](https://www.typescriptlang.org/docs/handbook/enums.html#:~:text=Enums%20are%20one%20of%20the%20few%20features%20TypeScript,cases.%20TypeScript%20provides%20both%20numeric%20and%20string-based%20enums.) no TypeScripy

Enums são um dos poucos recursos que o TypeScript tem, que não é uma extensão de nível de tipo do JavaScript.

***Enums* permitem que um desenvolvedor defina um conjunto de constantes nomeadas**. O uso de enums **pode facilitar a documentação da intenção ou criar um conjunto de casos distintos**. O TypeScript fornece enums numéricas e baseadas em cadeia de caracteres.

Ela define essa sequência de caractere cada um com seu índice padrão, e assim também, sempre que o Dev vai lá e define um novo índice, **ela passa a contar a partir do novo!**

- **Exemplo:**

```ts
enum Enum {
    A,
    B = 3,
    C,
    D,
    F
}

// Qual o valor de MinhaEnum.D?
```

- As enum começam de 0, porém, **se modificarmos** o valor de alguma das enum, **os próximos valores passarão a contar a partir do novo valor**.

---