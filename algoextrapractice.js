// - Please write your algorithms in JavaScript
// - Please always have somebody sharing their screen	
// 1. Max		// Given an array of numbers in your function, find the largest value in the array. 
// No Googling, and no built-ins. Assume your given array will have at least one number in it.
function highestValue(arr){
    var max = 0;
    for(var i=0; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
    }
return max;
}
highestValue([2,4,1,6,8])
console.log()
// 2. Second Highest Value

// Given an array of numbers in your function, return the SECOND highest value in the array. 
// No Googling, and no built-ins. Assume your given array will have at least two numbers in it.
// */
function secondHighestValue(arr){
    var max = 0;
    var secondMax = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            secondMax = max;
            max = arr[i];
        }
        else if(arr[i]>secondMax){
            secondMax= arr[i];
        }
    }
    return secondMax;
    }
secondHighestValue([2,3,5,65,123,23,3,6,867,12,3,43,546,5,3,45,345,7654,765,34,43,23,324,534,4356,645,765,354,3,654,567,76,86,8,5,43,34,3,32])
console.log(secondMax)