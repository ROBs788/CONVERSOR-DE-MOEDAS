//===============================
// VALORES PEGUES DO HTML
//================================
const convertButton = document.querySelector(".convert-button")


//===============================
// FUNÇÃO PARA CONVERTER OS VALORES
//===============================
function convertValues() 
{
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const inputSelect = document.querySelector(".currency-select-1")
    const inputSelect2 = document.querySelector(".currency-select-2")
    const logo = document.querySelector(".logo-usa")
    const currencyName = document.querySelector(".currency-2")
    const logo1 = document.querySelector(".logo-brasil")
    const currencyName1 = document.querySelector(".currency")



    if (inputSelect.value == "BRL") {

        const dolarToday = 5.50
        const euroToday = 6.50
        const libraToday = 6.99
        const bitcoinToday = 349290.53
        const realToday = 1.00

        if (inputSelect.value == "BRL") {
                logo1.src = "./assets/brasil 2.png"
                currencyName1.innerHTML = "Real Brasileiro"
        }

            if (inputSelect2.value == "USD") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputCurrencyValue / dolarToday)}

            if (inputSelect2.value == "USD") {
                logo.src = "./assets/estados-unidos (1) 1.png"
                currencyName.innerHTML = "Dólar Americano"
            }


         if (inputSelect2.value == "EUR") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
            }).format(inputCurrencyValue / euroToday)
        }

        if (inputSelect2.value == "EUR") {
            logo.src = "./assets/euro.png"
            currencyName.innerHTML = "Euro"
        }

        if (inputSelect2.value == "GBP") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
                style: 'currency',
                currency: 'GBP'
            }).format(inputCurrencyValue / libraToday)
        }

        if (inputSelect2.value == "GBP") {
            logo.src = "./assets/libra.png"
            currencyName.innerHTML = "Libra Esterlina"
        }

        if (inputSelect2.value == "BTC") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'BTC'
            }).format(inputCurrencyValue / bitcoinToday)
        }

        if (inputSelect2.value == "BTC") {
            logo.src = "./assets/bitcoin .png"
            currencyName.innerHTML = "Bitcoin"
        }

        if (inputSelect2.value == "BRL") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(inputCurrencyValue / realToday)
        }

        if (inputSelect.value == "BRL") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(inputCurrencyValue)
        }
        if (inputSelect2.value == "BRL") {
            logo.src = "./assets/brasil 2.png"
            currencyName.innerHTML = "Real Brasileiro"
        }
    }
}


//===============================
// FUNÇÃO PARA MUDAR A MOEDA E O NOME DA MOEDA A CONVERTER
//===============================
function changeCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const inputSelect = document.querySelector(".currency-select-1")
    const inputSelect2 = document.querySelector(".currency-select-2")
    const logo = document.querySelector(".logo-usa")
    const logo1 = document.querySelector(".logo-brasil")
    const currencyName = document.querySelector(".currency-2")
    const currencyName1 = document.querySelector(".currency")

  if (inputSelect.value == "USD") {

        const dolarToday = 1.00
        const euroToday = 1.16
        const libraToday = 1.33
        const bitcoinToday = 67355.22
        const realToday = 0.19

        //============================================
        // MUDAR O LOGO E O NOME DA MOEDA A CONVERTER
        //============================================
        if (inputSelect.value == "USD") {
                logo1.src = "./assets/estados-unidos (1) 1.png"
                currencyName1.innerHTML = "Dólar Americano"
        }

        if (inputSelect2.value == "USD") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputCurrencyValue / dolarToday)
        }

        if (inputSelect2.value == "USD") {
            logo.src = "./assets/estados-unidos (1) 1.png"
            currencyName.innerHTML = "Dólar Americano"
        }


         if (inputSelect2.value == "EUR") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
            }).format(inputCurrencyValue / euroToday)
        }

        if (inputSelect2.value == "EUR") {
            logo.src = "./assets/euro.png"
            currencyName.innerHTML = "Euro"
        }

        if (inputSelect2.value == "GBP") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
                style: 'currency',
                currency: 'GBP'
            }).format(inputCurrencyValue / libraToday)
        }

        if (inputSelect2.value == "GBP") {
            logo.src = "./assets/libra.png"
            currencyName.innerHTML = "Libra Esterlina"
        }

        if (inputSelect2.value == "BTC") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'BTC'
            }).format(inputCurrencyValue / bitcoinToday)
        }

        if (inputSelect2.value == "BTC") {
            logo.src = "./assets/bitcoin .png"
            currencyName.innerHTML = "Bitcoin"
        }

        if (inputSelect2.value == "BRL") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(inputCurrencyValue / realToday)
        }

        if (inputSelect.value == "USD") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputCurrencyValue)
        }
        if (inputSelect2.value == "BRL") {
            logo.src = "./assets/brasil 2.png"
            currencyName.innerHTML = "Real Brasileiro"
        }
    }
}




//===============================
// EVENTOS
//===============================
convertButton.addEventListener("click", changeCurrency)

convertButton.addEventListener("click", convertValues)


