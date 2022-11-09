// spread opertor allows us to spread out an array into an individual arguments.

const cities = ['Barcelona', 'Cape town', 'Bordeaux'];
// clone the cities array into new one and do modifications to that array does not affect the original arary
const citiesCopy = [...cities];

citiesCopy.push('Santiago'); //[ 'Barcelona', 'Cape town', 'Bordeaux', 'Santiago' ]

console.log(cities)
console.log(citiesCopy);

const printTeam = (teamName, coach, ...players) => {// rest parameter
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Libery',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
printTeam(team.name, team.coach, ...team.players)// spread opertor.

// Using spread opertor we can add new items to array at the start and end of an arary. 
let cities1 = ['Barcelona', 'Cape Town', 'Bordeaux']
cities1 = [...cities1, 'Santiago']
console.log(cities1) // [ 'Barcelona', 'Cape Town', 'Bordeaux', 'Santiago' ]

