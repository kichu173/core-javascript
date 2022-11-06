// challenge area 

function isValidPassword(pass) {
    return pass.length > 8 && !pass.includes('password');
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@$^&#*&'));
console.log(isValidPassword('asdfpasdfpoijpassword'));