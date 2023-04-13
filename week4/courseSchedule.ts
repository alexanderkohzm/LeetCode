// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.


// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.



// Depth First Search
// https://www.youtube.com/watch?v=EgI5nU9etnU

function canFinishAdjacencyList(numCourses: number, prerequisites: number[][]): boolean {

  // we can use an ADJACENCY LIST

  // preRequisiteMap {} 

  // for EACH of our courses, we can have a list of all our preRequisites 
  // 0: [1, 2]
  // 1: [3, 4]
  // 2: []
  // 3: [4]
  // 4: []

  // we will run DEPTH FIRST SEARCH for every single node [o, n-1]
  // we will run a DFS recursively 
  // e.g. 
  // 0 -> we go to [1] -> we go to [3] -> we go to [4] -> there is no next, we can complete this 
  // 0 -> [1] -> [4] -> there is no next, we can complete this 

  // since we know that [4] can be completed, we can JUST REMOVE THE 4 (e.g. remove [4] from [3])
  // From [3], we can go back to [1]. We can get rid of [3] and [4] from [1]
  // if [1] is empty, then we know 1 can be completed and we can go back to [0] and remove [1]

  // Time Complexity = O(n + p) p = preRequisites
  // We have to visit EVERY SINGLE NODE and move along every single edge 

  // We might run into loops [0, 1], [1, 2], [2, 0]
  // so how can we detect this loop? -> we can use a set 
  // this will contain the list of courses we're currently visiting in the DFS
  // e.g. [0] it has the preReq of [1]. We go to [1], preReq of [2]. [2], preReq of [0]. Go to [0], now we have visited Set 0 twice 

  const preReqMap = {} as { [key: number]: Array<number> }

  // populate preReqMap 

  for (const courses of prerequisites) {
    const [course, preReq] = courses

    if (preReqMap[course]) {
      preReqMap[course].push(preReq)
    } else {
      preReqMap[course] = [preReq]
    }
  }

  // visit set 
  const visitedSet = new Set<number>()

  function depthFirstSearch(course: number) {
    if (visitedSet.has(course)) return false

    if (preReqMap[course] && preReqMap[course].length === 0 || !preReqMap[course]) return true

    visitedSet.add(course)

    const listOfPreReqs = preReqMap[course]

    for (const preReqs of listOfPreReqs) {
      if (!depthFirstSearch(preReqs)) return false
    }
    visitedSet.delete(course)
    preReqMap[course] = []
    return true
  }

  for (const course of prerequisites) {
    const [courseToCheck] = course
    if (!depthFirstSearch(courseToCheck)) return false
  }
  return true
};

// const firstTest = [[1, 0]]
// console.log(canFinishAdjacencyList(1, firstTest))

const prerequisites = [[0, 10], [3, 18], [5, 5], [6, 11], [11, 14], [13, 1], [15, 1], [17, 4]]

console.log(canFinishAdjacencyList(2, prerequisites))

const prequisiteCycle = [[1, 0], [0, 2], [2, 1]]

console.log(canFinishAdjacencyList(3, prequisiteCycle))



  // Breadth First Search
  // https://www.youtube.com/watch?v=Akt3glAwyfY

















/**
 * First attempt - passes 38 out of 52
 */

// we will need to loop through prerequisites[] 

// we should also keep track of all the courses, which are prerequisites[i][0]
// and their requirements prerequisites[i][1]

// Scenario A where it is impossible
// when ai requires bi and bi requires ai 

// Scenario B where it is impossible (extension of A) 
// when ai requires bi, bi requires ci, and ci requires ai 
// --> this is a closed circle 

// This looks like a graph question 
// Basically, the graph CANNOT be looped -> there MUST be an "exit" 

// we can go through prerequisites[] and create a new node in the graph and link them 
// everytime we create a new node, we need to perform an "isConnected" check
// if the graphs point towards each other (e.g. Scenario A, B), then we know that it's impossible and we should return false 

// function canFinish(numCourses: number, prerequisites: number[][]): boolean {

//   type CourseDependentType = {
//     isDependent: boolean;
//     courseDependentOn: GraphNode | null;
//   }

//   class GraphNode {
//     public course: number;
//     public preRequisite: number;
//     public dependency: CourseDependentType

//     constructor(course: number, prequisite: number) {
//       this.course = course;
//       this.preRequisite = prequisite;
//       this.dependency = {
//         isDependent: false,
//         courseDependentOn: null,
//       }
//     }
//     //graphNodeMap: { [key: number]: GraphNode }
//     public isClashing(node: GraphNode): boolean {
//       const { dependency } = node

//       let rootPreRequisite = node.preRequisite
//       let rootCourse = node.course
//       let currentNode = node

//       // // perform a quick check to see 
//       // if (this.course === rootPreRequisite && this.preRequisite === rootPreRequisite) return false

//       // if not, we need to see if there is a dependency
//       let dependencyCheck = dependency.isDependent
//       // we need to find the "root" dependency 
//       // console.log(`Before: rootCourse: ${rootCourse}, rootPrerequisite ${rootPreRequisite}`)
//       while (dependencyCheck) {
//         currentNode = currentNode.dependency.courseDependentOn!
//         rootPreRequisite = currentNode.preRequisite
//         rootCourse = currentNode.course
//         dependencyCheck = currentNode.dependency.isDependent
//       }
//       // console.log(`After: rootCourse: ${rootCourse},  rootPrerequisite ${rootPreRequisite}`)

//       // console.log(`This.course: ${this.course}, this.preRequisite: ${this.preRequisite}`)

//       return this.course === rootPreRequisite || this.preRequisite === rootCourse || this.course === this.preRequisite
//     }

//     public updateDependency(graphNodeMap: { [key: number]: GraphNode }): void {

//       // if there IS a prerequisite
//       if (graphNodeMap[this.preRequisite]) {
//         this.dependency.isDependent = true
//         this.dependency.courseDependentOn = graphNodeMap[this.preRequisite]
//       }
//     }
//   }

//   const graphNodeMap = {} as { [key: number]: GraphNode }

//   for (const prequisite of prerequisites) {

//     const [course, coursePrerequisite] = prequisite
//     const currentGraphNode = new GraphNode(course, coursePrerequisite)
//     currentGraphNode.updateDependency(graphNodeMap)

//     const listOfGraphNodes = Object.values(graphNodeMap)

//     for (const graphNodes of listOfGraphNodes) {
//       const clash = currentGraphNode.isClashing(graphNodes)
//       if (clash) return false
//     }
//     graphNodeMap[currentGraphNode.course] = currentGraphNode
//   }

//   return true
// };


// const prerequisites = [[0, 10], [3, 18], [5, 5], [6, 11], [11, 14], [13, 1], [15, 1], [17, 4]]

// console.log(canFinish(2, prerequisites))

// const prequisiteCycle = [[1, 0], [0, 2], [2, 1]]

// console.log(canFinish(3, prequisiteCycle))