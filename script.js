let votos = 0
let yaVoto = false;
const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")

boton.addEventListener("click", function(){
if(yaVoto === true){
  alert("Ya has votado. Gracias por tu participación.")
  return
} else{
votos = votos + 1
yaVoto = true
}

textoVotos.innerText = "Votos: " + votos

console.log("voto registrado")

})


const form = document.getElementById("formPropuesta")

form.addEventListener("submit", function(e){

let nombre = document.getElementById("nombre").value
let idea = document.getElementById("idea").value

if(nombre = "" || idea == ""){

document.getElementById("mensaje").innerText = "Completa todos los campos"

}

})