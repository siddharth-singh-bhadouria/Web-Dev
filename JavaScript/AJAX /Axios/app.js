// fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })


// axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
//     .then(res => {
//         console.log(res.data.USD)
//     })
//     .catch(e => {
//         console.log('ERROR!!', e)
//     })

const getBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
        console.log(res.data.USD)
    }
    catch (e) {
        console.log("ERROR!", e)
    }
}

getBitcoinPrice()