function CurrencyInput(props){
    return(
        <div className="group">
            <input type="text" />
            <select>
            {Object.keys(currencies).map(element => 
                 <option value={element}>{element}</option>
            )};
            </select>
        </div>
    );
}

export default CurrencyInput;
