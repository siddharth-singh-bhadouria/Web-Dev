
//CORRECT ANSWER ====>
const usernames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

const validUserNames = usernames.filter((usr) => {
    return (usr.length < 10)
})

console.log(validUserNames)



// Wrong answer in solution file 