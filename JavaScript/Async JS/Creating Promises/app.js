function fakeRequestPromise(url) {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) { resolve('Your fake data is here!!') }
            else
                reject('Request Error!!')
        }, 1000);
    })
}


fakeRequestPromise('/dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


function delayedColorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay);
    })
}


delayedColorChange('red', 1000)
    .then(() => {
        return delayedColorChange('orange', 1000)
    })
    .then(() => {
        return delayedColorChange('yellow', 1000)
    })
    .then(() => {
        return delayedColorChange('green', 1000)
    })
    .then(() => {
        return delayedColorChange('blue', 1000)
    })
    .then(() => {
        return delayedColorChange('indigo', 1000)
    })
    .then(() => {
        return delayedColorChange('violet', 1000)
    })





// ANOTHER WAY OF WRITING THE ABOVE STATEMENT BLOCK ===>

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))
