//Cria a constante lista, pegando a classe da <ul>
const lista = document.querySelector(".lista")
const botaoOn = document.querySelector(".botaoOn")
const botaoOff = document.querySelector(".botaoOff")


function mostrarLista () {
    botaoOn.onclick = function () {
        lista.style.display = "block";
    }
}

function esconderLista () {
    botaoOff.onclick = function () {
        lista.style.display = "none";
    }
}

esconderLista();
mostrarLista();