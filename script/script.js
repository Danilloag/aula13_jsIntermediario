let botaoCalcular = document.querySelector('#botaoCalcular')
let botaoLimpar = document.querySelector('#botaoLimpar')
let valorDigitado = document.querySelector('#valorDigitado')
let resultado = document.querySelector('#resultado')

let valoresArmazenados = []

botaoCalcular.addEventListener('click',() => {
    valoresArmazenados.push (valorDigitado.value)
    valorDigitado.value = '';
    resultado.innerHTML = valoresArmazenados.map(calcularTriplo)
})

function calcularTriplo(valor) {
   return valor*3
}
