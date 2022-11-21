function userName(){
    idUsuario = document.getElementById ("username").value
    console.log(idUsuario)
}

function imcCalculator (){
    let userWeight = document.getElementById ("user_weight").value
    console.log(typeof(userWeight))

    let userHeight = document.getElementById ("user_height").value
    console.log(userHeight)

// Fórmula IMC = peso/altura²
    let imc = Number(userWeight)/(Number(userHeight)*Number(userHeight))
    console.log (imc)

    
}