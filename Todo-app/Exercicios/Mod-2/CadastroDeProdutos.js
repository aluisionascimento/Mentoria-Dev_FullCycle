// -------------------------- Notas  --------------------------

// Sempre seguir esta lógica para declarar variáveis const > let > var

// A praxe no Js é utilizar igualdade tripla nas validações

// -------------------------- Criar Interface --------------------------

const readline = require('node:readline');

const {stdin:input, stdout:output} = require('node:process'); // importando funções específicas dentro da lib process

//const libProcess = require('node:process'); // Importando toda lib de uma vez

//const rl = readline.createInterface({input:libProcess.input,output:libProcess.output});

const rl = readline.createInterface({input, output}) // Forma mais elegante de fazer a mesma coisa que na linha acima.

// -------------------------- Declarar variáveis/Objetos/Funções auxiliares--------------------------

listaDeProdutos = []
idMax = 0;

function tratarListaVazia () {
    if (listaDeProdutos.length === 0){
        console.log("\n Não há produtos na lista para serem consultados")
        menuInicial();
        return;
    }
}

// TODO [BUG]: Esta função não está validando corretamente os IDs. Remover o length do teste, pois se algum elemento for removido a validação fica distorcida.
function verificarSeIdValido(idDoProduto){
    if  (isNaN(idDoProduto) === true || idDoProduto <= 0 || idDoProduto > idMax){
        return true;
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

function inserirProduto(nomeDoProduto){
    const produto = {
            nome: nomeDoProduto,
            id: listaDeProdutos.length + 1
        }
        listaDeProdutos.push(produto)
        idMax = listaDeProdutos.length;
}

function buscarProdutoPorID(idDoProduto){
    for (produto in listaDeProdutos){
        if (listaDeProdutos[produto].id === idDoProduto) {
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
                        return;
                }
            })
        }
    }
}

function idNaoEncontrado(escolhaUsuario){
    rl.question("\n ID não encontrado. \n" + "1 - Voltar ao menu \n" + "2 - Consultar outro produto \n", function(escolhaUsuario){
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

function editarProduto(idDoProduto){
    rl.question(`Edite aqui o produto '${listaDeProdutos[idDoProduto-1].nome}' : `, function(produtoEditado){

        // Done: Criar função editarProduto
        for (produto in listaDeProdutos){
            if(listaDeProdutos[produto].id === Number(idDoProduto)){

                listaDeProdutos[produto].nome = produtoEditado;
                console.log(listaDeProdutos[produto].nome)
                menuInicial();
            }
        }
    });
}

function removerProduto(idDoProduto){
    for (produto in listaDeProdutos){
        if(listaDeProdutos[produto].id === idDoProduto){
            if (listaDeProdutos[produto].id === idMax){
                idMax = listaDeProdutos[produto-1].id;
            } // Se o produto removido é o de ID mais alto, passar idMax para o penúltimo da lista
            listaDeProdutos.splice(produto, 1);
            menuInicial();
        }
    }
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
            return // Sem esse return a execução da função abaixo seguiria indesejadamente.
                    // O nome da prática é return first
        }
        // Remover o else num caso como esse pode ser uma boa prática num caso como esse, deixa o código mais clean e reduz a carga cognitiva.

        gestaoDeEstoque(escolhaUsuario);
    });
}

// ------------------------------------------------------------------------------

function gestaoDeEstoque (escolhaUsuario){

    switch(escolhaUsuario){
        // 1 - Adicionar produto
        case 1:
            //DONE: Adicionar produto
            rl.question("Escreva o nome do produto que quer cadastrar: ", function(nomeDoProduto){
                // cadastrarProduto(nomeDoProduto)
                inserirProduto(nomeDoProduto);
                menuInicial();
            });
            break;

        // 2 - Buscar produto
        case 2:
            //DONE: Buscar produto por ID
            rl.question("Digite o ID do produto que quer buscar: ", function(idDoProduto){

                // DONE: tratar cenário de lista de produtos vazia
                tratarListaVazia();
                // Solução: criar um count global para salvar os IDs
                idDoProduto = Number(idDoProduto);

                // DONE: transformar em função verificarSeIdValido
                if (verificarSeIdValido(idDoProduto) === true) {
                    tratarResultadoInvalido(2);
                }
                buscarProdutoPorID(idDoProduto);
                idNaoEncontrado(escolhaUsuario);
            })
            break;

        // 3 - Editar produto
        case 3:
            rl.question("Digite o ID do produto que gostaria de atualizar: ", function(idDoProduto){
                // DONE: Tratar cenários em que a lista é vazia
                tratarListaVazia();

                // DONE: tratar resultados diferentes de números ou números que não correspondem a IDs válidos
                idDoProduto = Number(idDoProduto);
                if (verificarSeIdValido(idDoProduto) === true){
                    tratarResultadoInvalido(3);
                }
                editarProduto(idDoProduto);
            });
            break;

        // 4 - Remover produto
        case 4:
            rl.question("Digite o ID do produto que gostaria de remover: ", function(idDoProduto){
                tratarListaVazia();

                idDoProduto = Number(idDoProduto);

                if (verificarSeIdValido(idDoProduto) === false){
                    tratarResultadoInvalido(4);
                }
                removerProduto(idDoProduto);
            });
            break;

        //5 - Listar produto
        case 5:
            for (produto in listaDeProdutos){
                console.log(`ID: ${listaDeProdutos[produto].id}, Produto: ${listaDeProdutos[produto].nome}`);
            }
            menuInicial();
            break;

        //Sair
        case 6:
            console.log("Encerrando execução.");
            rl.close();
            break;
    }
}
menuInicial();
