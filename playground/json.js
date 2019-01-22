var obj = {
    name : 'Rahul',
    age: 22
}

//convert JSON to string
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

//convert string to json
// var str = '{"name":"Rahul","age":"22"}';
// var jsonObj = JSON.parse(str);
// console.log(typeof jsonObj);
// console.log(jsonObj);

//write json object as string to file
const fs = require('fs');
var writestr = JSON.stringify(obj);

fs.writeFileSync('notes.json', writestr);

//read the string from file
var readstr = fs.readFileSync('notes.json');
var readObj = JSON.parse(readstr);

console.log(typeof readObj);
console.log(readObj);