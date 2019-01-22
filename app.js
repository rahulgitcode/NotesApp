console.log('Starting app.js...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var command = process.argv[2];
const argv = yargs.argv;

console.log(argv);

if(command === 'read'){
    console.log('Reading notes..');
}else if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
    console.log('listing the notes...');
}else{
    console.log('Command not found!');
}
