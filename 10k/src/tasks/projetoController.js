// TODO: Criar estrutura da entidade Categoria
// TODO: Criar estrutura da entidade Tag
// TODO: Criar estrutura da entidade Marco (atributos: Data limite, Status, Meta de tempo)
// TODO: Criar estrutura da entidade Registro de Tempo (atributos: Entrada, Saída)
// TODO: Implementar relacionamento entre Usuário e Projetos (1:N)
// TODO: Implementar relacionamento entre Categoria e Projeto (1:N)
// TODO: Implementar relacionamento entre Tags e Projetos (N:N)
// TODO: Implementar relacionamento entre Marco e Projeto (1:N)
// TODO: Implementar relacionamento de Registro de Tempo com Usuário e Projeto (1:N)
// TODO: Implementar função para calcular o tempo total logado no Projeto de forma derivada dos Registros de Tempo
// TODO: Atualizar fluxos de criação, busca e edição de Projetos para consumir as novas entidades
// ---------------------------------- Importação de funções --------------------------------

const {
    projetoValido,
    tratarListaVazia,
    menuAlternativo
} = require('../utils/funcoesAuxiliares.js')

// ---------------------------------- Declaração de variáveis ------------------------------

let listaDeProjetos = [];

let idDoProjeto = 1;

// ---------------------------------- Funções Principais -----------------------------------

function cadastrarProjeto(rl, menuInicial) {
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
function buscarProjeto(rl, menuInicial) {

    const textoOpcao2 = "Buscar outro projeto"

    if (tratarListaVazia(listaDeProjetos) === true){
        console.log("\nNão é possível buscar um projeto pois a lista está vazia\n")
        menuInicial();
        return;
    }

    rl.question("\nDigite o ID ou nome do projeto que deseja buscar: ", function(projetoBuscado){

        const projetoEncontrado = projetoValido(projetoBuscado, listaDeProjetos);

        if(projetoEncontrado){
            console.log(`\nO projeto selecionado foi: ID-${projetoEncontrado.id} | ${projetoEncontrado.nome}\n`);
        }
        else{
            console.log(`\nNenhum projeto encontrado com o valor buscado (${projetoBuscado})\n`);
        }

        menuAlternativo(
            rl,
            textoOpcao2,
            menuInicial,
            () => buscarProjeto(rl, menuInicial)
        );
    });
}

function editarProjeto(rl, menuInicial) {

    const textoOpcao2 = "Editar outro projeto";

    if (tratarListaVazia(listaDeProjetos) === true){
        console.log("Não há produtos na lista para editar \n")
        menuInicial();
        return;
    }

    //Todo: Eliminar a duplicação da chamada menuAlternativo adotando uma guard clause com Promises (await rl.question).
    rl.question("\nDigite o ID ou nome do projeto que deseja editar: ", function(projetoBuscado){

        const projetoEncontrado = projetoValido(projetoBuscado, listaDeProjetos);

        if (projetoEncontrado){
            rl.question("\nDigite o novo nome do projeto: ", function(novoNomeDoProjeto){

                projetoEncontrado.nome = novoNomeDoProjeto;

                console.log(`\nO projeto foi renomeado para '${projetoEncontrado.nome}'\n`)

                menuAlternativo(
                    rl,
                    textoOpcao2,
                    menuInicial,
                    ()=> editarProjeto(rl, menuInicial)
                );
            });
        }
        else{
            console.log(`\nNenhum projeto encontrado com o valor buscado (${projetoBuscado})\n`);

            menuAlternativo(
                rl,
                textoOpcao2,
                menuInicial,
                ()=> editarProjeto(rl, menuInicial)
            );
        }
    });
}

function removerProjeto(rl, menuInicial){
    rl.question("\nDigite o ID ou nome do projeto que deseja remover: ", function(projetoBuscado){

        const textoOpcao2 = "Remover outro projeto";

        if (tratarListaVazia(listaDeProjetos) === true){
            console.log(`\nNão há projetos para remover pois a lista está vazia\n`)
            menuInicial()
            return;
        }

        const projetoEncontrado = projetoValido(projetoBuscado, listaDeProjetos);

        const indexProjetoEncontrado = listaDeProjetos.indexOf(projetoEncontrado);

        if (projetoEncontrado){
            listaDeProjetos.splice(indexProjetoEncontrado,1);

            console.log(`Esta é a lista de projetos atualizada.`)

            menuAlternativo(
                rl,
                textoOpcao2,
                menuInicial,
                () => removerProjeto(rl, menuInicial)
            )
            return;
        }

        console.log(`\nNenhum projeto encontrado com o valor buscado (${projetoBuscado})\n`);
        menuInicial()
    })

}

// Refatorado -> introdução do .map
function listarProjeto(menuInicial){

    if (tratarListaVazia(listaDeProjetos) === true){
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

// ---------------------------------- Chamada das funções principais --------------------------------

function gestaoProjeto(opcao, rl, menuInicial){

    switch(opcao){

        case 1:
            cadastrarProjeto(rl, menuInicial);
            break;

        case 2:
            buscarProjeto(rl, menuInicial);
            break;

        case 3:
            editarProjeto(rl, menuInicial);
            break;

        case 4:
            removerProjeto(rl, menuInicial);
            break;

        case 5:
            listarProjeto(menuInicial);
            break;

        case 6:
            sair(rl);
            break;

    }
}

module.exports = {
    gestaoProjeto
}