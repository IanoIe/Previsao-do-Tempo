
const key = "35793bceae0cc9b1f8af44ab2c712d15"


function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = dados.name
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt `).then(resposta => resposta.json())
    
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)

}