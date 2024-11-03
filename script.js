let numeros = [];
let operadores = [];
let numeroAtual = ''; 


function transNumero(numero) {
    numeroAtual += numero; 
    atualizarTela(); 
}


function transOperador(operador) {
    if (numeroAtual !== '') { 
        numeros.push(Number(numeroAtual)); 
        numeroAtual = ''; 
    }

    if (numeros.length > 0) { 
        operadores.push(operador);
        atualizarTela();
    }
}


function calculo() {
    if (numeroAtual !== '') {
        numeros.push(Number(numeroAtual)); 
        numeroAtual = ''; 
    }

    if (numeros.length === 0) return;

    let resultado = numeros[0];
    for (let i = 0; i < operadores.length; i++) {
        switch (operadores[i]) {
            case "+":
                resultado += numeros[i + 1];
                break;
            case "-":
                resultado -= numeros[i + 1];
                break;
            case "*":
                resultado *= numeros[i + 1];
                break;
            case "/":
                resultado /= numeros[i + 1];
                break;
        }
    }

    document.getElementById("tela").innerText = `Resultado: ${resultado}`;
    numeros = [resultado];
    operadores = [];
}


function limpar() {
    document.getElementById('tela').innerText = '';
    numeros = [];
    operadores = [];
    numeroAtual = '';
}


function atualizarTela() {
    let expressao = ''; 

    for (let i = 0; i < numeros.length; i++) {
        expressao += numeros[i]; 
        if (operadores[i]) {
            expressao += ` ${operadores[i]} `; 
        }
    }

    
    expressao += numeroAtual;

    document.getElementById("tela").innerText = expressao; 
}
