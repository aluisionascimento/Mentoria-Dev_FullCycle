// -------------- Ex 1 --------------//

let nome = prompt("Digite o seu nome: ")

// Testando formatos
alert(`Muito prazer, ${nome}!`)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

// -------------- Ex 2 --------------//



// -------------- Ex 3 --------------//
let num1 = Number(prompt('Digite o primeiro número da soma: '))
let num2 = Number(prompt('Digite o segundo número da soma: '))
let soma = num1 + num2

window.alert(`A soma dos números fornecidos é ${soma}`)

// -------------- Ex 4 --------------//
function formulario (){
    let nome = prompt('Vamos fazer a sua ficha cadastral, comece digitando o seu nome: ')
    let idade = Number(prompt('Por favor, digite agora a sua idade: '))
    let altura = parseFloat(prompt('Para finalizar, digite aqui a sua altura: '))

    if (idade <= 10){
        return confirm(`Por favor, confirme os seus dados. \n Você se chama ${nome}, é um(a) criança de ${idade} que mede ${altura}m`)
    }
    else if (idade > 10 && idade < 18){
        return confirm(`Por favor, confirme os seus dados. \n Você se chama ${nome}, é um(a) adolescente de ${idade} anos que mede ${altura}m`)
    }
    else{
        return confirm(`Por favor, confirme os seus dados. \n Você se chama ${nome}, é um(a) adulto(a) de ${idade} anos que mede ${altura}m`)
    }
}

let confirmado = false
do {
   confirmado = formulario ()
} while (confirmado === false)

console.log('Obrigado pelas confirmações')