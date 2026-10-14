// ---------------------------------- Notas ------------------------------------------

// Seria o caso de criar uma classe dedicada para cada entrada de tempo em um projeto?


// ---------------------------------- Criação da Interface ----------------------------

const readline = require('node:readline');

const {stdin: input, stdout: output} = require('node:process');

let rl = readline.createInterface({input, output}), projeto;

// ---------------------------------- Funções Auxiliares ------------------------------

let listaDeProjetos = [];

let listaDeCategorias = [];

let idDoProjeto = 1;

// Refatorado -> Arrow function
const verificarOpcaoInvalida = escolhaUsuario => {
    if (isNaN(escolhaUsuario) === true || escolhaUsuario < 1 || escolhaUsuario > 6){
        console.log("Digite um número que corresponda a uma opção válida")
        menuInicial()
        return;
    }
}

// Esta função valida se o projeto buscado em diferentes contextos (consulta, edição e remoção) é válido.
const projetoValido = projetoBuscado => listaDeProjetos
    .find(projeto => projeto.id === Number(projetoBuscado) || projeto.nome.toLowerCase().trim() === projetoBuscado.toLowerCase().trim())

// Refatorado -> Arrow function
const tratarListaVazia = opcaoUsuario => {
    if (listaDeProjetos.length === 0){
            return true;
    }
    return false;
}

// Todo: analisar se há forma menos verbosa de escrever esta função. Ou se há repetições que posso eliminar
function menuAlternativo(opcaoUsuario){

    switch(opcaoUsuario){
        case "buscarOutroProjeto":
            rl.question("\n Como deseja seguir? \n 1- Voltar ao Menu \n 2- Buscar outro ID\n", function(opcaoUsuario){
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
            rl.question("\n Como deseja seguir? \n 1- Voltar ao Menu \n 2- Editar outro projeto\n", function(opcaoUsuario){
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

        case "removerOutroProjeto":
            rl.question("\n Como deseja seguir?\n 1- Voltar ao Menu\n 2- Remover outro projeto\n", function(opcaoUsuario){
                switch(opcaoUsuario){
                    case "1":
                        menuInicial();
                        break;
                    case "2":
                        removerProjeto();
                        break
                        return;
                }
            });
            break;

    }

}

// ---------------------------------- Funções Menu Principal --------------------------

// Todo [bug]: Os ids do projeto não podem ser baseados no length da listaDeProjetos, podem haver IDs deletados sendo recriados ou até problemas de IDs duplicados.
function cadastrarProjeto(){
    rl.question("Escreva o nome do seu novo projeto: ", function(nomeDoProjeto){
        // Definição de projeto
        nomeDoProjeto = nomeDoProjeto.trim();

        const projeto = {
            nome: nomeDoProjeto,
            id: idDoProjeto,
            // categoria: categoriaDeProjeto,
            // tempoSomado: entradaDeTempo
        }
        listaDeProjetos.push(projeto);
        idDoProjeto += 1;
        console.log(`\nO projeto 'ID-${projeto.id} | Nome: ${projeto.nome}' foi registrado com sucesso. \n`);
        menuInicial();
    });
    return;
}

// Refatorado -> Foi criada a função auxiliar projetoValido que é chamada aqui.
// A lógica que edita o nome do projeto está mais clean
function buscarProjeto(opcaoUsuario){

    if (tratarListaVazia() === true){
        console.log("\nNão é possível buscar um projeto pois a lista está vazia\n")
        menuAlternativo("buscarOutroProjeto");
    }

    rl.question("\nDigite o ID ou nome do projeto que deseja buscar: ", function(projetoBuscado){

        const projetoEncontrado = projetoValido(projetoBuscado);

        if(projetoEncontrado){
            console.log(`\nO projeto selecionado foi: ID-${projetoEncontrado.id} | ${projetoEncontrado.nome}\n`);
            menuAlternativo("buscarOutroProjeto");
            return;
        }

        console.log(`\nNenhum projeto encontrado com o valor buscado (${projetoBuscado})\n`);
        menuAlternativo("buscarOutroProjeto");
        return
    });
    return;
}

function editarProjeto(){

    if (tratarListaVazia() === true){
        console.log("Não há produtos na lista para editar \n")
        menuAlternativo("editarOutroProjeto");
        return;
    }

    rl.question("\nDigite o ID ou nome do projeto que deseja editar: ", function(projetoBuscado){

        const projetoEncontrado = projetoValido(projetoBuscado);

        if (projetoEncontrado){
            rl.question("\nDigite o novo nome do projeto: ", function(novoNomeDoProjeto){
                projetoEncontrado.nome = novoNomeDoProjeto;
                console.log(`\nO projeto foi renomeado para '${projetoEncontrado.nome}'\n'.`)
                menuAlternativo("editarOutroProjeto");
            });
            return;
        }

        console.log(`\nNenhum projeto encontrado com o valor buscado (${projetoBuscado})\n`);
        return menuAlternativo("editarOutroProjeto");

    });

}

function removerProjeto(){
    rl.question("\nDigite o ID ou nome do projeto que deseja remover: ", function(projetoBuscado){

        // Todo: implementar remoção de projeto por nome
        if (tratarListaVazia(projetoBuscado)){
            console.log(`\nNão há projetos para remover pois a lista está vazia\n`)
            menuInicial()
            return;
        }

        const projetoEncontrado = projetoValido(projetoBuscado);

        const indexProjetoEncontrado = listaDeProjetos.indexOf(projetoEncontrado);

        if (projetoEncontrado){
            listaDeProjetos.splice(indexProjetoEncontrado,1);
            console.log(`Esta é a lista de projetos atualizada.`)
            listarProjeto()
            return menuAlternativo("removerOutroProjeto");
        }

        console.log(`\nNenhum projeto encontrado com o valor buscado (${projetoBuscado})\n`);
        return menuInicial();
    })
}

// Refatorado -> introdução do .map
function listarProjeto(opcaoUsuario){

    if (tratarListaVazia() === true){
        console.log("\nNão há produtos na lista para editar \n")
        menuInicial();
        return;
    }

    console.log(
        listaDeProjetos
        .map(projeto => {return `ID-${projeto.id} | Nome: ${projeto.nome}`})
        .join('\n')
    );

    menuInicial();
    return;
}

function sair(){
    console.log("\nEncerrando o programa\n")
    rl.close()
}

// TODO: criar cadastrarCategoria

// TODO: logarTempo

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

        opcaoUsuario = Number(opcaoUsuario);

        // Validar input
        verificarOpcaoInvalida(opcaoUsuario);
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
            buscarProjeto(opcaoUsuario);
            break;

        case 3:
            editarProjeto();
            break;

        case 4:
            removerProjeto();
            break;

        case 5:
            listarProjeto(opcaoUsuario);
            break;

        case 6:
            sair()
            break;

    }
}



