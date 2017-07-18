/**
 * Created by muzrea on 17-7-18.
 */
function gameResult(numbers){
    var givenNumbers = [1,2,3,4];
    let countA = 0;
    let count = 0;
    for(var i in numbers){
        for(var j in givenNumbers){
            if(numbers[i]==givenNumbers[j]){
                count++;
            }
        }
    }
    for(var i in givenNumbers){
        if(numbers[i]==givenNumbers[i]){
            countA++;
        }
    }
    let countB = count-countA;
    let result =  `${countA}A${countB}B`;
    return result;
}