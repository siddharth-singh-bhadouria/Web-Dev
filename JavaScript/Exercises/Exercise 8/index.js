function getColor(phrase) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 

    if (phrase === 'stop') {
        console.log('red');
    }

    else if (phrase === 'slow') {
        console.log('yellow');
    }
    else if (phrase === 'go') {
        console.log('green');
    }
    else {
        console.log('purple');
    }
    //AND THIS LINE
}



// if phrase is 'stop', you should print out 'red'
// if phrase is 'slow', you should print out 'yellow'
// if phrase is 'go', you should print out 'green'
// if phrase is anything else, you should print out 'purple'