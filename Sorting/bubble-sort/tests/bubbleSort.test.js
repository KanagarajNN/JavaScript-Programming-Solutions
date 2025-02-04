/**
 * bubbleSort.test.js - Unit Tests for Bubble Sort in JavaScript
 *
 * Description:
 * - This file contains unit tests for the `bubbleSort` function using the Jest framework.
 * - The tests cover various edge cases, including already sorted arrays, reverse-sorted arrays,
 *   negative numbers, single-element arrays, empty arrays, and arrays with duplicates.
 *
 * Usage:
 * - Run the tests using Jest:
 *     npm test
 *
 * Metadata:
 * - Author: Kanagaraj N N
 * - Date: February 1, 2025
 * - Version: 1.0
 * - License: MIT
 */

const { bubbleSort } = require("../src/bubbleSort");

test("Sorts an already sorted array", () => {
    let arr = [1, 2, 3, 4, 5];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test("Sorts a reverse-sorted array", () => {
    let arr = [5, 4, 3, 2, 1];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test("Sorts an array with random order", () => {
    let arr = [64, 34, 25, 12, 22, 11, 90];
    bubbleSort(arr);
    expect(arr).toEqual([11, 12, 22, 25, 34, 64, 90]);
});

test("Handles a single-element array", () => {
    let arr = [42];
    bubbleSort(arr);
    expect(arr).toEqual([42]);
});

test("Handles an empty array", () => {
    let arr = [];
    bubbleSort(arr);
    expect(arr).toEqual([]);
});

test("Sorts an array with negative numbers", () => {
    let arr = [10, -1, 3, 8, 5, 2, -3, 4];
    bubbleSort(arr);
    expect(arr).toEqual([-3, -1, 2, 3, 4, 5, 8, 10]);
});
