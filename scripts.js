const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == "dolar") { //se o select estiver selecionado o valor de dolar, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {  //configuraçao para formatar moeda
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") { //se o select estiver selecionado o valor de euro, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {  //configuraçao para formatar moeda
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
   
}

function changeCurrency() { //funcao para trocar o paragrafo dola e euro
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

