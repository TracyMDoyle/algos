// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(newArray, value){
    for(var i=newArray.length; i>=0; i--){
        newArray[i] = newArray[i-1]
    }
    newArray[0] =value
    console.log(newArray)
}
pushFront([3, 4, 5], 6)
pushFront([5,7,2,3], 8)
pushFront([99], 7)


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it.
function popFront(newArray){
    for (var i=0; i<newArray.length; i++){
        newArray[i] = newArray[i+1]
    }
    newArray.pop()
    console.log(newArray)
}
popFront([3, 4, 5, 6])
popFront([0,5,10,15])
popFront([4,5,7,9])
// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

function insertAt(arr, index, val){
    var arrLength = arr.length
    var temp = arr[arrLength-1]
    for(var i = arr.length; i>index; i--){
    arr[i-1] = arr[index]
    }
    arr[index] = val
    arr.push(temp)

// console.log(arr)
// console.log(arrLength)
// console.log(temp)
}

insertAt([4,5,7,9], 2, 8)
insertAt([100,200,5], 2, 311)  
insertAt([9,33,7], 1, 42)


// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function