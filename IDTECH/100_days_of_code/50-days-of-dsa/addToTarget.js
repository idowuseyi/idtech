
function addToTarget(arr=[], target){
    // check if the array is an array and not empty
    // for (let a=0; a<arr.length; a++){
    //     // console.log(arr[i]);
    //     if (typeof(arr[a]) !== Number || arr.length < 1){
    //         console.log(typeof(arr[a]) + " Input an array of integers that is not empty");
    //         return null;
    //     }
    // };
    // check if the target is a number
    if (typeof(target) !== Number){
        console.log(target + " is not an integer. Use an integer as the target");
        return null;
    }

    // loop through the element of the array twice each time adding the number and checking if it equats to the target
    let firstNum = 0;
    let secondNum = 0;
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            // console.log(arr[i], arr[j]);
            if (arr[i] + arr[j] === target){
                firstNum = arr[i];
                secondNum = arr[j];
                break;
            }
        }
        if (firstNum !== 0 && secondNum !== 0){
            break;
        }
    }
    if (firstNum !== 0 && secondNum !== 0){
    return ("first Number index = "+ arr.indexOf(firstNum) +", "+ "Second Number index = " + arr.indexOf(secondNum));
    } else {
        return ("There are no two numbers that added up to the target");
    }
}

let list = [5, 8, 1, 7, 2];
const myTarget = 6;
console.log(addToTarget(list, myTarget));
//console.log();