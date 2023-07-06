//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// THIS IS A JS OBJECT
const parsedData = JSON.parse(data);




// FOR OBJECT TO JSON STRING ==>

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

// THE RESULTING JSON STRING ==>

const jsonString = JSON.stringify(dog)