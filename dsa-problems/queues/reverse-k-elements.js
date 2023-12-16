function reverseKElements(queue, K) {
    if (!Array.isArray(queue) || K <= 0 || K > queue.length) {
        // Invalid input, return the original queue
        return queue;
    }

    // Reverse the first K elements using array slice and reverse
    const reversedKElements = queue.slice(0, K).reverse();

    // Concatenate the reversed K elements with the remaining elements
    const modifiedQueue = reversedKElements.concat(queue.slice(K));

    return modifiedQueue;
}

// Example usage:
const inputQueue = [1, 2, 3, 4, 5, 6, 7];
const K = 3;
const result = reverseKElements(inputQueue, K);

console.log(result); // Output: [3, 2, 1, 4, 5, 6, 7]
