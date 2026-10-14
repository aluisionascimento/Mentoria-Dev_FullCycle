// Criando objeto
var item = new Object();

// ------------------- Exercício 1 -------------------

//Declarando propriedades

// 1. Criando objetos com new
// var nome = item.nome;
// var preco = item.preco;
// var quantidade = item.quantidade;

// 2. Criando objetos de forma literal
var item = {
    nome: "GTA VI",
    preco: 350,
    quantidade: 5,
}

// console.log(item.nome);
// console.log(item["preco"]);
// console.log(item["quantidade"]);

let mochila = []
mochila.push(item.nome)
// console.log(mochila);

// ------------------- Exercício 2 -------------------

listaDeTarefas = [{titulo: "Estudar para mentoria dev FullCycle", concluida: false},
                    {titulo: "Fazer PA1 de Análise de Algoritmos", concluida: false},]

const listaDeTarefasCopia = listaDeTarefas[0]

listaDeTarefasCopia.titulo = "Programar até pegar o hábito e aprender skills reais."
console.log(listaDeTarefas)


// ------------------- Exercício 3 -------------------