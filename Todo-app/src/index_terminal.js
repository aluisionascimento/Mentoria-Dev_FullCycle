// Código em node do gerenciador de tarefas

// 1. Criar interface
const readline = require('node:readline');

const {stdin: input, stdout:output} = require('node:process');

const rl = readline.createInterface({input,output})

// 2. Declaração de variáveis
listaDeTarefas = []


// 3. Declaração de funções

// TODO: Função que exibe menu de opções disponíveis para o usuário


// 4. Função recursiva principal que recebe inputs do user

function receberTarefas(){

    rl.question("Digite aqui a sua próxima tarefa ou 'sair' se não deseja inserir novas tarefas: ", function (inputDoUsuario) {

        // Tratar texto
        inputDoUsuario = inputDoUsuario.trim().toLowerCase();

        // Validar se o usuário deseja interromper o fluxo ('sair')
        if (inputDoUsuario === 'sair') {
            console.log('Encerrando módulo de inserção de tarfas.')
            rl.close();
            return;
        }

        else{
            // Receber input do user
            // TODO: Persistir as informações capturadas aqui em um arquivo
            const novaTarefa = {
                id: listaDeTarefas.length + 1,
                title: inputDoUsuario,
                completed: false,
                data: new Date()
            }
            listaDeTarefas.push(novaTarefa)
            console.log(listaDeTarefas)

            //Chamar função novamente
            receberTarefas()
        }
    });
}
receberTarefas()


