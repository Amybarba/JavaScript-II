// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];
function firstItem(arr, cb) {
  console.log(cb(arr));
}

let first = function(items) {
  return items[0];
};

let testBeans = (testVar) => {
  return items[1]
}

firstItem(items, first);
firstItem(items, testBeans)

/* 

  //Given this problem: 
  
   {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array into the callback.

// const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

function getLength(arr, cb) {
  console.log(cb(arr));
}

let arrayLength = function(items) {
  return items.length;
};

getLength(items, arrayLength);

function last(arr, cb) {
  cb(arr[arr.length - 1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
});

function sumNums(x, y, cb) {
  cb(x + y);
}

sumNums(10, 15, function(total) {
  console.log(total);
});

function multiplyNums(x, y, cb) {
  cb(x * y);
}

multiplyNums(10, 15, function(total) {
  console.log(total);
});

function contains(item, list, cb) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

contains("Bats", items, function(flag) {
  console.log(flag);
});

contains("Notebook", items, function(flag) {
  console.log(flag);
});

// last passes the last item of the array into the callback.

// function sumNums(x, y, cb) {
// sumNums adds two numbers (x, y) and passes the result to the callback.
// }

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
// }

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
