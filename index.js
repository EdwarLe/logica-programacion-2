const celcius = document.getElementById('input-celcius')
const form = document.getElementById('form')
const msgErrorHTML = document.getElementById('msg-error')
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')

const convertDegrees = (e) => {
    e.preventDefault()

    const celciusValue = form.children[0].children[1].value

    if(isNaN(celciusValue) || celciusValue === '') {
        const msgError = 'Please add a correct Value'
        celcius.value = ''
        kelvin.textContent = '0'
        msgErrorHTML.textContent = msgError
        return fahrenheit.textContent = '0'
    }

    const toNumber = parseFloat(celciusValue)
    
    const fahrenheitDegrees = (celciusValue * (9 / 5)) + 32
    const kelvinDegrees = toNumber + 273.15
    
    fahrenheit.textContent = fahrenheitDegrees
    kelvin.textContent = kelvinDegrees
    
    return msgErrorHTML.textContent = ''
}

form.addEventListener('click', convertDegrees)
