// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!

// Completely useless and obsolete , don't even look ==>
const req = new XMLHttpRequest();

req.onload = function () {
    console.log("ALL DONE WITH REQUEST!!!")
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log("ERROR!!!")
    console.log(this);
}

req.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
req.send();