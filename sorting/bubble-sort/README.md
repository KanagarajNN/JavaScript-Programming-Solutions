![Node.js CI](https://github.com/kanagarajnn/javascript-programming-solutions/actions/workflows/ci-js.yml/badge.svg)

# Bubble Sort Implementation in JavaScript

## Description
This project implements the **Bubble Sort** algorithm in JavaScript. Bubble Sort is a simple comparison-based sorting algorithm that repeatedly iterates through an array, swapping adjacent elements if they are in the wrong order. The algorithm continues iterating until no more swaps are needed, meaning the array is sorted.

## Features
- Implements Bubble Sort algorithm in JavaScript
- Handles various edge cases like empty arrays, already sorted arrays, and negative numbers
- Unit tested using **Jest**
- Structured for **modern Node.js projects** with clear separation of source code and tests

## Time Complexity
- **Worst Case:** \(O(N^2)\) - When the array is reverse sorted
- **Average Case:** \(O(N^2)\) - For a randomly shuffled array
- **Best Case:** \(O(N)\) - When the array is already sorted

## Space Complexity
- \(O(1)\) (In-place sorting algorithm)

## Directory Structure
```
javascript-programming-solutions/
  ├── sorting/
  │   ├── bubble-sort/
  │   │   ├── src/
  │   │   │   ├── bubbleSort.js
  │   │   ├── tests/
  │   │   │   ├── bubbleSort.test.js
  ├── package.json
  ├── package-lock.json
  ├── LICENSE
  ├── README.md
```

## Installation & Setup
Ensure you have **Node.js 18+** and **npm** installed.

### **1. Clone the repository**
```bash
git clone https://github.com/kanagarajnn/javascript-programming-solutions.git
cd javascript-programming-solutions
```

### **2. Install dependencies**
```bash
npm install
```

## Running the Code
This project provides a simple Bubble Sort implementation in JavaScript.

### **Run the Bubble Sort algorithm**
```javascript
const { bubbleSort } = require('./sorting/bubble-sort/src/bubbleSort');

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);

bubbleSort(arr);

console.log("Sorted array:", arr);
```

### **Expected Output:**
```
Unsorted array: [64, 34, 25, 12, 22, 11, 90]
Sorted array: [11, 12, 22, 25, 34, 64, 90]
```

---

## Running Unit Tests
This project includes **Jest** tests to validate the correctness of the Bubble Sort algorithm.

### **Run tests using npm**
```bash
npm test
```

---

## Example Jest Test Case
Below is an example of a test case located in `tests/bubbleSort.test.js`:

```javascript
const { bubbleSort } = require('../src/bubbleSort');

test('Sorts an already sorted array', () => {
  const arr = [1, 2, 3, 4, 5];
  bubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('Sorts a reversed array', () => {
  const arr = [5, 4, 3, 2, 1];
  bubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('Sorts an unsorted array', () => {
  const arr = [3, 1, 4, 5, 2];
  bubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});
```

---

## Continuous Integration (CI) with GitHub Actions
This project is configured with GitHub Actions for automated testing.

### CI/CD Workflow Details:
- Runs tests automatically on every push and pull request to the main branch.
- Uses Node.js on an Ubuntu runner.
- Ensures code correctness before merging.

### How to Check CI/CD Status:
- Push your changes:
```sh
$ git push origin main
```
- Navigate to your GitHub repository → Actions tab.
- Check the workflow **Node.js CI** to view test results.

---

## License
This project is licensed under the **MIT License**.

## Metadata
- Author: Kanagaraj N N
- Email: n.n.kanagaraj.upm@gmail.com
- GitHub: https://github.com/kanagarajnn

