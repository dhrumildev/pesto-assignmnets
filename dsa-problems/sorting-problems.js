'use strict'

// Implement the Merge Sort algorithm to sort an array of numbers in ascending order.	The input should be taken from the user using the prompt. The user should provide a space-separated list of numbers.

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
    
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);