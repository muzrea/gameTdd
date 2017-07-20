/**
 * Created by muzrea on 17-7-19.
 */
'use strict';
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');