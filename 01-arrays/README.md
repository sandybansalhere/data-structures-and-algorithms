# Arrays

An array is an ordered sequence of elements stored in contiguous memory locations. It can hold various data types, including numbers, strings, boolean, functions, and pretty much any other data type.

```js
function foo() {
  console.log("foo!");
}

var arr = [1, 2, 3];
var list = [3.14, "apple", "B", true, foo, arr];
```

## Built-in JavaScript array functions

### `push()` function

- Used to add **one** or **more** elements to the end of an array.
- Returns the new length of an array.

```js
var vegetables = ["carrot", "broccoli", "spinach"];
var newLength = vegetables.push("potato", "cucumber");

console.log(vegetables); // ["carrot", "broccoli", "spinach", "potato", "cucumber"]
console.log(newLength); // 5
```

> 👉 Time Complexity: O(1) and Space complexity: O(1)
