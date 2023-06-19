// flatten array

// args = definitely the initial input array, but we might need a result array to be passed in
const flattenArray = (array) => {
  // example
  // array = [1, [2 ,3 [4, 5, 6]]]

  // array = [1, 2, 3, 4, 5, 6]

  const resultArray = [];

  // you loop through the array

  // if typeof array[i] === number, then push array[i] into resultArray

  // but if typeof array[i] and if array[i] is an array, 'object'
  // Array.isArray(array[i]) // I'm going to assume that it's only arrays, no nested objects or null (null returns an object for typeof)
  // if array[i] is an array, then we can actually just call the flattenArray function recursively

  // these are the two branches

  // might have to just create a DFS function here
  const dfs = (element) => {
    if (typeof element === "number") {
      resultArray.push(element);
    } else {
      for (let i = 0; i < element.length; i++) {
        const currentElement = element[i];
        dfs(currentElement);
      }
    }
  };

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    dfs(currentElement);
  }
  return resultArray;
};

// able to flatten array
console.log(flattenArray([1, 2, [3, 4]]));

console.log(flattenArray([1, 2, [3, 4, [5, [6, 7, 8]]]]));

function thisFunction() {}

const thisFunction2 = () => {};

// `this` has a few rules

// there's 6 rules

// const obj = {}

// if you use new, then this will be instantiatede as an empty {}

// if you use fn.apply, fn.call, fn.bind then this will refer to what's been passed into the args of the function fn.apply({value: 10}) // value = 10

// if the function is called as a method of the object, then `this` refers to the object itself
// {value: 55, printThis: function() => {console.log()}}

// () =>

/**
 * 
 * for(var i = 1; i < 3; i++) {
 * 
 * 
 * 
 * 
    setTimeout(function() { 
        console.log()
    });
}
 */

// var = 1 -> and the reason why is becauase of scoping. basically the for loop is unable to manipulate var
// 1, 1, 1, 1, 1, 1, 1, 1, ,1 ,1 ,1 the function will never end. because var i can't be manipulated
// var -> let. And then you'll be able to manipulate the initialiser value
// if you change it to let,

// let, then 1, 2
// but what i'm not so sure about is the setTimeout

// what I'm concerned about is the setTimeout function

// im not sure if the function has access to i, becauase i"m not sure if the context is being passed to the eventQueue

//
