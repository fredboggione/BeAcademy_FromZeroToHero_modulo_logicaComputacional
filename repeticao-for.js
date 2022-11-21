/* 1-Crie um programa que receba do usuário um número e apresente a tabuada deste.
*/

function multiplicationTable (number){
    
    let result
    
    for (let i = 0; i <= 10; i++) {
        
        result = number * i
        console.log(result)
        
    }
}

// console.log(multiplicationTable(9))


/* 2-Crie um programa que apresente os multiplos de dois entre 0 e 100 */

function multiples (){

    let multiplesForTwo = [] 

    for( let i = 0; i <= 100; i++){

    if( i % 2 == 0){
        multiplesForTwo.push(i)
    }else{
        continue
    }
}

console.log(multiplesForTwo)

}

// console.log(multiples())

/* 3-Crie um programa que imprima os multiplos de 3 entre dois números digitados pelo usuário. */

 function multiplesForThree (number1, number2){

let result = []

if (number1 > number2){
    
    for (i = number2; i <= number1; i++)

if (i % 3 ==0){
    result.push(i)
}else{
    continue
}
console.log (result)
 } else {

 for (i = number1; i <= number2; i++)

if (i % 3 ==0){
    result.push(i)
}else{
    continue
}   
console.log (result)
 }
}

console.log(multiplesForThree(100,10))
console.log(multiplesForThree(10,100))


 
