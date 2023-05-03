

// input: arr = [0, -1, -2, 2, 1], k =1 
// x - y = k 

// input:  arr = [1, 7, 5, 3, 32, 17, 12, 22], k = 17
// output: [[5, 22]]

function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  
  
  // trying to get k from going through each element in the list 
  
  // making sure that we maintain y element in the original array (making sure that they are in order of when we visit them)
  
  
  const hashMap = {} 
  
  const results = [] 
  
  
  // this populates the hashMap
  for (let i = 0; i< arr.length;i++) {
    // x 
    const currentNumber = arr[i]
  
    // x -y = k
    // x = k + y
    
    // -y = k - x
    // y = x - k
    const difference = currentNumber - k
    hashMap[difference] = currentNumber 
  }
  
  for (let i = 0; i < arr.length;i++) {
     
    // this is y 
     const currentNumber = arr[i]
    
     // find the difference in the hashMap
     if (hashMap[currentNumber] !== undefined) {
       results.push([hashMap[currentNumber], currentNumber])
     }
  }
  
  
  return results
  }

const array = [0, -1, -2, 2, 1] 
console.log(findPairsWithGivenDifference(array, 1))