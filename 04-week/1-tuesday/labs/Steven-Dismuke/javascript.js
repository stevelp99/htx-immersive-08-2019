    function lvl1exercise1 () {
    // Declare a variable without instantiating it and return it!
  var number;
  console.log(number);
  return number;
  }
  lvl1exercise1()
  
  function lvl1exercise2 () {
    // Declare and instantiate a number and return it
  var nextNumber=2;
  console.log(nextNumber);
  return nextNumber;
  }
  lvl1exercise2()
  
  function lvl1exercise3 () {
    // Declare and instantiate a floating point number that is not a whole number and return it
  var floatNumber=3.5;
  console.log(floatNumber);
  return floatNumber;
  }
  lvl1exercise3()

  function lvl1exercise4 () {
    // Declare and instantiate a string "Hello World!" and return it
  var firstString="Hello World!"
  console.log(firstString);
  return firstString;
  }
  lvl1exercise4()
  
  function lvl1exercise5 () {
    // Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
  var firstArray=  ["Hello World!", 4]
  console.log(firstArray);
  return firstArray;
    }
  lvl1exercise5()
  function lvl1exercise6 () {
    // Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
  var firstObject={key1:"Hello World!",
                    key2:4}
    console.log(firstObject);
    return firstObject;
  }
  lvl1exercise5()
  function lvl1exercise7 () {
    // Declare and instantiate a boolean value 'false' and return it
  var nope=!Boolean;
  console.log(nope);
  return nope;
  }
  lvl1exercise5()
  function lvl2exercise1 (num1, num2) {
    // Return the sum of num1 and num2
  var num1=5;
  var num2=4;
  console.log(output=num1+num2)
  return output;
  }
  lvl2exercise1()
  
  function lvl2exercise2 (num1, num2) {
    // Return the difference of num1 and num2
  var num1=4;
  var num2=6;
  console.log(output=num2-num1);
  return output;
  }
    lvl2exercise2()
  
  function lvl2exercise3 (num1, num2) {
    // Return the multiplication of num1 and num 2
  var num1=2;
  var num2=4;
  console.log(output=num1*num2);
  return output;
  }
  lvl2exercise3()
  function lvl2exercise4 (num1, num2) {
    // Return the division of num1 and num2
  var num1=2;
  var num2=4;
  console.log(output=num2/num1);
  return output;
  }
  lvl2exercise4()
  function lvl2exercise5 (num1) {
    // Add 2 to num1 using += and return it
  var num1=5;
  console.log(num1 +=2);
  return num1;
  }
  lvl2exercise5()
  function lvl3exercise1 () {
    // Create a "hello" and a "world", return the concatenation of the two
  console.log(concat = "Hello"+"World");
  return concat;
  }
  lvl3exercise1()
  function lvl3exercise2 () {
    // Create a "hello" and a 12, return the concatenation of the two
  console.log("Hello"+ 12);
  }
  lvl3exercise2()

  function lvl3exercise3 () {
    // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
    var num1=1;
    var num2=2;
    var value=""+num1+num2;
    console.log(value);
    return value;
  }
  lvl3exercise3()
  function lvl3exercise4 () {
    // Create a "hello world!" string. Return the length of the string
  console.log(sentence="hello world!");
  return sentence;
  }
  lvl3exercise3()
  function lvl3exercise5 () {
    // Create a "hello world!" string. Return the index of the word "world".
  console.log(hello world!);

  }
  function lvl4exercise1 () {
    // Return the boolean value "true"
  var bool=true;
  return bool;
  }
  lvl4exercise1()
  function lvl4exercise2 () {
    // Return the boolean value "false"
  console.log(value=!Boolean)
  return value;
  }
  lvl4exercise2()
  function lvl4exercise3 (bool) {
    // Return the opposite of the input boolean value
  console.log(!bool)
  return bool;
  }
  lvl4exercise3()
  function lvl4exercise4 (bool1, bool2) {
    // Return the logical "and" of the input boolean values
  
  }
  
  function lvl4exercise5 (bool1, bool2) {
    // Return the logical "or" of the input boolean values
  
  }
  
  function lvl4exercise6 (bool1, bool2) {
    // Return the logical "equivalence" of the input boolean values
  
  }
  function lvl5exercise1 () {
    // Push the string "hello" into the array and return it.
    var arr = [1, 'adam'];
    arr.push("hello");
    console.log(arr);
    return arr;
  }
  lvl5exercise1()
  function lvl5exercise2 () {
    // Remove the last element from the array and return it
    var arr = [1, 'adam'];
    arr.pop("adam");
    console.log(arr);
    return arr;
  }
  lvl5exercise2()
  function lvl5exercise3 () {
    // Return the length of the array
    var arr = [1, 'adam'];
    arr.length;
    console.log(arr);
    return arr;
  }
  lvl5exercise3()
  function lvl5exercise4 () {
    // Return the index of "adam" in the array
    var arr = [1, 'adam'];
    var index=arr.indexOf('adam');
    console.log(index);
    return index;
  }
  lvl5exercise4()
  function lvl6exercise1 (num) {
    // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
    if(num=1){
      console.log("hello");
    else if(num=2){
      console.log("bye");
      }
    }
  }
  lvl6exercise4()
  function lvl6exercise2 () {
    // Push 10 'hello' strings into the array using a for loop, then return it
    var arr = [];
    var count=0;
    while (count>=10){
    arr.push("hello");
    console.log(arr);}
    return arr;
  }
  lvl6exercise2()

  function lvl6exercise3 () {
    // Empty this array using a while loop and return it
    var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
    while (arr.length=0){
        arr.pop();
        return arr;
        console.log(arr);
    }}
    lvl6exercise2()
  // Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"