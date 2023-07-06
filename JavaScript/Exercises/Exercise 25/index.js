// DEFINE YOUR FUNCTION BELOW:

function returnDay(day) {
    const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']
    if (day < 1 || day > 7)
        return null
    else
        return arr[day - 1]
}