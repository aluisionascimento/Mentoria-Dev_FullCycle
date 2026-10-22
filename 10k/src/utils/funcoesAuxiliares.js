
// Refatorado -> Arrow function
const verificarOpcaoInvalida = escolhaUsuario => {
    if (isNaN(escolhaUsuario) === true || escolhaUsuario < 1 || escolhaUsuario > 6){
        console.log("Digite um número que corresponda a uma opção válida")
        return true;
    }
    return false;
}

// Esta função valida se o projeto buscado em diferentes contextos (consulta, edição e remoção) é válido.
const projetoValido = (projetoBuscado, listaDeProjetos) => listaDeProjetos
    .find(projeto => projeto.id === Number(projetoBuscado) || projeto.nome.toLowerCase().trim() === projetoBuscado.toLowerCase().trim())

// Refatorado -> Arrow function
const tratarListaVazia =  listaDeProjetos => {
    if (listaDeProjetos.length === 0){
        return true;
    }
    return false;
}

// acaoVolta = chamar menu principal, acaoRepetir = repetir ação em curso buscar/remover/editar, etc
const menuAlternativo = (rl, textoOpcao2, acaoVoltar, acaoRepetir) => {
    rl.question(`Como deseja seguir?\n1-Voltar ao menu\n2-${textoOpcao2}\n`, function(opcao){
        if(opcao === "1"){
            acaoVoltar()
            return;
        }
        else if (opcao === "2"){
            acaoRepetir(rl)
            return;
        }
        else{
            console.log("Esta não é uma opção válida, tente novamente");
            acaoVoltar();
        }

    })
}

module.exports = {
    verificarOpcaoInvalida,
    tratarListaVazia,
    projetoValido,
    menuAlternativo
}