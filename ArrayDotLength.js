// Some programmers think of Array.length as the number of array elements. This is usually true, but certain things can cause it not to be the case. If you create and control an array (as opposed to working with an array received from some other code), then you can avoid these things, which will make your code less complex. Let’s explore .length so that we can keep life simple, for you and your arrays.

// The array property .length is defined as ‘one greater than the largest populated index’:
var myArr == [42,"hi"]; // myArr.length == 2
myArr.push(true); // myArr == [42,"hi",true] and length == 3

// However, when directly setting values in arrays, we can add them at any (non-negative integer) index:
myArr[myArr.length+1] = 2; // myArr == [42,"hi",true,undefined,2]
console.log(myArr.length); // "5", although we set only 4 values
myArr.pop(); // myArr == [42,"hi",true,undefined]
console.log(myArr.length); // "4", although we never set myArr[3]

// By setting an array value at an index beyond array’s end, we created an empty space in our array – you could call it ‘sparse’ rather than having entirely contiguous values. Sparseness can be useful – in fact with associative arrays (objects), they will always be sparse – but generally with numerical arrays it vastly simplifies things to avoid this. How would you do this?

 

// When adding a value to an array, use the push() function, or directly add the value to array’s end (arr[arr.length]), or move another value there if you need the new value to be somewhere other than the array’s end. In other words, if you don’t use push(), make sure that arr[arr.length] is the next index in the array to be populated, rather than a larger index.

 

// Likewise, when removing array values, use pop() or directly decrement the length (arr.length--). This means that if you need to remove a value from the middle of your array, you need to move the last value in the array into that middle index. Even though you are removing a middle value, you won’t be removing that value’s “chair”. You’ll actually be removing the last “chair” in the array, so the value currently there needs to be moved somewhere else!