/* let address = prompt("Digite seu endereço");
console.log(`O numero informado foi ${address
}`)
 */

/* let userAddress = document.getElementsByName("form_endereco_usuario");

console.log(userAddress)

document.getElementById("valor_form_endereco_usuario").innerHTML = userAddress[0].defaultValue */

function enderecoUsuario() {

let userAddress = document.getElementById ("form_user_address").value;
console.log(userAddress)

document.getElementById ("mirror").value = userAddress

document.getElementById("value_form_user_address").innerHTML = userAddress
}
