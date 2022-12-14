function findFirstDuplicate(arr) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("Expecting: 5")
  console.log("=>", findFirstDuplicate([2, 1, 5, 10, 12, 5, 7, 10]));

}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file

 // with given array find the duplicates and return them
 // return 1 if the array contains only 1 element
 // return -1 if the array contains no elements

// And a written explanation of your solution
