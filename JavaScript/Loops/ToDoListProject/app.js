
// Program by me ---->

let todoList = [];
let c = 0;

while (1) {
    let choice = prompt('What would you like to do?');

    if (choice === 'quit' || choice === 'q') {
        break;
    }
    else if (choice === 'new') {
        choice = prompt('Enter new todo');
        todoList.splice(c, 0, choice);
        c++;
        console.log(`${choice} added to list`);
    }
    else if (choice === 'list') {
        console.log('**********');
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i} : ${todoList[i]}`);
        }
        console.log('**********');
    }
    else if (choice === 'delete') {
        choice = parseInt(prompt('Enter index of todo to delete'));
        if (!Number.isNaN(choice)) {
            todoList.splice(choice, 1);
            c--;
            console.log('Todo Removed');
        }
        else {
            console.log('Invalid Index');
        }
    }
}

console.log('Okay you quit the app!');








// Program Code by Course ---->

// let input = prompt('what would you like to do?');
// const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('*****************')
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('*****************')
//     } else if (input === 'new') {
//         const newTodo = prompt('Ok, what is the new todo?');
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list!`)
//     } else if (input === 'delete') {
//         const index = parseInt(prompt('Ok, enter an index to delete:'));
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`Ok, deleted ${deleted[0]}`);
//         } else {
//             console.log('Unknown index')
//         }
//     }
//     input = prompt('what would you like to do?')
// }
// console.log('OK QUIT THE APP!')