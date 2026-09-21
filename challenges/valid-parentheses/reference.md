# Is Valid Parenthesis reference notes

This document belongs to the reference material. The tutor should not reveal it
before the learner has attempted the challenge.

## Algorithm
1. Initialize a stack to keep track of opening brackets.
2. Create a mapping of closing brackets to their corresponding opening brackets.
3. Iterate through each character in the string:
   - If the character is an opening bracket, push it onto the stack.
   - If it is a closing bracket, check if the stack is not empty and if the top of the stack matches the corresponding opening bracket. If it does, pop the stack; otherwise, return false.
4. After processing all characters, check if the stack is empty. If it is, return true; otherwise, return false.
