
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'Egg'
    }
}

console.log(hen.eggCount)
hen.layAnEgg()
console.log(hen.eggCount)


