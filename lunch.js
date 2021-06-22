const whatToDoForLunch = function(hungry, availableTime) {
  const lessThan20 = 'Quickly pick up some food and head back to the lab or kitchen where you can get to know your classmates better.';
  const between20To30 = 'You deserve a break, maybe try something new in the area';
  const moreThan30 = 'You can take your time because you are ahead if schedule but not too long as there is more work that you can do to stay ahead.';
  const notHungry = 'You have some time but not hungry, take a quick stretch break and get back to it until you get hungry';

  if (hungry) {
    if (availableTime < 20) {
      return lessThan20;
    } else if ((availableTime >= 20) && (availableTime <= 30)) {
      return between20To30;
    } else {
      return moreThan30;
    }
  }
  return notHungry;
};

/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and have 20 mins. ", whatToDoForLunch(true, 20));
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch. ", whatToDoForLunch(true, 50));
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch. ", whatToDoForLunch(false, 30));
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch. ", whatToDoForLunch(true, 15));

