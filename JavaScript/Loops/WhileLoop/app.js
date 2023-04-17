// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

let maximum = parseInt(prompt('Enter the maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid choice!'));
}

let c = 1;

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt('Enter your first guess');

while (parseInt(guess) !== targetNum) {
    if (guess === 'q')
        break;
    c++;
    if (guess > targetNum)
        guess = prompt('Too high!!Enter your next guess');
    else
        guess = prompt('Too low!!Enter your next guess');
}

if (guess === 'q')
    console.log('OK, YOU QUIT!');
else
    console.log(`Congratulations!!You took ${c} guesses`);