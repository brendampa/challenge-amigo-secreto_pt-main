let listaAmigosSorteados = [];
let amigoRandom;
let listaSorteados = [];

function adicionarAmigo(){
let nomeAmigo = document.getElementById('amigo').value;
if (nomeAmigo==''){
    alert('Por favor, insira um nome!');
    return;
}else {
    listaAmigosSorteados.push(nomeAmigo);
    AtualizarListaAmigos();
    limparCampo();
}
}
function limparCampo(){
    let nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
}

function AtualizarListaAmigos(){
    let listaAmigosExibir = document.getElementById('listaAmigos');
    listaAmigosExibir.innerHTML='';

    listaAmigosSorteados.forEach(amigo =>{
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosExibir.appendChild(li);
    }

    )
}

function sortearAmigo() {

    let campoSorteio = document.getElementById('resultado');

    if (listaAmigosSorteados.length == 0){
        alert('Por favor, insira nomes para o sorteio.');
    } else { do {amigoRandom = Math.floor(Math.random()* listaAmigosSorteados.length)}
        while (listaSorteados.includes(listaAmigosSorteados[amigoRandom]));

        listaSorteados.push(listaAmigosSorteados[amigoRandom]);
        campoSorteio.innerHTML = `Sorteado: ${listaAmigosSorteados[amigoRandom]}`;
        
    }
}