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
        var result1 = 'test1 passed';
    }else{
        result1 = 'test1 failed';
    }
    return result1;
}
var result1 =test0A0B();
console.log(result1);
sinon.stub.restore();

function test0A1B(){
    //var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

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
/*
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


function test1A2B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([1,3,4,7]);

    const expectedresult = '1A2B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result8 = 'test8 passed';
    }else{
        result8= 'test8 failed';
    }
    return result8;
}
var result8 =test1A2B();
console.log(result8);

function test1A3B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([1,3,4,2]);

    const expectedresult = '1A3B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result8 = 'test8 passed';
    }else{
        result8= 'test8 failed';
    }
    return result8;
}
var result8 =test1A3B();
console.log(result8);

function test2A0B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([1,2,8,9]);

    const expectedresult = '2A0B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result9 = 'test9 passed';
    }else{
        result9= 'test9 failed';
    }
    return result9;
}
var result9 =test2A0B();
console.log(result9);

function test2A1B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([1,2,4,9]);

    const expectedresult = '2A1B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result10 = 'test10 passed';
    }else{
        result10= 'test10 failed';
    }
    return result10;
}
var result10 =test2A1B();
console.log(result10);


function test2A2B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([1,2,4,3]);

    const expectedresult = '2A2B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result11 = 'test11 passed';
    }else{
        result11= 'test11 failed';
    }
    return result11;
}
var result11 =test2A2B();
console.log(result11);

function test3A0B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([1,2,3,5]);

    const expectedresult = '3A0B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result12 = 'test12 passed';
    }else{
        result12= 'test12 failed';
    }
    return result12;
}
var result12 =test3A0B();
console.log(result12);

function test4A0B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([1,2,3,4]);

    const expectedresult = '4A0B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result13 = 'test13 passed';
    }else{
        result13= 'test13 failed';
    }
    return result13;
}
var result13 =test4A0B();
console.log(result13);

function test0A4B(){
    var givenNumbers = sinon.stub(guessNumberModule,"generateGivenNumbers").returns([1,2,3,4]);

    var inputNumbers = sinon.stub(guessNumberModule,"inputNumbers").returns([4,3,2,1]);

    const expectedresult = '0A4B';
    if(guessNumberModule.guessNumber() === expectedresult){
        var result14 = 'test13 passed';
    }else{
        result14= 'test13 failed';
    }
    return result14;
}
var result14 =test0A4B();
console.log(result14);*/