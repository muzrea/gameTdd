/**
 * Created by muzrea on 17-7-19.
 */
'use strict';
var readlinesync = require('readline-sync');
function menu(){
    console.log('1.添加学生');
    console.log('2.生成成绩单');
    console.log('3.退出');
    console.log('请输入你的选择（1～3）');
}
function getInput(){
     let number = readlinesync.question( 'Please input a number:  ');
    return number;
}

function addStu(num){
    if(num == 1){
        let inputStuInfo = readlinesync.question( '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：');
        let stuInfo = inputStuInfo.match(/^[\u4e00-\u9fa5]*Pc[0-9]*Pc[\u4e00-\u9fa5]*Pc[0-9]*/);
        if(stuInfo != null){
            console.log( `学生${stuInfo[0]}的成绩被添加 `);
        }else{
            console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...');
        }
    }
    return stuInfo;
}
function changeStuInfo(stuInfo){
    var studentInfo = [{}];
    for(let i in stuInfo){
        studentInfo[i].name = stuInfo[i][0];
        studentInfo[i].math = stuInfo[i][1];
        studentInfo[i].chinese = stuInfo[i][2];
        studentInfo[i].english = stuInfo[i][3];
        studentInfo[i].code = stuInfo[i][4];
    }
    return studentInfo;
}
//将数组转换为对象
function report(stuId,studentInfo){
    let str =   `成绩单'/n'姓名|数学|语文|英语|编程|平均分|总分'/n'`;
    for(let i in stuId){
        if(studentInfo[i]==stuID){
            str +=  `${studentInfo[i].name}|${studentInfo[i].math}|${studentInfo[i].chinese}|${studentInfo[i].english}|${studentInfo[i].code}`
                +`|${studentInfo[i].average}|${studentInfo[i].totalGrade}}`+'/n' ;
        }
    }
    return str;
}
function printReport(stuId,studentInfo,num){
    if(num == 2){
        let inputStuId = readlinesync.question( '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        let stuId = inputStuId.match(/^[0-9]*Pc[0-9]*/);
        if(stuId != null){
           let str = report(stuId,studentInfo);
           console.log(str);
        }else{
            console.log('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        }
    }
    return stuId;
}

function getPerAveTotal(studentInfo){
    for(let i in studentInfo){
        for(let j in studentInfo[i]){
            studentInfo[i].totalGrade += stuInfo[i][j];
        }
        studentInfo[i].average = studentInfo[i].totalGrade/4;
    }
    return studentInfo;
}//求平均分和总分
function getClassAve(studentInfo){
    let classTotalGrade = 0;
    for(let i in studentInfo){
        classTotalGrade += studentInfo[i].totalGrade;
    }
}//求全班总分平均数
function copys(studentInfo){

    let ascSIn = studentInfo.slice();
    ascSIn.sort();
    return ascSIn;
}
function getMed(ascSIn){
    let n = ascSIn.length%2;
    let t = 0;
    let medianTScore = 0;
    if(n = 0){
        t=ascSIn.length/2;
        medianTScore = (ascSIn[t-1]+ascSIn[t])/2;
    }
    else{
        t=(ascSIn.length-1)/2;
        medianTScore = ascSIn[t];
    }
    return medianTScore;
}//求全班总分中位数
menu();
addStu(num);
printReport(stuId,studentInfo,num);
var stuId = printReport(stuId,studentInfo,num);
var num = getInput();
var stuInfo = addStu(num);
var studentInfo = changeStuInfo(stuInfo);
var ascSIn = copys(studentInfo);
studentInfo = getPerAveTotal(studentInfo);
studentInfo = getClassAve(studentInfo);
var medianTScore = getMed(ascSIn);
