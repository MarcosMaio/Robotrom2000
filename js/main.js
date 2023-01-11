const controle = document.querySelectorAll("[data-controle]") //const que irá pegar todos os elemento que possuem o data atributos de controle responsavel por conter o sinais de + e -
const estatisticas = document.querySelectorAll("[data-estatistica]")
const robotrom = document.querySelector("#robotrom")
const pecas = {   //constante que possue os dados de cada peça com seu respectivo valor de força ,pode,energia e etc.
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {  //função que vai varrer o array de elementos que para cada elemento dentro irá executar algo
    elemento.addEventListener("click", (evento) => { //Para cada elemento desses que for clicado
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)  //executa a minha função manipulaDados e pega o evento de click que está ocorrendo em x alvo de acordo com o conteudo de texto dentro dessa classe executa a manipulaDados no caso tem os sinais + e -
        atualizaEstatisticas(evento.target.dataset.peca)
    })  //evento.target.parentNode faz com que toda a vez que eu clique em um target eu busque o controle-contador daquele elemento buscando o pai dele o a class controle
})

function manipulaDados(operacao, controle) { //Função que adiciona valores , recebe como parametro operacao
    const peca = controle.querySelector("[data-contador]") //busca o controle de cada elemento que possui o data-contador
    
    if (operacao === "+") { //Se operacao for igual ao sinal "+" que e o conteudo de texto que tem dentro das classes .controle-ajuste adiciona + 1
    peca.value = parseInt(peca.value) + 1

} else {   //Se operacao não for igual ao sinal "+" quer dizer a outro sinal ou algo diminue -1
    peca.value = parseInt(peca.value) - 1
    }
}

function atualizaEstatisticas(peca) {  //Função responsavel por atualizar as estatisticas de acordo com x quantidades e peças adicionadas de acordo com as estaticas que o obejto peca contem de cada atributo 
    console.log(pecas[peca])

    estatisticas.forEach((elemento) => {
        console.log(elemento.dataset.estatistica) //Esse aqui pega as estatisticas dentro do objeto peca que serão adicionados a estatistica padrão do HTML.
        console.log(elemento.textContent) //aqui consta as estatisticas já definidas por padrão que está no HTML esse são os numero que queremos mudar para somar com x estatistica que será adicionada a cada peça aumentando a força ,poder ou energia do robo
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] //vou pegar o conteudo de texto daqule elemento as estatisticas padrão que e 0 e vou somar com as estatisticas que estão dentro do obejeto peca
    })
}

function trocaRobo () {
    robotrom.onclick = function () {
        ;
    }
}