// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = (s: string): boolean => {
  const stack: Array<string> = []

  // early return if input is invalid
  if (s.length === 0 || s.length === 1) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i]
    const isOpeningBracket = currentBracket === '[' || currentBracket === '{' || currentBracket === '('

    if (isOpeningBracket) {
      stack.push(currentBracket)
    } else {
      const stackLength = stack.length
      const topOfStack = stack[stackLength - 1]
      if (currentBracket === ']' && topOfStack === '[') {
        stack.pop()
        continue
      } else if (currentBracket === '}' && topOfStack === '{') {
        stack.pop()
        continue
      } else if (currentBracket === ')' && topOfStack === '(') {
        stack.pop()
        continue
      }
      // if not, we need to push the closing bracket into the stack
      stack.push(currentBracket)
    }
  }
  return stack.length === 0
}

const input = "()"
const input2 = "()[]{}"
const input3 = "(]"
const input4 = "([)]{}"

console.log(isValid(input))
console.log(isValid(input2))
console.log(isValid(input3))
console.log(isValid(input4))
