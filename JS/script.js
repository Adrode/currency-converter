let currency = document.querySelector(".js-currency");
let amount = document.querySelector(".js-amount");
let result = document.querySelector(".js-result");
let description = document.querySelector(".js-description");
let EUR = 4.69;
let USD = 4.32;

document.addEventListener("submit", (event) => {
    event.preventDefault();

    //result.innerText = currency.value === 'EUR' ? (EUR * amount.value).toFixed(2) : (USD * amount.value).toFixed(2);
    //powyżej przykład dzialania za pomocą ternary

    if(currency.value === 'EUR')
    {
        result.innerText = (EUR * amount.value).toFixed(2);
        description.innerText = `1 EUR = ${ EUR } PLN`;
    }
    else if(currency.value === 'USD')
    {
        result.innerText = (USD * amount.value).toFixed(2);
        description.innerText = `1 USD = ${ USD } PLN`;
    }
})