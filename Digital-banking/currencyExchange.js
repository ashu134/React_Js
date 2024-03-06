// From Currency Select Element
const fromCurrency = document.getElementById('fromCurrency');
// To Currency Select Element
const toCurrency = document.getElementById('toCurrency');
// From Currency Input Element
const amount = document.getElementById('amount');
// To Currency Input Element
const result = document.getElementById('result');
// Convert Button
const convert = document.getElementById('convert');
// Swap Button
const swap = document.getElementById('swap');
const swap1 = document.querySelector('.converter');
console.log(swap1);

let fromCurrencyValue;
let toCurrencyValue;
const fromCurrencyRate = 1;
// This Rate will Get From API
let toCurrencyRate = null;
//const convert1= document.getElementById('swap');
fromCurrency.addEventListener('click', function(){
  alert('Hello World');
  });

/**
 *
 * @convertCurrency() This function contains the logic to convert currency
 * Before calling this function we need to set appropriate data in the uninitialized variables.
 */
function convertCurrency() {
  if (toCurrencyRate === null || isNaN(parseFloat(amount.value))) return;
  const convertedAmount = parseFloat(amount.value) * toCurrencyRate;
  result.value = convertedAmount.toFixed(2);
}

const currencyListAPI_URL =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json';

// Fetching the Currency List- ["usd","inr","eur",...]
fetch(currencyListAPI_URL)
  .then(response => response.json())
  .then(data => {
    // Inserting Currency List into the select elements
    for (i in data) {
      const option1 = new Option(data[i], i);
      const option2 = new Option(data[i], i);
      fromCurrency.add(option1);
      toCurrency.add(option2);
      console.log(option1);
      console.log(option2);
    }
  });

// Fetching Currencies Information
async function fetchCurrenciesInfo() {
  // If fromCurrencyValue or toCurrencyValue undefined then return;
  if (!fromCurrencyValue || !toCurrencyValue) return;

  // Disabling the Convert and Swap Button
  convert.disabled = true;
  swap.disabled = true;
  // Changing the Inner Text of the convert button to fetching
  convert.innerText = 'Fetching...';

  const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrencyValue}/${toCurrencyValue}.json`;
  try {
    // Read the following comment to know what will get in the "data" variable
    const data = await (await fetch(apiUrl)).json();
    /**
     * if (fromCurrencyValue = usd), and (toCurrencyValue = inr) then -
     *
     * fromCurrencyValue (usd) = 1
     *
     * data = {
     *    "date": "YYY-MM-DD",
     *    toCurrencyValue("inr"): 82.83037298
     * }
     *
     */
    if (data[toCurrencyValue] && !isNaN(parseFloat(data[toCurrencyValue]))) {
      toCurrencyRate = parseFloat(data[toCurrencyValue]);
    } else {
      toCurrencyRate = null;
      alert('Currency Rate not found in the Response JSON.');
    }
  } catch (err) {
    toCurrencyRate = null;
    console.log(err.message);
  } finally {
    convert.innerText = 'Convert';
    convert.disabled = false;
    swap.disabled = false;
  }
}

// This function will Invoke
const onSelectChange = (e, fromCurrency = true) => {
  // it will prevent the selection through up and down arrow key
  e.target.disabled = true;
  e.target.disabled = false;

  const value = e.target.value;
  // fromCurrency true means changing the from currency select element, else it is To currency select element
  if (fromCurrency) {
    fromCurrencyValue = value;
  } else {
    toCurrencyValue = value;
  }
  // After putting the value into the variable fetch the currencies info
  fetchCurrenciesInfo();
};

// On select Change
fromCurrency.addEventListener('change', e => onSelectChange(e));
toCurrency.addEventListener('change', e => onSelectChange(e, false));

// Perform currency conversion on button click
convert.addEventListener('click', convertCurrency);

// Swap the currencies on button click
swap.addEventListener('click', () => {
  if (!toCurrencyValue || !fromCurrencyValue) return;
  // swapping the variables
  [toCurrencyValue, fromCurrencyValue] = [fromCurrencyValue, toCurrencyValue];

  // Swapping the value of the Select elements
  fromCurrency.value = fromCurrencyValue;
  toCurrency.value = toCurrencyValue;

  // From currency amount = To currency amount
  // amount.value = result.value;
  [amount.value, result.value] = [result.value, amount.value];

  // Swapping the Currency Rate
  toCurrencyRate = fromCurrencyRate / toCurrencyRate;
  convertCurrency();
});
