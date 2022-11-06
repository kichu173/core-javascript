// JS inbuilt date function
// Unix Epoch - January 1st 1970 00:00:00 (refer JS andrew mead documentation pg no.60)

const now = new Date();
console.log(now.toString()); // Sun Oct 30 2022 11:55:42 GMT+0530 (India Standard Time)
const timeStamp = now.getTime();// get timeStamp prints in number

const myDate = new Date(timeStamp);
console.log(myDate.getFullYear());// 2022

const dateOne = new Date('Jan 11 2020 12:00:00');
const dateTwo = new Date(); // current date
const timeStamp1 = dateOne.getTime(); // this comes first before current date.
console.log(timeStamp1); // 1578724200000
const timeStamp2 = dateTwo.getTime();
console.log(timeStamp2); // 1667111990227  |  1667111990227 > 1578724200000 (true)

console.log(timeStamp1 > timeStamp2 ? dateTwo.toString() : dateOne.toString());// Sat Jan 11 2020 12:00:00 GMT+0530 (India Standard Time)

// Using third party library(moment JS, used cdn in html script(notes-app) to import) to make our work less and use their handy methods
// https://momentjs.com/docs/ - link to refer

const nowMom = moment();
console.log(nowMom.toString()); // Sun Oct 30 2022 12:41:51 GMT+0530
nowMom.month(2).date(17).year(1997);// Get + Set momentJS docs. month are index based.
console.log(nowMom.format("MMM D, YYYY"));// Under Display we have format in momentJS docs // Mar 17, 1997

const now1 = moment();
now1.subtract(1, 'week').subtract(20, 'days'); // manipulate section momentJS docs
console.log(now1.format("MMM D, YYYY"));// Oct 3, 2022
console.log(now1.fromNow());// under display section -  Time from now , momentJS docs | prints 'a month ago' in console.
const nowTimeStamp = now.valueOf();// under display section -  Unix Timestamp(milliseconds) , momentJS docs
console.log(nowTimeStamp); //1667114755643

console.log(moment(nowTimeStamp).toString());// Sun Oct 30 2022 12:55:37 GMT+0530