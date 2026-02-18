//===============================
// VALORES PEGUES DO HTML
//================================
const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const inputSelect = document.querySelector(".currency-select-1")
    const inputSelect2 = document.querySelector(".currency-select-2")
    const logo = document.querySelector(".logo-usa")
    const dolarToday = 5.50
    const euroToday = 6.50

    if (inputSelect2.value == "USD") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    } if (inputSelect2.value == "EUR") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

    if (inputSelect2.value == "EUR") {
        logo.src = "./assets/euro.png"
    }
}



console.log(convertValues.value)

convertButton.addEventListener("click", convertValues)


