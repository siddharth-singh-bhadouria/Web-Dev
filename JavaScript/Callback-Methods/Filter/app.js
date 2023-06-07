const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const num = numbers.filter(num => (num < 10))


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const badMovies = movies.filter(m => m.score < 70)

// const goodMovies = movies.filter(m=> m.score > 80)
// const goodTitles = goodMovies.map(m=> m.title)

const goodMovies = movies.filter(m => m.score > 80).map(m => m.title)

const recentMovies = movies.filter(m => m.year > 2000)