// TODO: Criar estrutura da entidade Usuário (atributos: ID, Nome, Data de Nascimento, Email, Login, Senha)

let listaDeUsuarios = []

// const usuario = {
//     id: idUsuario,
//     nome: nomeDeUsuario,
//     login: loginUsuario,
//     email: emailDoUsuario,
//     status: statusUsuario,
//     dataDeNascimento: dataDeNascimentoUsuario
// }

// ---------------------------------- Funções Principais -----------------------------------

// TODO: Criar um usuario
// TODO: Buscar um usuario
// TODO: Editar um usuario
// TODO: Remover um usuario
// TODO: listar projetos de um user (?)

// ---------------------------------- Chamada das funções principais -----------------------

function menuUsuario(rl){
    // TODO: menu de usuarios
    console.log("\n========== Menu Usuário ==========\n")
    console.log("1 - Criar novo usuário")
    console.log("2 - Buscar usuario")
    console.log("3 - Editar dados de usuario")
    console.log("4 - Apagar usuario")
    console.log("\n==================================\n")

    rl.question("Selecione a opção que deseja para seguir:", function(opcaoUsuario){
        // Todo: entender como aproveitar as funções auxiliares para diferentes entidades.
    });

}

menuUsuario()

function gestaoDeUsuario (){
    // TODO: Criar usuario
    // TODO: Buscar usuario
    // TODO: Editar dados de um usuario
    // TODO: Deletar um user
}

// Todo: exportar funções deste módulo que vão ser consumidas em outros lugares no sistema.
module.exports = {
    menuUsuario
}