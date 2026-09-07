export function isValidParenthesis(s: string): boolean {
  // Initialize a stack to keep track of opening parentheses
  const stack: string[] = [];
  // Define a mapping of opening to closing parentheses
  const pairs: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

    // Iterate through each character in the string
  for (const char of s) {
    // If the character is an opening parenthesis, push it onto the stack
    // If it is a closing parenthesis, check if it matches the last opening parenthesis
    if (pairs[char]) {
      stack.push(char);
    } else {
      // If the stack is empty or the last opening parenthesis does not match the current closing parenthesis, return false
      const last = stack.pop();
      // If the stack is empty, it means there's no matching opening parenthesis
      if (pairs[last!] !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, it means there's no matching opening parenthesis
  return stack.length === 0;
}