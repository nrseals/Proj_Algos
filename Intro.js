// Introduction

// This chapter explores the array: reading, changing, as well as adding and removing elements (which change the array’s length). Before chapter’s end, we touch on associative arrays as well. At this point we expect you to quickly complete the 13 mandatory algorithm challenges. Building array-inspection functions such as min(arr), max(arr), sum(arr) and average(arr) should be easy and rapid.

// Let’s review. Arrays store multiple values, which are accessed by specifying an index (offset from array front) in square brackets. This random-access makes arrays well-suited to be read in a different order than they were added. Arrays are less suitable (still common) in scenarios with many insertions and removals if you need the array to stay in a particular sorted order. In that case, other values might need to be moved to create a space for inserting a new value (or, to fill a vacancy caused by removing a value). Arrays are not limited to one data type: one array can contain numbers, booleans, strings, etc.

// Arrays are zero-based: an array’s first value is located at index 0. Accordingly, array attribute .length literally means “one more than the last populated index.” Like other interpreted languages, JavaScript arrays are not fixed-length; they automatically grow as values are set beyond the current length. 

// Tracking variables with T-diagrams can be very helpful when working with arrays. Use a T-diagram for this chapter’s challenges. Below are constructs we’ll use this chapter. Remember these building blocks!



//Declaring a new array:
var myArr = [];
console.log(myArr.length); // -> "0"

// Setting and accessing array values:
myArr[0] = 42; // myArr == [42], length==1
console.log(myArr[0]); // -> "42"

//Array.length is determined by largest index:
myArr[1] = "hi"; // myArr == [42,"hi"], length==2
myArr[2] = true; // myArr == [42,"hi",true], length==3

//Arrays can be sparsely populated:
myArr[myArr.length+1] = 2; // myArr == [42,"hi",true,undefined,2]
console.log(myArr.length); // -> "5"

//Overwriting array values:
myArr[0] = 101; // myArr == [101,"hi",true,undefined,2]
myArr[3] = "MG"; // myArr == [101,"hi",true,"MG",2]

//Shorten arrays with pop(), lengthen with push():
myArr.pop(); // myArr == [101,"hi",true,"MG"]
console.log(myArr.length); // -> "4"
myArr.push("dat"); // myArr == [101,"hi",true,"MG","dat"]
console.log(myArr.length); // -> "5"



//From your work with the Basic 13 challenges, we assume that you already know how to read from numerical arrays and that you can easily create JavaScript functions to get the minimum or maximum value, the sum of all values in the array, or the average of all values in the array. If this is not the case, definitely review those implementations before continuing to today’s challenges.

// Here is a list of concepts to consider; some or all will be used in this chapter.
// >Array.pop() & Array.push()
// >arrays grow: Array.length == lastIdx-1
// >if-else statements
// >for /while loops
// >arrays can contain different types
// >arrays are objects, passed by ref (ptr)





// Solutions delete before pushing







// First version - going forwards
function pushToFront(arr, val) {
    // Goal: Put "val" at the beginning of the array "arr", move everything else up one index
    // Need: temp variables for holding values
    var temp1 = arr[0], temp2 = arr[1];
    // Loop for moving values to the right
    for (var i = 0; i < arr.length && temp1 != undefined; i++) {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val; // Inserts the value at the start of the array
}

// Second version - going backwards
function pushToFrontV2(arr, val) {
    // Loop backwards - moving values to the right
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val; // Put value in at start of array
}

function popFront(arr) {
    var returnVal = arr[0]; // The value we will return
    // Loop through the array - starting at index 1
    for (var i = 1; i < arr.length; i++) {
        // i = 1: arr[0] = arr[1] -> arr[i-1] = arr[i]
        arr[i-1] = arr[i];
    }
    arr.pop(); // Remove the last value
    return returnVal;
}

function insertAt(arr, val, ind) {
    // Loop backwards - moving values to the right - stopping at the index where we're inserting new value
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val; // Put value in at specified index
}

function removeAt(arr, ind) {
    ind = Math.floor(ind); // Rounds the index down
    // If index is out of bounds
    if (ind >= arr.length || ind < 0) {
        return null; // Return an arbitrary value
    }
    var returnVal = arr[ind]; // The value we will return
    // Loop through the array - starting at the index after the one whose value will be removed
    for (var i = ind + 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop(); // Remove the last value
    // arr.length--; // Alternate way to remove last value
    return returnVal;
}

function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        // Swap pairs:
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}

// First version with nested loops
function removeDupesV1(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] == arr[i]) { // If the value ahead is a duplicate of the current value at index i
            // Remove that value and move everything afterwards to the left an index
            // Remove the last item in the array
            while (arr[i+1] == arr[i]) {
                removeAt(arr,i+1);
            }
        }
    }
}

/* Changing the length of the array at will - useful for second version of remove duplicates */

// var x1 = [3, 'hello', 10.5];
// console.log(x1.length);
// x1.length += 2;
// console.log(x1);
// console.log(x1[3]);
// x1.length -= 3;
// console.log(x1);
// x1.length++;
// console.log(x1);

// x1[10] = 5;
// console.log(x1)

// More efficient version with only one for loop
function removeDupesV2(arr) {
    if (arr.length <= 1) { // If array is empty or has only one value, no duplicates possible
        return;
    }
    var lastUniqueVal = arr[0];
    var nextUniqueInd = 1; // The index for where the next unique value will be put in the array
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != lastUniqueVal) {
            lastUniqueVal = arr[i];
            arr[nextUniqueInd] = arr[i];
            nextUniqueInd++;
        }
    }
    arr.length = nextUniqueInd; // Remove the duplicates
}