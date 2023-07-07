// fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('DATA PARSED...', data)
//         console.log(data.USD)
//     })
//     .catch(err => {
//         console.log('OH NO! ERROR!', err)
//     })


const getBitcoinPrice = async () => {
    try {
        const res = await (await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')).json()
        console.log(res.USD)
    }
    catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e)
    }
}

getBitcoinPrice()