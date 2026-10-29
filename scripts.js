const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const converterDe = document.querySelector(".converter-de")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValeuToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    const dolarToday = 5.7
    const euro = 6.2
    const bitcoin = 10000
    const libra = 7.12

    if (converterDe.value == "real") {
        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)

        }

        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euro)
        }

        if (currencySelect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoin)
        }

        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libra)
        }

        currencyValeuToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }
    //SELECT = DOLAR
    if (converterDe.value = "dolar") {

        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / dolarToday)

        }

        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euro)
        }

        if (currencySelect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoin)
        }

        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libra)
        }

        currencyValeuToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    //Select EURO
    if (converterDe.value = "euro") {
        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)

        }

        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / euro)
        }

        if (currencySelect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoin)
        }

        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libra)
        }

        currencyValeuToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    //SELECT BITOCOIN
    if (converterDe.value = "bitcoin") {
        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)

        }

        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / euro)
        }

        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / bitcoin)
        }

        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libra)
        }

        currencyValeuToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


    if (converterDe.value == "libra") {
        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)

        }

        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euro)
        }

        if (currencySelect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoin)
        }

        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / libra)
        }

        currencyValeuToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }
}

function changeCurrency() {


    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".bandeira-convertida")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)