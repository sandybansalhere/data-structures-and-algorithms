# Arrays

An array is an ordered sequence of elements stored in contiguous memory locations. It can hold various data types, including numbers, strings, boolean, functions, and pretty much any other data type.

```js
function foo() {
  console.log("foo!");
}

var arr = [1, 2, 3];
var list = [3.14, "apple", "B", true, foo, arr];
```

## Important Built-in JavaScript array functions

### `push()` function

- Add **one** or **more elements** to the end of an array.
- Returns the new length of an array.
- Modifies the original array.

```js
var vegetables = ["carrot", "broccoli", "spinach"];
var newLength = vegetables.push("potato", "cucumber");

console.log(vegetables); // ["carrot", "broccoli", "spinach", "potato", "cucumber"]
console.log(newLength); // 5
```

> 👉 Time Complexity: O(1) and Space complexity: O(1)

### `pop()` function

- Removes the **last element** from an array.
- Returns the removed element.
- If array is empty returns `undefined`.
- Modifies the original array.

```js
var vegetables = ["carrot", "broccoli", "spinach"];
var lastItem = vegetables.push("potato", "cucumber");

console.log(vegetables); // ["carrot", "broccoli"]
console.log(lastItem); // "spinach"
```

> 👉 Time Complexity: O(1) and Space complexity: O(1)

### `shift()` function

- Removes the **first element** from an array.
- Returns the removed element.
- If array is empty returns `undefined`.
- Modifies the original array.

```js
let vegetables = ["carrot", "broccoli", "spinach"];
let firstItem = vegetables.shift();

console.log(vegetables); // ["broccoli", "spinach"]
console.log(firstItem); // "carrot"
```

> 👉 Time Complexity: O(n) and Space complexity: O(n) since all elements have to be shifted to the left.

### `unshift(element1, element2, ..., elementN)` function

- Add **one** or **more elements** to the beginning of an array.
- Returns the new length of an array.
- Modifies the original array.

```js
let vegetables = ["carrot", "broccoli"];
let newLength = vegetables.unshift("spinach", "potato");

console.log(vegetables); // ["spinach", "potato", "carrot", "broccoli"]
console.log(newLength); // 4
```

> 👉 Time Complexity: O(n) and Space complexity: O(n) since all elements have to be shifted to the right.
