const args = process.argv.slice(2); // Takes in values form Command line and slices out the first 2 array elements

const sum = function() {
  let result = 0; 
  for (let i = 0; i < args.length; i++) {
    if (isNaN(args[i])) { // checks if CLA is number
      continue;
    }
    result += Number(args[i]); // will add CLA Numbers 
  }
  return result;
};

// Calling the function and logging it to the console
console.log(sum());
