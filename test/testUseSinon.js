/**
 * Created by muzrea on 17-7-19.
 */
'use strict';
var sinon = require('sinon');
var guessNumberModule = require('../main/guessnumber.js');

var readlineSync = require('readline-sync');
function test0A0B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([5,6,7,8]);

    const expectedresult = '0A0B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result = 'test1 passed';
    }else{
        result = 'test1 failed';
    }
    return result1;
}
var result1 =test0A0B();
console.log(result1);


function test0A1B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([5,4,7,8]);

    const expectedresult = '0A1B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result2 = 'test2 passed';
    }else{
        result2= 'test2 failed';
    }
    return result2;
}
var result2 =test0A1B();
console.log(result2);

function test0A2B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([5,4,1,8]);

    const expectedresult = '0A2B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result3 = 'test3 passed';
    }else{
        result3= 'test3 failed';
    }
    return result3;
}
var result5 =test0A2B();
console.log(result5);


function test0A3B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([2,4,1,8]);

    const expectedresult = '0A3B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result4 = 'test4 passed';
    }else{
        result4= 'test4 failed';
    }
    return result4;
}
var result4 =test0A3B();
console.log(result4);

function test0A4B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([2,4,1,3]);

    const expectedresult = '0A2B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result5 = 'test5 passed';
    }else{
        result5= 'test5 failed';
    }
    return result5;
}
var result5 =test0A4B();
console.log(result5);

function test1A0B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([1,5,6,7]);

    const expectedresult = '1A0B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result6 = 'test6 passed';
    }else{
        result6= 'test6 failed';
    }
    return result6;
}
var result6 =test1A0B();
console.log(result6);

function test1A1B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([1,5,4,7]);

    const expectedresult = '1A1B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result7 = 'test7 passed';
    }else{
        result7= 'test7 failed';
    }
    return result7;
}
var result7 =test1A1B();
console.log(result7);