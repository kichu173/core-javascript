function printTeam(teamName, coachName, ...players) {
    // rest parameters takes function params as array as multiple values passed in. (ex: players in function parameter with ...syntax)
    console.log(`Team: ${coachName}`);
    console.log(`Coach: ${coachName}`);
    console.log(`Players: ${players.join(', ')}`);
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry');
// ['Marge', 'Aiden', 'Herbert', 'Sherry'].join()   ['Marge', 'Aiden', 'Herbert', 'Sherry'].join('')   ['Marge', 'Aiden', 'Herbert', 'Sherry'].join(' ')
// 'Marge,Aiden,Herbert,Sherry'                     'MargeAidenHerbertSherry'                           'Marge Aiden Herbert Sherry'

const calculateAverage = (thing, ...numbers) => {
    //return (numOne + numTwo) / 2
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('age', 0, 100, 88, 64))