/* 
   Filename: ComplexCode.js
   Content: Implementation of a complex sorting algorithm 
*/

// Generates an array of random numbers
function generateRandomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * length));
  }
  return array;
}

// Custom sorting algorithm using the bubble sort technique
function customSort(array) {
  let isSorted = false;
  let lastUnsorted = array.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }
  return array;
}

// Swaps two elements in an array
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Performs a binary search on a sorted array
function binarySearch(array, value) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// Entry point
function main() {
  const arrayLength = 100;
  const randomArray = generateRandomArray(arrayLength);

  console.log("Original Array:");
  console.log(randomArray);

  const sortedArray = customSort(randomArray);

  console.log("Sorted Array:");
  console.log(sortedArray);

  const searchValue = Math.floor(Math.random() * arrayLength);
  const searchIndex = binarySearch(sortedArray, searchValue);

  console.log("Search Value:", searchValue);
  console.log("Search Index:", searchIndex);
}

// Run the program
main();