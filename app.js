let numerosJaSorteados = [];
const numeroMaximo = 10

function editarMensagem(tag, texto) {
    const elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function limparInput() {
    const elemento = document.querySelector('input');
    elemento.value = "";
}

function verificarChute() {
    const chute = document.querySelector('input').value;

    tentativas++;
    console.log(numeroSecreto)
    if (chute == numeroSecreto) {
        editarMensagem('h1', 'Você acertou o número!');
        editarMensagem('p', `Tentativas realizadas: ${tentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', 'true')
        console.log(numerosJaSorteados);
    } else {
        editarMensagem('h1', 'Você errou o número!');
        if (chute > numeroSecreto) {
            editarMensagem('p', 'O número secreto é menor');
        } else {
            editarMensagem('p', 'O número secreto é maior');
        }
    }
    limparInput();
}


function gerarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * numeroMaximo + 1)
    if (numerosJaSorteados.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio()
    } else { 
        numerosJaSorteados.push(numeroAleatorio)
        return numeroAleatorio 
    }
}

function reiniciarJogo() {
    if (numerosJaSorteados.length == numeroMaximo) {
        console.log("Lista sorteada esvaziada")
        numerosJaSorteados = []
    }
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('chutar').removeAttribute('disabled')
    limparInput();
    editarMensagem('h1', "Jogo do Número Secreto");
    editarMensagem('p', "Escolha um número entre 1 e 10:");
}
reiniciarJogo();




