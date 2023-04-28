// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency
// of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to
// target is less than 150 combinations for the given input.

// Example 1
// Input: candidates = [2, 3, 6, 7] target = 7
// output: [[2,2,3], [7]]
// 2 and 3 are candidates, 2 + 2 + 3 = 7. 2 can be used multiple times
// 7 is a candidate, 7 = 7

// Example 2
// Input: candidates = [2, 3, 5], target = 8
// Output: [[2,2,2,2], [2, 3, 3], [3, 5]]

// Example 3
// Input: candidates = [2], target = 1
// Output: []

// initial thoughts
// actually this reminds me of the fibonacci sequence/number of ways to go up steps
// we could probably recursively go through this
// it's like a graph and you start from 0. You have multiple "paths" to go down
// e.g Some of the decision trees we could go down
// 0 --> 2 --> 2 --> 2 --> 2 (False, go back) <--
// 0 --> 3 --> 6 --> 9 (False, go back)
// 0 --> 6 --> 12 (False, go back)
// 0 --> 7 (Success)

// we can also use depth first search

function combinationSum(candidates: number[], target: number): number[][] {
  if (!candidates) {
    return [];
  }

  if (target === 0) {
    return [[]];
  }

  // sort the candidates
  candidates.sort((a, b) => a - b);

  // store all combinations here
  let paths = [];

  // recursion
  function depthFirstSearch();
}
