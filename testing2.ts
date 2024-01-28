// function solution(a: number[]): boolean {


//   // first create b array
//   const bArray = [] as number[];

//   // split the array in half 
//   const aArrayLength = a.length;
//   const halfA = Math.ceil(aArrayLength / 2)

//   const firstHalf = a.slice(0, halfA)
//   const secondHalf = a.slice(halfA)

//   while (firstHalf.length > 0) {
//     const first = firstHalf.shift();
//     const second = secondHalf.pop();

//     if (first) {
//       bArray.push(first)
//     }
//     if (second) {
//       bArray.push(second)
//     }
//   }

//   console.log("this is barrya: ", bArray)


//   for (let i = 0; i < bArray.length; i++) {
//     const current = bArray[i]
//     const next = bArray[i + 1]

//     if (current >= next) return false
//   }

//   return true


//   // after creating b array, loop through it and see if it's ascending
//   // if it's not ascending then return false 

// }


// // console.log(solution([1, 4, 5, 6, 3]))

// // console.log(solution([-73, -27, 52, 60, 90, 91, 71, 55, 30, -56]))

// console.log(solution([-98, -82, -70, -49, 58, 26, -69, -79, -98]))

function solution(a: number[], m: number, k: number): number {


  // first we need to divide the array into subarrays of m lengths

  let currentIndex = 0

  let numberOfPairs = 0;

  while (currentIndex + m <= a.length) {
    const currentWindow = a.slice(currentIndex, currentIndex + m)

    const hashMap = {} as { [key: number]: number }

    for (let i = 0; i < currentWindow.length; i++) {
      const number = currentWindow[i]
      hashMap[number] = currentIndex + i
    }

    for (let i = 0; i < currentWindow.length; i++) {
      const difference = k - currentWindow[i]
      // s !== t
      if (hashMap[difference] !== undefined && hashMap[currentWindow[i]] !== i + currentIndex) {
        numberOfPairs++
      } else {
        continue;
      }
    }
    currentIndex++
  }
  return numberOfPairs
}

console.log(solution([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10))