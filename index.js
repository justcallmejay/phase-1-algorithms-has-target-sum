function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {

      if (array[i] + array[j] === target) {
      return true
    }
  }
} return false
}

  // if (i + j === target) {
  //   console.log('found match')
  // } else {
  //   console.log('no match')
  // }

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
//1. Create two loops that goes through an array
//2. Add two values as it loops
//3. Find out if the two elements in the array is equal to target
//4. Have it continue until all the possible choices have been elavuated

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
