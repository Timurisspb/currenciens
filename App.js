import React,  {useState} from 'react';
import CurrencyInput from './currencyInput';
import './App.css';
import { currencies, getCurrencyArray, countCurrencies} from './currency_count.ts';


function App() {
 const currencyArray =  getCurrencyArray(currencies);
 const[currenciesState, setCurrenciesState] = useState(currencies)
 const onChange = (event) => {
  
  const{name, value} = event.target
  setCurrenciesState(countCurrencies(name, +value))

 }
  return (
    <div className='column'>
      <h1>Конвертор валют</h1>
      {currencyArray.map(currency => 
      (<input key={currency.key} 
      value={currenciesState[currency.key]} 
      name={currency.key} 
      onChange={onChange}/> ))}
    </div>
  );
}

export default App;
