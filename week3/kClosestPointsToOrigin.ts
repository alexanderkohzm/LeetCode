// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, 
// return the k closest points to the origin (0, 0).

import { MinHeap } from "../types/impl/heap";

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).


// helper function to calculate distance
function calculateDistance(coordinates: Array<number>) {
  const [x, y] = coordinates;

  return Math.sqrt(((x - 0) ** 2) + ((y - 0) ** 2))
}



// The issue with this solution is that 
// it takes up too much time and space  



function kClosest(points: number[][], k: number): number[][] {


  // k refers to the number of points that are closest to the origin 

  // for example, if k = 1, we only want the closest point
  // if k = 2, we want the two closest points
  // note that we don't need it to be ordered, we can just return the closest points 

  // to calculate the distance between the two points, we can use this formula 
  // squareRoot of (x1 - x2)^2 + (y1 - y2)^2 


  // a brute force technique is to loop through all possible coordinates and calculate the distance 
  // We then sort everything and take the k lowest values 

  // in theory, we want to keep track of the "closest" distances. For example, if we get [1, -1] that would
  // automatically be lower than [100, -100]

  // the issue is that the lowest value might be at the end of the points
  // so we MUST go through all points 

  const hashMap = {} as { [key: string]: Array<Array<number>> }


  for (const point of points) {

    const distance = calculateDistance(point)

    if (!hashMap[distance]) {
      hashMap[distance] = [point]
    } else {
      hashMap[distance].push(point)
    }
  }

  // now we have a hashMap of points 

  // we get the keyValues and Sort them
  const sortedKeyValuesInHashMap = Object.keys(hashMap).sort((a: string, b: string) => {
    console.log(`This is a: ${parseFloat(a)} and this is b: ${parseFloat(b)}`)
    console.log(parseFloat(a) - parseFloat(b))
    return parseFloat(a) - parseFloat(b)
  })

  console.log("This is sortedKey", sortedKeyValuesInHashMap)

  const arrayToReturn = [] as Array<Array<number>>

  for (let i = 0; i < k; i++) {
    const point = hashMap[sortedKeyValuesInHashMap[0]]

    if (!point || arrayToReturn.length === k) {
      break
    }

    if (point.length > 1) {
      for (const coordinates of point) {
        arrayToReturn.push(coordinates)
      }
      sortedKeyValuesInHashMap.shift()
    } else {
      arrayToReturn.push(point[0])
      sortedKeyValuesInHashMap.shift()
    }
  }

  return arrayToReturn
};

const points = [[-5, 4], [-6, -5], [4, 6]]
const points2 = [[0, 1], [0, -1]]
const points3 = [[6, 10], [-3, 3], [-2, 5], [0, 2]]
// console.log(kClosest(points2, 2))

console.log(kClosest(points, 2))


function kClosestWithMinHeap(points: number[][], k: number): number[][] {


  function getChildren(index: number): number[] {
    return [index * 2 + 1, index * 2 + 2]
  }

  function calculateDistance(index: number): number {
    return points[index][0] ** 2 + points[index][1] ** 2
  }

  function compare(index: number): number {
    const length = points.length;
    const [left, right] = getChildren(index)

    if (left >= length) return -1;

    let lowestChild = left;
    if (right < length) {
      lowestChild = calculateDistance(left) < calculateDistance(right) ? left : right;
    }

    return calculateDistance(index) <= calculateDistance(lowestChild) ? -1 : lowestChild;
  }

  function swap(a: number, b: number): void {
    [points[a], points[b]] = [points[b], points[a]]
  }

  function heapifyDown(index: number): void {
    const indexToSwap = compare(index)

    if (indexToSwap >= 0) {
      swap(index, indexToSwap);
      heapifyDown(indexToSwap)
    }
  }


}