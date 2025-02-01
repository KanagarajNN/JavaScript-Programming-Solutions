// Language: JavaScript
// Solution 1: Bubble Sort Algorithm 
// Time: Worst - O(N^2), Avg - O(N^2), Best - O(N)
// Space: O(1)

function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < array.length - counter - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapElements(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }

  return array;
}

function swapElements(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Main function to test sorting in VS Code
function main() {
  let array = [64, 34, 25, 12, 22, 11, 90];

  console.log("Original array:");
  console.log(array.join(" "));

  // Sort array using Bubble Sort
  let sortedArray = bubbleSort(array);

  console.log("Sorted array:");
  console.log(sortedArray.join(" "));
}

// Run the main function when executing in VS Code
if (require.main === module) {
  main();
}

// Export for external testing
module.exports = { bubbleSort };
