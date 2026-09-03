// Hoisting

function testarHoisting(){
    console.log(nomeDoProduto)
    var nomeDoProduto = "carro"
}
//testarHoisting()

var item = "teclado";

function testar(){
    console.log(item);
    //var item = "mouse"
    console.log(item);
}
//testar();
//console.log(typeof produto);


var produto = "Cadeira Gamer";

function produto(){
    return "Eu sou uma função";
}

//console.log(typeof produto);


var heroi = "Batman";

function prepararBatalha(){
    console.log("A:", heroi);

    if (true){
       var heroi = "Superman";
    }

    console.log(heroi);

}
// prepararBatalha();
// console.log("C:", heroi);

// --------------------------------------------------------

// Bind

const pet = {
    nome: "Rex",
    latir: function (){
        console.log(this.nome, "Diz: Au Au!");
    }
};

function executarAcao(acao){
    acao();
}

//executarAcao(pet.latir);

const latidoTeste = pet.latir.bind(pet)

//latidoTeste();

// --------------------------------------------------------

// CALL

const guerreiro = {
    classe: "Guerreiro",
    atacar: function(arma){
        console.log(this.classe + " ataca usando " + arma);
    }
}

const mago = {
    classe: "Mago"
};

// FuncaoQueQueroEmprestada.call(NovoDono, Argumento1, Argumento2, ...)
// guerreiro.atacar.call(mago, "Cajado")


const pessoaA = {
    nome: "Ana",
    apresentar: function(cidade) {
        console.log("Olá, meu nome é " + this.nome + " eu moro em " + cidade + ".");
    }
}

const pessoaB = {
    nome: "Carlos"
};

// pessoaA.apresentar("Manaus");
// pessoaA.apresentar.call(pessoaB, "São Paulo")

// --------------------------------------------------------

// TDZ

let valor = "Global";

function testarTDZ() {
    console.log("A: ", valor);

    if (true){
        console.log("B: ", valor);
        let valor = "Local";
    }
}

//testarTDZ();

// --------------------------------------------------------

// Closure

function criarGerador (prefixo) {
    let contador = 0;

    return function(){
        contador++;
        console.log(prefixo + "-" + contador)
    }
}

const gerarIdProduto = criarGerador("PROD");

for (i= 0; i < 10; i++){
    gerarIdProduto("PROD")
}

