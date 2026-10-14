//Menu interativo

const clickBotaoTodoList = document.querySelector("button#botaoTodoList")

listaDeTarefas = [];

clickBotaoTodoList.onclick = function () {

    opcaoEscolhida = document.querySelector("select#menuOpcoes").value

    // 1. Cadastrar Tarefa (guardar em array)
    switch (opcaoEscolhida) {
        case "1":
            // 1.2. Receber valor
            novaTarefa = document.getElementById("novaTarefa").value
            // 1.3. Popular array
            listaDeTarefas.push(novaTarefa)
            break;

        case "2":
            // Listar tarefas (print array)
            mensagemFeedback = document.getElementById("mensagemFeedback")
            mensagemFeedback.textContent = listaDeTarefas.join(", ")
            break;

        case "3":
            // Apagar tarefa (splice array)
            removerTarefa = document.getElementById("novaTarefa").value
            listaDeTarefas.splice(Number(removerTarefa) - 1, 1)
            mensagemFeedback.textContent = listaDeTarefas.join(", ")
            break;

        case "4":
            // Sair
            // Desabilitar campo de inserção de novas tarefas.
            novaTarefa = document.querySelector("input#novaTarefa")
            novaTarefa.disabled = true

            // Desabilitar botão de ação
            botaoSair = document.querySelector("button#botaoTodoList")
            botaoSair.disabled = true
            // Alterar mensagem de feedback

            // Mensagem de feedback
            mensagemFeedback = document.getElementById("mensagemFeedback")
            mensagemFeedback.textContent = "Você saiu do ToDo list, para retornar atualize a página"
            break;

    }
}