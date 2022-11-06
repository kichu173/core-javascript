// challenge area

function getTip(total, tipPercent = 0.2) {
    let calcTotal = total * tipPercent;
    console.log(`A ${tipPercent * 100}% tip on $${total} would be ${calcTotal}`);
    return calcTotal;
}

let result = getTip(100, .3);
console.log(result);