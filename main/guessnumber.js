/**
 * Created by muzrea on 17-7-19.
 */
'use strict';
var readlineSync = require('readline-sync');
function generateGivenNumbers(){
    var givenNumber = [4];
    for(var i in givenNumber){
        givenNumber[i] = Math.floor(Math.random()*9);
        if(givenNumber.indexOf(givenNumber[i])<0){
            givenNumber.pop()
        }
    }
    return givenNumber;
}
function inputNumbers(){
    var numbers = [4];
    var remarks = ['a','next','next','next']
    /*for(var i in numbers){
     numbers[i] = readlineSync.question( `Please input ${remarks[i]} number:  `);
     console.log(numbers[i]);
     }*/
    numbers[0] = readlineSync.question( `Please input a number:  `);
    numbers[1] = readlineSync.question( `Please input next number:  `);
    numbers[2] = readlineSync.question( `Please input next number:  `);
    numbers[3] = readlineSync.question( `Please input next number:  `);
    return numbers;
}

function guessNumber(){
    let givenNumber = this.generateGivenNumbers();
    let numbers = this.inputNumbers();
    let countA = 0;
    let count = 0;
    for(var i in numbers){
        for(var j in givenNumber){
            if(numbers[i]==givenNumber[j]){
                count++;
            }
        }
    }
    for(var i in givenNumber){
        if(numbers[i]==givenNumber[i]){
            countA++;
        }
    }
    let countB = count-countA;
    let result =  `${countA}A${countB}B`;
    return result;
}

//var result = guessNumber(givenNumber,numbers);
//console.log(result);
module.exports.generateGivenNumbers = generateGivenNumbers;
module.exports.inputNumbers = inputNumbers;
module.exports.guessNumber = guessNumber;