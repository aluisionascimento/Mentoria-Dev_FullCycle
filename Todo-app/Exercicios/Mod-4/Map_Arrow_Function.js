idades = [25, 24, 13, 20, 40, 82];

const idadesDobro = idades.map(idade => idade * 2)
// console.log(idadesDobro);

const dobrar = valor => valor * 2
quantidade = 1309

//console.log(dobrar(quantidade))

const multiplicar = (a, b) => a * b

// console.log(multiplicar(7, 192))

//const classificarNota = nota => nota >= 7 ? "Aprovado" : "Reprovado"

const classificarNota = (nota) => {

    if (nota > 6){
        return "Aprovado";
    }
    return "Reprovado";

}

//console.log(classificarNota(8))

// ------------------------------------------------------------------------------------------

const calcularDesconto = (preco, desconto) => {
    preco = preco * (desconto/100)
    return Math.round(preco);
};

//console.log(calcularDesconto(70,10))

// ------------------------------------------------------------------------------------------
// ```
// 🎯 Nível 5: Arrow Function + Método de Array (.map)
// Sua missão é criar uma Arrow Function chamada **formatarPrecos**.
// 📝 Requisitos:
// 1. Receber um **array de números** (ex: `[10, 50, 100]`).
// 2. Usar o **.map()** para transformar cada número em uma string no formato `"R$ X,00"`.
// 3. Retornar esse novo array formatado.
// 🏃‍♂️ Como testar:
//
// const formatarPrecos = // ... sua arrow function aqui
//
// console.log(formatarPrecos([10, 50, 100]));
// // Deve imprimir: ["R$ 10,00", "R$ 50,00", "R$ 100,00"]
// ```
let listaDePrecos = [10,50,60,70]

// Cria nova array com preços formatados.
const precosFormatados = listaDePrecos.map(preco=> (`R$ ${preco}`));

// Cria nova função reutilizável que formata os preços de uma array original
// Regra de ouro: se a arrow function contém chaver o valor dentro dela tem que ser retornado. Se tem apenas parêntesis ele retorna por padrão.
const funcaoPrecosFormatados = listaDePrecos => listaDePrecos.map(preco=> {return `R$ ${preco}`})

// console.log(precosFormatados);

// console.log(funcaoPrecosFormatados(listaDePrecos));

```
### 🎯 Nível 6: Extraindo Dados de Objetos com .map()

Sua missão é transformar uma lista de produtos em uma lista de frases formatadas.

#### 🎯 Requisitos:

    1. Use .map() para percorrer o array produtos.
2. Use uma **Arrow Function em linha única** (aproveitando o retorno automático, sem chaves {}).
3. Para cada produto, retorne a frase: "O produto [nome] custa R$ [preco]".

 ```
    const produtos = [
        { nome: "Teclado", preco: 150 },
        { nome: "Mouse", preco: 80 },
        { nome: "Monitor", preco: 900 }
    ];

const produtosFormatados = produtos.map(produtos =>`O produto é ${produtos.nome} e o preço é ${produtos.preco}`)

console.log(produtosFormatados);

