/*
🎯 Mini Desafio:
Dado o array de usuários:
const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Pedro" },
    { id: 3, nome: "Maria" }
];
Escreva uma linha de código usando **.find()** para buscar o usuário que tem o **id === 2**.
Como fica o seu código? 🚀
 */

const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Pedro" },
    { id: 3, nome: "Maria" }
];

const encontrarUserPorID = listaDeUsers => listaDeUsers.find(usuario => usuario.id === 2);

console.log(encontrarUserPorID(usuarios));

// ------------------------------------------------------------------------------------------

/*
Vamos subir o nível da busca com **`.find()`**!
🎯 Nível 11: Encontrando Objeto por Estado (`.find()`)
Dado o array de tarefas de um Todo-App:

const tarefas = [
    { id: 101, titulo: "Estudar HTML", concluida: true },
    { id: 102, titulo: "Estudar CSS", concluida: true },
    { id: 103, titulo: "Estudar JavaScript", concluida: false },
    { id: 104, titulo: "Estudar React", concluida: false }
];

 📝 Requisitos:
1. Crie uma Arrow Function chamada **`buscarPrimeiraPendente`**.
2. Ela deve receber o array e usar o **`.find()`** para retornar a **primeira tarefa** que **não** está concluída (`concluida === false` ou `!tarefa.concluida`).
3. Escreva em **linha única** (retorno automático).

🏃‍♂️ Resultado esperado:
javascript
console.log(buscarPrimeiraPendente(tarefas));
// Imprime: { id: 103, titulo: "Estudar JavaScript", concluida: false }

Como fica a sua **`buscarPrimeiraPendente`**? 🚀
 */

const tarefas = [
    { id: 101, titulo: "Estudar HTML", concluida: true },
    { id: 102, titulo: "Estudar CSS", concluida: true },
    { id: 103, titulo: "Estudar JavaScript", concluida: false },
    { id: 104, titulo: "Estudar React", concluida: false }
];

const buscarPrimeiraPendente = listaDeTarefas => listaDeTarefas.find(tarefa => tarefa.concluida === false)

//console.log(buscarPrimeiraPendente(tarefas));

// ------------------------------------------------------------------------------------------

/*
## **Desafio**

Dada uma lista de transações, calcular:

* total;
* total de entradas;
* total de saídas;
* maior transação;
* transações acima de determinado valor.


const transacao = {
    valor: valorTransacao,
    tipo: entradaSaida
}

 */



// Math.random() gera um número aleatório entre 0 e 1.

const tamanho = Math.floor(Math.random() * 10)

// O Array.from recebe dois argumentos: o tamanho da array e uma função. Seu propósito é criar um novo array baseado nos parâmetros fornecidos.

const fabricaDeTransacoes = tamanhoDaLista => Array.from({length:tamanhoDaLista},
    () => {
        const valor = Math.floor(Math.random() * 100);
    };
    return
        valor: valor,
            status: valor > 60 ? "Aprovado" : "Reprovado"

console.log(fabricaDeTransacoes(6))