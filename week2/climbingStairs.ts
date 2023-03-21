// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n: number): number {

  // we should have a hashMap that memorises how many ways there are for each (n) steps 

  const hashMap = {} as { [key: number]: number }

  // we then need to think about the ways n can be composed of 1 and 2 

  // e.g. 1 can be composed of [1]. 2 can be composed of [1, 1] and [2]
  // 3 can be composed of [1, 1, 1], [2, 1], [1, 2]
  // 4 can be composed of [1, 1, 1, 1], [2, 2], [1, 1, 2], [1, 2, 1], [2, 1, 1]

  // 5 [1, 1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 2, 1], [1, 2, 1, 1], [2, 1, 1, 1], [1, 2, 2], [2, 1, 2], [2, 2, 1]

  // if you notice, this is similar to a fibonacci sequence 

  hashMap[0] = 0
  hashMap[1] = 1
  hashMap[2] = 2

  // initialise the hashMap 
  for (let i = 3; i <= n; i++) {
    hashMap[i] = hashMap[i - 1] + hashMap[i - 2]
  }
  return hashMap[n]
};

console.log(climbStairs(4))