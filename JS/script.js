{
    const calculateResult = (amount, currency) => {
        const EUR = 4.69;
        const USD = 4.32;

        switch (currency) {
            case 'EUR':
                return result = EUR * amount;
            case 'USD':
                return result = USD * amount;
        }
    }

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}