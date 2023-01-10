//const botao = document.querySelector("#calcular")


//botao.addEventListener("click", function (){
    //console.log("FUI CLICADO")

//}) 

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
})