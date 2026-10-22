// ---------------------------------- Notas  --------------------------
/*
1. Mapeamento das funções que existem no sistema e o que fazem. Pense como se fosse um jogo de lego.
2. Como essas funções as funções.
3.
 */


// ---------------------------------- Importação dos Módulos --------------------------

// Importação desestruturando o módulo, pega somente a função desejada (+ leve). Permite chamar função com nome oringinal

//import {gestaoProjeto} from './src/tasks/projetoController.js' // Forma moderna - Convenção de mercado
const {gestaoProjeto} = require('./tasks/projetoController.js'); // Forma tradicional
const {verificarOpcaoInvalida} = require('./utils/funcoesAuxiliares.js');

// Importar tudo. Exige que as funções sejam chamadas com prefixo. Ex: controller.gestaoProjeto(opcaoUsuario)
//const controller = require('/src/tasks/projetoController')


// ---------------------------------- Criação da Interface ----------------------------
const readline = require('node:readline');

const {stdin: input, stdout: output} = require('node:process');

let rl = readline.createInterface({input, output}), projeto;

// ---------------------------------- Menu Inicial -----------------------------------

function menuInicial () {

    console.log("")
    console.log("========== Menu Inicial ==========\n")
    console.log("1 - Adicionar Projeto")
    console.log("2 - Buscar Projeto por ID ou nome")
    console.log("3 - Editar projeto")
    console.log("4 - Remover Projeto")
    console.log("5 - Listar Projeto")
    console.log("6 - Sair\n")
    console.log("==================================\n")

    rl.question("Selecione uma das opções acima: ", function(opcaoUsuario){

        const opcao = Number(opcaoUsuario)
        // Validar input
       if(verificarOpcaoInvalida(opcao)){
         return menuInicial();
       }
        gestaoProjeto(opcao, rl, menuInicial);
    });
}
menuInicial();

module.exports = {rl};

