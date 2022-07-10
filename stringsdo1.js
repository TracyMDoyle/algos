

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

function removeBlanks(str){
    let newString = ''
    for(let i=0; i<str.length; i++){
        if(str[i] != ' '){
        newString += str[i];
        }
    }
    return newString
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
function getDigits(str){
    let notNumber = ''
    let numbersOnly = ''
    for(let i=0; i<str.length; i++){
        if(isNaN(str[i])){
            notNumber += str[i]
        }
        else{
            numbersOnly += str[i]
        }
        
    }
    return numbersOnly
}

console.log(getDigits("abc8c0d1ngd0j0!8"));
//  => 801008

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));
//  => 1357924680

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized)
function acronym(str){
    let stringToArray = str.split(" ");
    let newAcronym = ""
    for(let i=0; i<stringToArray.length; i++){
        if(stringToArray[i] != "") 
            newAcronym +=  stringToArray[i][0]
    }

    return (newAcronym.toUpperCase())
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
// => "TNFL-GPYW". 

// console.log(acronym("Live from New York, it's Saturday Night!"));
//=> "LFNYISN".

// Create a function that, given a string, returns the number of non-space characters found in the string. 

function countNonSpaces(str){
    let noSpace = ''
    for(let i=0; i<str.length; i++){
        if(str[i] != ' '){
        noSpace += str[i];
        }
    }
    return noSpace.length
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));
//  => 29
console.log(countNonSpaces("Hello world !"));
//  => 11

// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
function removeShorterStrings(arr, num){
    let longStrings = [];
    let index = 0
    for(let i =0; i<arr.length; i++){
        if(arr[i].length >= num){
            longStrings[index++] = arr[i]
        }
    }
    return longStrings;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
// => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
// => ['There', 'bug', 'the', 'system']

