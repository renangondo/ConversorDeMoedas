const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const dolarToday = 5.7

    const convertedValue = inputCurrencyValue / dolarToday

    

}

convertButton.addEventListener("click",convertValues)