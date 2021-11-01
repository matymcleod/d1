const min = function(numbers) {
// initializing num1 with a [0] that sets the zeroeth index with value of whatever is in the first position of the input array
// this function returns the lowest number of any given array.

  let num1 = numbers[0];
  //  console.log('num1', num1);

    for(let i = 1; i < numbers.length; i++) {
        // Since numbers[0] has already been set to the value at numbers[0], we can start our loop at number[1] and interate over the array until it reaches the end of the input array
        // console.log('numbers.length:', numbers.length);
        // console.log(i);

      if((numbers[i] < num1)) {
      // If the value of [i] is less than what is stored in num1 then num1 only bcomes new value if it is less than 
        num1 = numbers[i]
        // Let's say the array is [10, 15, 3, 2]. It starts at array[0] which is 10 then becomes 3 then 2 and ends at 2 because it is lower than the rest
      }

    }
    
  return num1;
  
};

/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */


const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs $${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);
