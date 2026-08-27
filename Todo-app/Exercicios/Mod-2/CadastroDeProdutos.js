// -------------------------- Criar Interface --------------------------

const readline = require('node:readline');

const  {stdin: input, stdout:output} = require('node:process');

const rl = readline.createInterface({input,output});

// -------------------------- Declarar variáveis/Objetos/Funções menores--------------------------

listaDeProdutos = []

function tratarListaVazia () {
    if (listaDeProdutos.length == ''){
        console.log("\n Não há produtos na lista para serem consultados")
        menuInicial();
        return;
    }
}

function tratarResultadoInvalido(opcaoEstoque){
        console.log("\n O ID digitado não é válido.\n")
        
        rl.question("\n Escolha uma das opções abaixo: \n" + "1 - Voltar ao menu \n" + "2 - Tentar novo ID \n", function(escolhaUsuario){
            escolhaUsuario = Number(escolhaUsuario);
            switch(escolhaUsuario){
                case 1:
                    menuInicial();
                    break;
                case 2:
                    gestaoDeEstoque(opcaoEstoque);
                    break;
            }
        })
    }


// -------------------------- Criar menu inicial --------------------------

// Funções: apresentar o menu de opções, tratar a resposta, armazenar a resposta.
function menuInicial (){

    console.log("")
    console.log("########## Menu Inicial ##########\n")
    console.log("1 - Adicionar Produto")
    console.log("2 - Buscar Produto por ID")
    console.log("3 - Atualizar Produto")
    console.log("4 - Remover Produto")
    console.log("5 - Listar Produtos")
    console.log("6 - Sair\n")
    console.log("##################################\n")

    rl.question("Selecione uma das opções acima digitando o número correspondente: ", function(escolhaUsuario){

        //Converter para número
        escolhaUsuario = Number(escolhaUsuario);

        // Tratar retorno
        if(isNaN(escolhaUsuario) === true || escolhaUsuario < 1 || escolhaUsuario > 6){
            console.log("Digite um número que corresponda a uma opção válida")
            menuInicial();
        }
        else {
            gestaoDeEstoque(escolhaUsuario);
        }
    });
}

function gestaoDeEstoque (escolhaUsuario){

    switch(escolhaUsuario){
        case 1:
            //DONE: Adicionar produto
            rl.question("Escreva o nome do produto que quer cadastrar: ", function(nomeDoProduto){
                const produto = {
                    nome: nomeDoProduto,
                    id: listaDeProdutos.length + 1
                }
                listaDeProdutos.push(produto)
                menuInicial();
            });
            break;


        case 2:
            //TODO: Buscar produto por ID
            rl.question("Digite o ID do produto que quer buscar: ", function(idDoProduto){

                // DONE: tratar cenário de lista de produtos vazia
                tratarListaVazia();

                // TODO: tratar resultados inválidos
                idDoProduto = Number(idDoProduto);
                if (isNaN(idDoProduto) === true || idDoProduto <= 0 || idDoProduto > listaDeProdutos.length) {
                    tratarResultadoInvalido(2);
                }

                for (produto in listaDeProdutos){
                    if (listaDeProdutos[produto].id === Number(idDoProduto)) {
                        console.log(`\n O produto ${listaDeProdutos[produto].id} é ${listaDeProdutos[produto].nome}`)

                        rl.question("\n Como deseja seguir? \n" + "1 - Voltar ao menu \n" + "2 - Consultar outro produto \n", function(escolhaUsuario){
                            escolhaUsuario = Number(escolhaUsuario);
                            switch(escolhaUsuario){
                                case 1:
                                    menuInicial();
                                    break;
                                case 2:
                                    gestaoDeEstoque(2);
                                    break;

                            }
                        })
                    }
                }
            })
            break;

        case 3:
            //TODO: Atualizar produto
            //DONE: Inserir o rl.question
            rl.question("Digite o ID do produto que gostaria de atualizar: ", function(idDoProduto){
                // DONE: Tratar cenários em que a lista é vazia
                tratarListaVazia();

                // DONE: tratar resultados diferentes de números ou números que não correspondem a IDs válidos
                idDoProduto = Number(idDoProduto);
                if (isNaN(idDoProduto) === true || idDoProduto <= 0 || idDoProduto > listaDeProdutos.length){
                    tratarResultadoInvalido(3);
                }

                // Todo [BUG]: o loop está editando o último produto da lista, embora eu esteja pedindo para editar o primeiro.
                rl.question(`Edite aqui o produto '${listaDeProdutos[produto].nome}' : `, function(produtoEditado){
                    for (produto in listaDeProdutos){
                        if(listaDeProdutos[produto].id === Number(idDoProduto)){

                            listaDeProdutos[produto].nome = produtoEditado;
                            console.log(listaDeProdutos[produto].nome)
                            menuInicial();
                        }
                    }
                });
            });
            break;


        case 4:
            // TODO: Remover produto
            rl.question("Digite o ID do produto que gostaria de remover: ", function(idDoProduto){
                // DONE: Tratar cenários em que a lista é vazia
                tratarListaVazia();

                // DONE: tratar resultados diferentes de números ou números que não correspondem a IDs válidos
                idDoProduto = Number(idDoProduto);
                if (isNaN(idDoProduto) === true || idDoProduto <= 0 || idDoProduto > listaDeProdutos.length){
                    tratarResultadoInvalido(4);
                }
                for (produto in listaDeProdutos){
                    if(listaDeProdutos[produto].id === Number(idDoProduto)){
                        listaDeProdutos.splice(produto, 1);
                        menuInicial();
                    }
                }
            });
            break;

        case 5:
            // Done: listar produtos
            for (produto in listaDeProdutos){
                console.log(`ID: ${listaDeProdutos[produto].id}, Produto: ${listaDeProdutos[produto].nome}`);
            }
            menuInicial();
            break;

        case 6:
            // TODO: sair

            break;
    }

}
menuInicial();
