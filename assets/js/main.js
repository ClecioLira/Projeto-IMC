//Capturar evento do submit do formulário
const form = document.querySelector('#form')

//Previniu o default
form.addEventListener('submit', function(event) {
    event.preventDefault()
//Capturou os dados do input
    const peso = event.target.querySelector('#ipeso')
    const altura = event.target.querySelector('#ialtura')

    const pesoN = Number.parseFloat(peso.value) //trans string em number
    const alturaN = Number.parseFloat(altura.value) //trans string em number

    if (!pesoN) { //checar peso
        setResultado ('Peso Inválido.', false)
        return
    }
    if (!alturaN) { //checar altura
        setResultado ('Altura Inválida.', false)
        return
    }

    const imc = getImc(pesoN, alturaN) //Calculo IMC
    const nivelImc = getNivelImc(imc) //Nivel IMC

    const msg = `Seu IMC é ${imc} (${nivelImc}).` //Criou a mensagem

    setResultado(msg, true)
})

//Mostrar o grau do IMC
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

//Metodo do if sem bloco (um pouco arriscado)
    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}

//Calcular o IMC
function getImc(pesoN, alturaN) {
    const imc = pesoN / alturaN ** 2
    return imc.toFixed(2)
}

//Criar parágrafo
function criarP() {
    const p = document.createElement('p')
    return p
}

//Mostrar o resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#res')
    resultado.innerHTML = ''
    const p = criarP()

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('paragrafo-resultado-false')
    }

    p.innerHTML += msg
    resultado.appendChild(p)
}