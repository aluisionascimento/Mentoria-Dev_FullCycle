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

const pet = {
    nome: "Rex",
    latir: function (){
        console.log(this.nome, "Diz: Au Au!");
    }
};

function executarAcao(acao){
    acao();
}

executarAcao(pet.latir);

const latidoTeste = pet.latir.bind(pet)

//latidoTeste();

const guerreiro = {
    classe: "Guerreiro",
    atacar: function(arma){
        console.log(this.classe + "ataca usando" + arma);
    }
}

const mago = {
    classe: "Mago"
};

mago.atacar(call("Cajado"));