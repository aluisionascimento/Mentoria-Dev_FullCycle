# Módulos Principais

## **index.js** 
### Contém o menu principal e é o ponto de partida do programa: exibe interface, recebe valor inserido pelo user e chama função correspondente.
  - **Funções**
    - rl
    - menuInicial
## **projetoControlle.js** 
### Recebe valor passado pelo menu principal e chama as funções CRUD.
   - **Funções** 
     - gestaoProjeto: chama todas as funções do CRUD passando a opção escolhida pelo usuário no menuInicial. 
     - cadastrarProjeto
     - buscarProjeto
     - editarProjeto
     - removerProjeto
     - listarProjeto
     - sair
   - **Objetos**
     - listaDeProjetos
## **funcoesAuxiliares.js** 
### Funções chamadas pelo controller para validações, tratamentos de dados e controle de fluxo.
   - **Funções** 
     - **verificarOpcaoInvalida**: é chamado por menuInicial, verifica se a opção do usuário é valida.  
     - **projetoValido**: verifica se o projeto buscado pelo usuário existe. É chamado por buscarProjeto, editarProjeto e removerProjeto
     - **tratarListaVazia**: verificar se o usuário está tentando fazer uma ação (buscar, editar ou remover) quando não há nenhum projeto cadastrado.
     - **menuAlternativo**: permite o usuário voltar para o menu inicial ou realizar a mesma ação (buscar, editar e remover) novamente. É chamado por buscarProjeto, editarProjeto e removerProjeto

![Diagrama de E/R](/Users/aluisioneto/ADS/Estudo_de_Programacao/Metoria - Dev Full Cycle/10k/img/erdplus-7.png)