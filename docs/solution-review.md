# Reference solution review

Existing implementations begin as `legacy`. A solution becomes `verified` only
after completing this review.

## Review order

1. Define a language-independent contract.
2. Write tests from the contract, not from the existing code.
3. Audit correctness and edge cases.
4. Choose a clear, idiomatic reference implementation.
5. Document time and space complexity.
6. Confirm that the starter exposes no solution details.
7. Run the language's complete test suite.

## Statuses

- `legacy`: preserved from the original repository and not yet trusted as a reference.
- `draft`: actively being changed or reviewed.
- `reviewed`: contract and implementation reviewed, but not fully tested locally.
- `verified`: review complete and automated tests passing.

## Quality criteria

- Correct for the documented contract.
- Clear enough to explain during an interview.
- Idiomatic for the implementation language.
- Explicit about time and space complexity.
- Free of unnecessary abstraction or cleverness.
- Tested for examples, boundaries, and common mistakes.
