
numeros = [1,20,9,9,8,9,7]

// Sintaxe: const [nome da função] = [parametro] => parametro.filte/map/etc([condição])
// Dentro da condição uma nova arrow function pode ser inserida
const maiorQue10 = lista => lista.filter(valor => {
    if (valor > 10){
        return true;
    }
});

//console.log(maiorQue10(numeros));

// ------------------------------------------------------------------------------------------
/*
### 🎯 Nível 8: Filtrar e Mapear Objetos

Dada a lista de produtos abaixo, crie uma Arrow Function reutilizável chamada **obterProdutosCaros**.

#### 📝 Dados de entrada:
 
const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Cabo USB", preco: 25 }
];

#### 🎯 Requisitos:

1. Filtrar apenas os produtos com **preco > 100**.
2. Mapear para retornar **apenas o nome** desses produtos.
3. A função deve aceitar o array como parâmetro e retornar o resultado final.

#### 🏃‍♂️ Resultado esperado:
 
console.log(obterProdutosCaros(produtos)); 
// Deve imprimir: ["Teclado", "Monitor"]
*/

const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Cabo USB", preco: 25 }
];

const obterProdutosCaros = listaDeProdutos => listaDeProdutos
    .filter(produto => produto.preco > 100)
    .map(produto => (`${produto.nome}`));

//console.log(obterProdutosCaros(produtos));

// ------------------------------------------------------------------------------------------

/*
### 🎯 Nível 9: Filtrar e Formatar Mensagens

Dado o array de alunos abaixo, crie uma Arrow Function reutilizável chamada **`obterAprovados`**.

#### 📝 Dados de entrada:
javascript
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Pedro", nota: 5.0 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Lucas", nota: 6.5 }
];

#### 🎯 Requisitos:
1. Filtrar apenas os alunos com **`nota >= 7.0`**.
2. Mapear para retornar a mensagem: `"Parabéns [nome], você foi aprovado(a)!"`.
3. Tente escrever em **linha única** encadeada (sem `if`, sem `{}` e sem `return` explícito).

#### 🏃‍♂️ Resultado esperado:
javascript
console.log(obterAprovados(alunos));
// Deve imprimir:
// [
//   "Parabéns Ana, você foi aprovado(a)!",
//   "Parabéns Maria, você foi aprovado(a)!"
// ]


Como fica a sua **`obterAprovados`**? 🚀
 */

const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Pedro", nota: 5.0 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Lucas", nota: 6.5 }
];

const obterAprovados = listaDeAlunos => listaDeAlunos.filter(aluno => aluno.nota >= 7).map(aluno => (`Parabéns ${aluno.nome} você foi aprovado(a)!`))

console.log(obterAprovados(alunos))

/*
### 🎯 Nível 10: Filtrando Strings (Filtro de Domínio)

Imagine que você está criando uma funcionalidade de busca e precisa filtrar uma lista de e-mails para identificar apenas os usuários do **Gmail**.

#### 📝 Dados de entrada:


const emails = [
    "ana@gmail.com",
    "pedro@hotmail.com",
    "maria@gmail.com",
    "lucas@outlook.com"
];



#### 🎯 Requisitos:

1. Crie uma Arrow Function reutilizável chamada **filtrarGmail**.
2. Use `.filter()` com o método de string endsWith("@gmail.com") (ou **.includes("@gmail.com)).
3. Escreva a função em **linha única** (retorno automático).

#### 🏃‍♂️ Resultado esperado:

 */

const emails = [
    "ana@gmail.com",
    "pedro@hotmail.com",
    "maria@gmail.com",
    "lucas@outlook.com"
];

filtraGmailIncludes = listaDeEmails => listaDeEmails.filter(emails => emails.includes("@gmail.com"));
filtraGmailEndsWith = listaDeEmails => listaDeEmails.filter(emails => emails.endsWith("@gmail.com"));

console.log(filtraGmailIncludes(emails));
console.log(filtraGmailEndsWith(emails));