export const currencies:Record<string, number> = {

    'USD': 1, 'EUR': 0.92, 'RUB': 94, 'JPY': 0.64, 'CNY': 12 
}
export let currencyEntries = Object.entries(currencies).map(entry => ({key: entry[0], value: entry[1]}));
export const getCurrencyArray = (currencies: Record<string, number>): CurrencyI[] =>
Object.entries(currencies).map(entry => ({key: entry[0], value: entry[1]}));

interface CurrencyI {
    key: string;
    value: number;
}

export const countCurrencies = (currencyName: string, currencyValue: number): Record<string, number> => {
    if( currencyName === 'USD'){
      return( {
        USD: currencyValue,
         EUR: currencies.EUR * currencyValue,
         RUB: currencies.RUB * currencyValue,
         JPY: currencies.JPY * currencyValue,
         CNY: currencies.CNY * currencyValue

      })
    } else {
        const USD = (currencies.USD * currencyValue) / currencies[currencyName];
        console.log(currencyValue);
        return( {
            USD,
             EUR: currencies.EUR * USD,
             RUB: currencies.RUB * USD,
             JPY: currencies.JPY * USD,
             CNY: currencies.CNY * USD,
            [currencyName]:currencyValue,
          })
    }
}
