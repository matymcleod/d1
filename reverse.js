let arg = process.argv.slice(2);                   // Incoming data from command line

const reverseString = function(arg) {
  let newString = "";                              // Placeholder for future reversed strings

  for (let i = 0; i < arg.length; i++) {           // First loop to access all arg elements
    let temp = arg[i];                             // Holds all arg iterations
    if (i !== 0) {                                 // Adds new line if not the first element
      newString += "\n";
    }
    for (let j = temp.length - 1; j >= 0; j--) {   // Second loop loops in reverse to reverse all temps i elements
      newString += temp[j];                        // Adds each element into newString variable
    }
  }
  return newString;
};


console.log(reverseString(arg));                   // Calls and logs function with the value of arg which is the CLA