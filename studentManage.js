/**
 * Created by muzrea on 17-7-19.
 */
var readlinesync = require('readline-sync');
function menu(){
    console.log('1.添加学生');
    console.log('2.生成成绩单');
    console.log('3.退出');
    console.log('请输入你的选择（1～3）');
}
function getInput(){
    number = readlineSync.question( 'Please input a number:  ');
    return number;
}

function addStu(){
    let num = getInput();
    let inputStuInfo = [[]];
    let stuInfo = [[]];
    if(num == 1){
        inputStuInfo.push(readlineSync.question( '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：'));
        for(let i in inputStuInfo){
            stuInfo[i] = inputStuInfo.match(/^[\u4e00-\u9fa5]*Pc[0-9]*Pc[\u4e00-\u9fa5]*Pc[0-9]*/);
            if(stuInfo[i] != null){
                console.log( `学生${stuInfo[0]}的成绩被添加 `);
            }else{
                console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...');
            }
        }

    }
    return stuInfo;
}
function changeStuInfo(stuInfo){
    var studentInfo = {};
    for(let i in stuInfo){
        studentInfo[0].name = stuInfo[0];

    }
}
function printReport(){
    let num = getInput();
    if(num == 2){
        let inputStuId = readlineSync.question( '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        let stuId = inputStuId.match(/^[0-9]*Pc[0-9]*/);
        if(stuId != null){

        }else{
            console.log('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        }
    }
}