
function soma(){
    const visor = document.querySelector('#visor')
    const n1 = document.getElementById("n2").value;
    const n2 = document.getElementById("n2").value;
    let resultado = Number(n1) + Number(n2)
    visor.innerHTML = resultado.toFixed(2);
}

function sub(){
    const visor = document.querySelector('#visor')
    const n1 = document.querySelector('#n1');
    const n2 = document.querySelector('#n2');
    let resultado = Number(n1.value) - Number(n2.value)
    visor.innerHTML = resultado.toFixed(2);
}

function mult(){
    const visor = document.querySelector('#visor')
    const n1 = document.querySelector('#n1');
    const n2 = document.querySelector('#n2');
    let resultado = Number(n1.value) * Number(n2.value)
    visor.innerHTML = resultado.toFixed(2);
}

function div(){
    const visor = document.querySelector('#visor')
    const n1 = document.querySelector('#n1');
    const n2 = document.querySelector('#n2');
    let resultado = Number(n1.value) / Number(n2.value)
    visor.innerHTML = resultado.toFixed(2);
}

function limpar(){
    let visor = document.querySelector('#visor');
    visor.innerHTML = 'pinto'
    document.querySelector('#n1').value  = '';
    document.querySelector('#n2').value  = '';
    
}


