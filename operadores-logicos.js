/* Exercício
Receber Nome e a idade informada

verdadeiro se idade maior que 18
falso se a idade diferente de 25
falso se a idade diferente de 25 e o nome igual a Marcos
verdadeiro se a idade é diferente de 25 ou o nome é igual a marcos
verdadeiro se a idade divido por 2 é igual a zero */


function userId(userName,userAge){


    if (userAge>18) {
        console.log(`Idade maior que 18anos`);
        
    }
    if(userAge!=25){
        console.log(`Idade diferente de 25anos`)
    }
    if(userAge!=25 && userName=="Marcos"){
        console.log(`Idade diferente de 25anos e nome igual a Marcos`)
    }
    if(userAge!=25 || userName=="Marcos"){
        console.log("Idade diferente de 25 anos ou nome igual a Marcos")
    }
    if(userAge%2==0){
        console.log(`Idade pode ser dividido por 2, com resto zero`)
    }
}

console.log(userId("Fred",24))


    


