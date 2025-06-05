# Is Valid Parenthesis

## Problem Statement
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Algorithm
1. Initialize a stack to keep track of opening brackets.
2. Create a mapping of closing brackets to their corresponding opening brackets.
3. Iterate through each character in the string:
   - If the character is an opening bracket, push it onto the stack.
   - If it is a closing bracket, check if the stack is not empty and if the top of the stack matches the corresponding opening bracket. If it does, pop the stack; otherwise, return false.
4. After processing all characters, check if the stack is empty. If it is, return true; otherwise, return false.

## Implementations
- [Typescript](./ts)
- [Go](./go) (soon)
- [Java](./java) (soon)