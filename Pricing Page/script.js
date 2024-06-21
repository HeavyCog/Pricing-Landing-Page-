document.addEventListener('DOMContentLoaded', function() {
    const currencySelector = document.getElementById('currency');
    const prices = document.querySelectorAll('.price');

    // Define conversion rates
    const usdToInrRate = 83.56; // Conversion rate from USD to INR
    const eurToInrRate = 89.37 ; // Conversion rate from EUR to INR
    const gbpToInrRate = 105.68; // Conversion rate from GBP to INR
    const jpyToInrRate = 0.52;   // Conversion rate from JPY to INR
    const krwToInrRate = 0.060; // Conversion rate from KRW to INR
    const rubToInrRate = 0.94; // Conversion rate from RUB to INR

    function convertPrices(currency) {
        prices.forEach(price => {
            let currentPrice = parseFloat(price.dataset.price); // original INR price
            let convertedPrice;

            switch (currency) {
                case 'USD':
                    convertedPrice = currentPrice / usdToInrRate;
                    price.innerHTML = `$${convertedPrice.toFixed(2)}<span>/mo</span>`;
                    break;
                case 'EUR':
                    convertedPrice = currentPrice / eurToInrRate;
                    price.innerHTML = `€${convertedPrice.toFixed(2)}<span>/mo</span>`;
                    break;
                case 'GBP':
                    convertedPrice = currentPrice / gbpToInrRate;
                    price.innerHTML = `£${convertedPrice.toFixed(2)}<span>/mo</span>`;
                    break;
                case 'JPY':
                    convertedPrice = currentPrice / jpyToInrRate;
                    price.innerHTML = `¥${convertedPrice.toFixed(2)}<span>/mo</span>`;
                    break;
                case 'KRW':
                    convertedPrice = currentPrice / krwToInrRate;
                    price.innerHTML = `₩${convertedPrice.toFixed(2)}<span>/mo</span>`;
                    break;
                case 'RUB':
                    convertedPrice = currentPrice / rubToInrRate;
                    price.innerHTML = `₽${convertedPrice.toFixed(2)}<span>/mo</span>`;
                    break;
                default:
                    price.innerHTML = `₹${currentPrice.toFixed(2)}<span>/mo</span>`;
                    break;
            }
        });
    }


    currencySelector.addEventListener('change', function() {
        let selectedCurrency = this.value;
        convertPrices(selectedCurrency);
    });

    convertPrices(currencySelector.value);
});
