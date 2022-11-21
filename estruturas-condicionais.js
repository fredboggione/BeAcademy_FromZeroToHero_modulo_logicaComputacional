/* 
1-Recebe peso e altura
imc<19 abaixo do peso
19<=imc<25 peso normal
25>=imc<30 sobrepeso
30>=imc<40 obesidade tipo 1
imc>=40 obesidade mórmida
*/

function imc (weight,height) {
    
    let userImc =(weight/Math.pow(height,2))

    if (userImc<19){
        console.log(`Abaixo do peso seu imc é ${userImc}`)

    }else if (userImc>=19 && userImc<25){
        console.log(`Peso normal, seu imc é ${userImc}`)

    }else if (userImc>25 && userImc<30){
        console.log(`Sobrepeso, seu imc é ${userImc}`)

    }else if (userImc>=30 && userImc<40){
            console.log(`Obesidade tipo 1, seu imc é ${userImc}`)
    }else {
        console.log (`Obesidade mórbida, seu imc é ${userImc}`)

        }

}

console.log(imc(64,1.80))

/* 2- menor que 18 - menor de idade
maior que 18 e menor que 60 adulto
mais que 60 - idoso  */

function verifyAge (age){
    
    if (age<18){
        console.log (`Idade menor que 18 anos`)
    }else if (age>18 && age<60){
        console.log(`Adulto`)
    }else {
        console.log(`Idoso`)
    }
}

console.log (verifyAge(60))


/* 3- Crie um programa que permita ao usuário escolher a operação a realizar (depósito ou saque), recebe a informação da operação escolhida e o valor do usuário e, em seguida, atualize o seu saldo. Ao final exiba o valor inicial, a operação realizada e o saldo atual. */



let balance = 0

function withdrawValue (value){
    
    if (value>balance){
        return console.log (`A operação escolhida foi saque.Saldo insuficiente, seu saldo é:${balance}`)
    } else {
        balance = balance-value
        return console.log (`A operação escolhida foi saque.Retirada realizada com sucesso, seu novo saldo é ${balance}`)
    }

}
 function depositValue (value){
    balance= balance+value
    return console.log (`A operação escolhida foi depósito. Seu novo saldo é ${balance}`)

 }

 console.log(depositValue(1000))
 console.log(depositValue(500))
 console.log(withdrawValue(1000))
 console.log(withdrawValue(1000))
