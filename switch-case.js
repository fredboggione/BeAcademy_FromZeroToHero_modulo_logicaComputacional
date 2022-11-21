/* 1 - Crie um programa que solicite ao usuário a operação desejada e implemente a operação desejada e implemente as quatro operações matemáticas (soma (+),suside2traçao(-),multiplicação(*) e divisão)(/) */

function simpleCalculator (operation, number1,number2){

    let total

    switch (operation){
        case "+": 
        total = number1 + number2
        return console.log(`O Resultado da soma é ${total}`)
        break
        case "-":
            total = number1 - number2
            return console.log(`O Resultado da subtração é${total}`)
            break
        case "*":
            total = number1 * number2
            return console.log(`O Resultado da multiplicação é${total}`)
            break
        case "/":
            total = number1 / number2
            return console.log(`O Resultado da divisão é ${total}`)
            break
        default: 
        return console.log(`Operação desconhecida, tente novamente.`)
    }
}

console.log(simpleCalculator("-",10,20))

/* 2-Crie um programa que receba do usuário a figura geométrica que deseja calcular a área e o perímetro (Q-Quadrado ou T-Triangulo) e calcule e exiba a área e o perímetro da figura escolhida. */

// Fórmula para a área de um triângulo:A=b*h/2

// Condição de existência de um triângulo:Só irá existir um triângulo se, somente se, os seus lados obedeceram à seguinte regra: um de seus lados deve ser maior que o valor absoluto (módulo) da diferença dos outros dois lados e menor que a soma dos outros dois lados

//Fórmula do perímetro do triângulo: ladoA+ladoB+ladoC

// Fórmula para a área de um quadrado: A = l^2
// Condição de existência de um quadrado:Trata-se de uma figura geométrica plana poligonal e convexa que possui quatro lados congruentes e quatro ângulos também congruentes e retos.
//Fórmula do perímetro do quadrado:P=4*L

function triangle (parameter,side1,side2,base){
    
    let triangle
    let height

    if (Math.abs( side2 + base ) > side1 &&
        Math.abs( side1 + base) > side2 &&
        Math.abs( side1 + side2) > base) {

            let s = (side1+side2+base)/2
            height = Math.sqrt([s*(s-side1)*(s-side2)*(s-base)])
            console.log(height)

            switch (parameter){
                case "A":
                    triangle = base*height/2
                    return console.log(`A área é ${triangle}`)
                    break
                case "P":
                    triangle = side1 + side2 + base
                    return console.log(`O perímetro do triângulo é ${triangle}`)
                    break
                default:
                    return console.log(`Dados não reconhecidos, tente novamente`)
            }        
    }else {
        return console.log(`Não é um triângulo`)  
        }
    
}
console.log (triangle("A",15,15,18))


