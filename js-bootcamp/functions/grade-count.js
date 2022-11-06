// students score, total possible score
// 15/20 You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

function gradeCount(score, totalScore) {
    if(typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error(`Please provide number as an argument`);
    }

    // this part wont be executed if above condition becomes true.
    let scorePercent = (score / totalScore) * 100;
    let letterGrade = '';
    
    if (scorePercent <= 100 && scorePercent >=90) {
        letterGrade = 'A';
    } else if (scorePercent >=80) {
        letterGrade = 'B';
    } else if (scorePercent >=70) {
        letterGrade = 'C';
    } else if (scorePercent >=60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return `You got a ${letterGrade} (${scorePercent}%)!`;
}

try {
    let result = gradeCount(9, 20);
    console.log(result);
} catch(e) {
    console.log('catch is called');
    console.log(e); // prints error stack trace.
    console.log(e.message);// Prints Error('...') - Please provide number as an argument
}

console.log('test line');// even Error occurs this line executed and executes error not occurred as well.
