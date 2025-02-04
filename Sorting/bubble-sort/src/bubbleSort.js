/**
 * bubbleSort.js - Implementation of the Bubble Sort Algorithm in JavaScript
 *
 * Description:
 * - This module implements the Bubble Sort algorithm in JavaScript.
 * - Bubble Sort is a simple comparison-based sorting algorithm that repeatedly
 *   iterates through the array, swaps adjacent elements if they are in the
 *   wrong order, and moves the largest element to the end in each iteration.
 *
 * Time Complexity:
 * - Worst Case: O(N^2) (When the array is reverse sorted)
 * - Average Case: O(N^2) (For a randomly shuffled array)
 * - Best Case: O(N) (When the array is already sorted)
 *
 * Space Complexity:
 * - O(1) (In-place sorting algorithm)
 *
 * Usage:
 * - Import the module and use `bubbleSort` function.
 *
 * Metadata:
 * - Author: Kanagaraj N N
 * - Date: February 4, 2025
 * - Version: 1.0
 * - License: MIT
 */

/**
 * Sorts an array using the Bubble Sort algorithm.
 * @param {number[]} arr - The array to be sorted.
 */
function bubbleSort(arr) {
    if (!arr || arr.length === 0) return;

    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
                swapped = true;
            }
        }
        if (!swapped) break; // Stop if already sorted
    }
}

/**
 * Prints the array in a readable format.
 * @param {number[]} arr - The array to be printed.
 */
function printArray(arr) {
    console.log(arr);
}

// Example Usage
if (require.main === module) {
    let arr = [64, 34, 25, 12, 22, 11, 90];
    console.log("Unsorted array:", arr);
    
    bubbleSort(arr);
    
    console.log("Sorted array:", arr);
}

// Export functions for testing
module.exports = { bubbleSort, printArray };
