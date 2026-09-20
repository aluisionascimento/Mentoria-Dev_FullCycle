// ---------------------------------- Notas ------------------------------------------

// Seria o caso de criar uma classe dedicada para cada entrada de tempo em um projeto?


// ---------------------------------- Criação da Interface ----------------------------

const readline = require('node:readline');

const {stdin: input, stdout: output} = require('node:process');

let rl = readline.createInterface({input, output}), projeto;

// ---------------------------------- Funções Auxiliares ------------------------------

listaDeProjetos = [];

listaDeCategorias = [];

idMax = 0;

// Validar input
function verficarOpcaoInvalida(escolhaUsuario){
    if (isNaN(escolhaUsuario) === true || escolhaUsuario < 1 || escolhaUsuario > 6) {
        console.log("Digite um número que corresponda a uma opção válida")
        menuInicial()
        return;
    }
}

// Validar ID 
function verficarIdInvalido(idDoProjeto){
    idDoProjeto = Number(idDoProjeto)
    
    if (isNaN(idDoProjeto) === true || idDoProjeto < 0 || idDoProjeto > idMax){
        console.log("Este não é um id válido\n");
        //menuIdInvalido()
    }
    return idDoProjeto;
}

function tratarListaVazia(){

    if (listaDeProjetos.length === 0){
        console.log("A lista de projetos está vazia")
    }
    return true;
}

function menuAlternativo(opcaoUsuario){

    switch(opcaoUsuario){
        case "buscarOutroProjeto":
            rl.question("Como deseja seguir? \n 1- Voltar ao Menu \n 2- Buscar outro ID\n", function(opcaoUsuario){
                switch(opcaoUsuario){
                    case "1":
                        menuInicial();
                        break;
                    case "2":
                        buscarProjeto();
                        break
                        return;
                }
            });
            break;

        case "editarOutroProjeto":
            rl.question("Como deseja seguir? \n 1- Voltar ao Menu \n 2- Editar outro projeto\n", function(opcaoUsuario){
                switch(opcaoUsuario){
                    case "1":
                        menuInicial();
                        break;
                    case "2":
                        editarProjeto();
                        break
                        return;
                }
            });
            break;
    }
}

// ---------------------------------- Funções Menu Principal --------------------------

function cadastrarProjeto(){
    rl.question("Escreva o nome do seu novo projeto: ", function(nomeDoProjeto){
        // Definição de projeto
        nomeDoProjeto = nomeDoProjeto.trim();

        const projeto = {
            nome: nomeDoProjeto,
            id: listaDeProjetos.length + 1,
            // categoria: categoriaDeProjeto,
            // tempoSomado: entradaDeTempo
        }
        listaDeProjetos.push(projeto);
        idMax = listaDeProjetos.length;
        console.log(`ID-${projeto.id} | Projeto: ${projeto.nome}`);
        menuInicial();
    });
    return;
}

function buscarProjeto(){

    if (tratarListaVazia() === true){
        console.log("Não é possível buscar projetos pois não há projetos cadastrados\n")
        menuInicial("buscarOutroProjeto");
    }

    rl.question("Digite o Id do projeto que deseja buscar: ", function(idDoProjeto){

        //todo: implementar busca de projeto por nome
        
        idDoProjeto = Number(idDoProjeto);
        verficarIdInvalido(idDoProjeto);

        for (projeto in listaDeProjetos) {
            if (listaDeProjetos[projeto].id === Number(idDoProjeto)){
                    console.log(`O projeto selecionado foi ${listaDeProjetos[projeto].nome} \n`);
                    menuAlternativo("buscarOutroProjeto");
            }
        }
    });
    return;
}

function editarProjeto(){

    if (tratarListaVazia() === true){
        console.log("Não há produtos na lista para editar \n")
        menuAlternativo("editarOutroProjeto");
    }

    rl.question("Digite o Id do projeto que deseja editar: ", function(idDoProjeto){
        idDoProjeto = Number(idDoProjeto);
        verficarIdInvalido(idDoProjeto);

        rl.question("Digite o novo nome do projeto: ", function(novoNomeDoProjeto){
            for(projeto in listaDeProjetos){

                if (listaDeProjetos[projeto].id === idDoProjeto){
                    listaDeProjetos[projeto].nome = novoNomeDoProjeto;
                    menuAlternativo("editarOutroProjeto");
                }
            }
        });
    });

}

function removerProjeto(){
    rl.question("Digite o Id do projeto que deseja remover: ", function(idDoProjeto){

        // Todo: implementar remoção de projeto por nome
        
        idDoProjeto = Number(idDoProjeto);
        verficarIdInvalido(idDoProjeto);

        for (projeto in listaDeProjetos) {
            if (listaDeProjetos[projeto].id === idDoProjeto){
                if (projeto === idMax){
                    idMax = listaDeProjetos[projeto-1].id;
                }
                listaDeProjetos.splice(projeto, 1);
                menuInicial();
                return;
            }
        }
    })

}

function listarProjeto(){

    if (tratarListaVazia() === true){
        console.log("Não há projetos cadastrados para listagem \n")
        menuInicial();
    }

    for (projeto in listaDeProjetos){
        console.log(`ID-${listaDeProjetos[projeto].id} | Nome: ${listaDeProjetos[projeto].nome}`)
    }
    menuInicial();
    return;
}


function sair(){
    console.log("Encerrando o programa")
    rl.close()
}

// TODO: criar cadastrarCategoria

// TODO: logarTempo

// ---------------------------------- Menu Inicial -----------------------------------

function menuInicial () {

    console.log("")
    console.log("========== Menu Inicial ==========\n")
    console.log("1 - Adicionar Projeto")
    console.log("2 - Buscar Projeto por ID")
    console.log("3 - Atualizar Dados projeto")
    console.log("4 - Remover Projeto")
    console.log("5 - Listar Projeto")
    console.log("6 - Sair\n")
    console.log("==================================\n")

    rl.question("Selecione uma das opções acima: ", function(opcaoUsuario){

        opcaoUsuario = Number(opcaoUsuario);

        // Validar input
        verficarOpcaoInvalida(opcaoUsuario);
        gestaoProjeto(opcaoUsuario);
    });
}
menuInicial();

// ---------------------------------- CRUD Projeto --------------------------------

function gestaoProjeto(opcaoUsuario){

    switch(opcaoUsuario){

        case 1:
            cadastrarProjeto();
            break;

        case 2:
            buscarProjeto();
            break;

        case 3:
            editarProjeto();
            break;

        case 4:
            removerProjeto();
            break;

        case 5:
            listarProjeto();
            break;

        case 6:
            sair()
            break;

    }
}



