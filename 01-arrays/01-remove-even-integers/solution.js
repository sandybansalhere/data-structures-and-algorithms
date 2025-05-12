/**
 * Removes even integers from an array using a for loop.
 *
 * @param {number[]} arr - The array of numbers to filter.
 * @returns {number[]} A new array containing only odd numbers.
 *
 * @timecomplexity O(n) - Iterates through the array once.
 * @spacecomplexity O(n) - Creates a new array to store the result.
 */
function removeEvenIntegers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

/**
 * Removes even integers from an array using the Array.filter method and a lambda function.
 *
 * @param {number[]} arr - The array of numbers to filter.
 * @returns {number[]} A new array containing only odd numbers.
 *
 * @timecomplexity O(n) - The filter method visits each element once.
 * @spacecomplexity O(n) - A new array is created for the result.
 */
function removeEvenUsingLamda(arr) {
  return arr.filter((item) => item % 2 !== 0);
}

const result = removeEvenUsingLamda([0, 20, 41]);
console.log(result);
