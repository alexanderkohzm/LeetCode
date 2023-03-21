// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

  return function (n: number): number {

    // // we can use binarySearch - this will allow us to find the first true value 
    // let start = 0;
    // let end = n;

    // let lastBadVersion = 1

    // while (start <= end) {
    //   let midPoint = Math.floor((start + end) / 2)

    //   if (isBadVersion(midPoint)) {
    //     end = midPoint - 1

    //     lastBadVersion = midPoint
    //   } else {
    //     start = midPoint + 1
    //   }
    // }
    // return lastBadVersion

    let start = 0;
    let end = n

    let lastBadVersion = 1;

    while (start <= end) {
      let midPoint = Math.floor((start + end) / 2)

      if (isBadVersion(midPoint)) {

        // if it's a true (it is bad), then we perform a search at the LEFT side 
        // as we want to go back and see if there are any other bads 
        end = midPoint - 1
        lastBadVersion = midPoint
      } else {

        // if it's not bad, then we need to search the RIGHT side and find
        // the first one that's bad
        start = midPoint + 1
      }
    }
    return lastBadVersion
  };
};