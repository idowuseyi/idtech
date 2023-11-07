

function maxSubArray(arr=[]){
    let nArray = arr.sort();
    let startIndex = 0;
    let maxSubArraySum = 0;
    for (let m=0; m<nArray.length; m++){
        if (nArray[m] > 0){
            startIndex = m;
            break;
        }
    }
    for (let n=startIndex; n<nArray.length; n++){
        maxSubArraySum += nArray[n];
    }
    return ("Max sub sequence sum = " + maxSubArraySum +', Sorted subsequence array with max sum = '+ nArray.slice(startIndex, nArray.length));
}

function maxSubSum(arr=[]){
    let maxSum = arr[0];
    let startInd = 1;
    let lastInd = arr.length-2;
    for (let a=startInd; a<arr.length; a++){
        newSum1 = 0;
        let newArray1 = arr.slice(a, arr.length);
        for (let b=0; b<newArray1.length; b++){
           newSum1 += newArray1[b];
        }
        if (maxSum < newSum1){
            maxSum = newSum1;
        }
    }
    for (let c=lastInd; c>=0; c--){
        newSum2 = 0;
        let newArray2 = arr.slice(0, c+1);
        for (d=0; d<newArray2.length; d++){
           newSum2 += newArray2[d];
        }
        if (maxSum < newSum2){
            maxSum = newSum2;
        }
        }
    return maxSum;
}

// gpt solution
function maxSubArraygpt(arr=[]){
    let maxSumGpt = arr[0];
    let currentSum = arr[0];

    for (let i= 1; i < arr.length; i++){
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSumGpt = Math.max(maxSumGpt, currentSum);
    }

    return maxSumGpt;
}


ar = [-1,1,-2, 2,-3,4];
const c = maxSubArraygpt(ar);
const b = maxSubSum(ar);
const a = maxSubArray(ar);



console.log(c, b, a);

