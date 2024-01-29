// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// function evalRPN(tokens: string[]): number {


// Reverse Polish Notation was designed to make computing easier with the more efficient use of the stack 
// We can use as tack to store numbers until they're used. And then each operand will use the TOP TWO values of the stack 

// the order of the numbers is still important for subtraction and division. We'll ahve to make sure that the two numbers are processed in their original order, which is the opposite order of the stack 

// After each successful operation, the result should be pushed back onto the stack until it's used
// After iteration is complete, the remaining value in teh stack will be our answer so we should return stack[0]

// Time complexity: O(N) where N is the length of tokens
// Space complexity: O(N) for the length of the stack, up to N/2 + 1 values 


//   function evaluate(operator: string, numberA: number, numberB: number): number | undefined {
//     switch (operator) {
//       case '+':
//         return numberA + numberB
//       case '-':
//         return numberA - numberB
//       case '*':
//         return numberA * numberB
//       case '/':
//         return Math.trunc((numberA) / (numberB))
//     }
//   }


//   let stack = [] as Array<number>

//   for (const token of tokens) {

//     const isOperator = token === "+" || token === "-" || token === "/" || token === "*"

//     // if the token is an operator (+, -, /, *)
//     if (isOperator) {
//       const b = stack.pop()
//       const a = stack.pop()

//       stack.push(evaluate(token, a!, b!)!)
//     } else stack.push(parseFloat(token))
//   }
//   return stack[0]
// };

function evalRPN(tokens: string[]): number {

  // this feels like a stack
  // everytime you encounter a number, you add it to the stack
  // everytime you encounter an operator, you take out the top of of the stack, perform the operation
  // then add it back to the stack

  const stack = [] as Array<number>

  for (let i = 0; i < tokens.length; i++) {
    const currentToken = tokens[i]
    if (currentToken.charCodeAt(0) <= "9".charCodeAt(0) && currentToken.charCodeAt(0) >= "0".charCodeAt(0)) {
      stack.push(Number(currentToken))
      continue
    } else {
      if (currentToken == "+") {
        const x = (stack.pop())!
        const y = (stack.pop())!
        stack.push(x + y)
      } else if (currentToken == "-") {
        const x = (stack.pop())!
        const y = (stack.pop())!
        stack.push(x - y)
      } else if (currentToken == "*") {
        const x = (stack.pop())!
        const y = (stack.pop())!
        stack.push(x * y)
      } else {
        const x = (stack.pop())!
        const y = (stack.pop())!
        stack.push(x / y)
      }
    }
  }
  return stack.pop()!
}

console.log(evalRPN(["2", "1", "+", "3", "*"]))