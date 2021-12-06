//Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushToFront(arr, val){
    console.log(arr);
    var temp1 = arr[0], temp2 = arr[1];
    for (var i = 0; i < arr.length && temp1 != undefined; i++) {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val;
}


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr) {
    var returnVal = arr[0];
    for (var i = 1; i < arr.length; i++) {
        // i = 1: arr[0] = arr[1] -> arr[i-1] = arr[i]
        arr[i-1] = arr[i];
    }
    arr.pop();
    return returnVal;
}

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, val, ind) {
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val;
}

// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, ind) {
    ind = Math.floor(ind);
    if (ind >= arr.length || ind < 0) {
        return null;
    }
    var returnVal = arr[ind];
    for (var i = ind + 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop();
    return returnVal;
}
