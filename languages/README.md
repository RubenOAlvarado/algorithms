[English](./README.md) | [Español](./README.es.md)

# Language implementations

Each directory is an independent project containing implementations for any
number of challenges. A challenge does not need to be available in every
language.

Each language can provide:

```text
starters/     # Incomplete code copied into a learner's workspace
tests/        # Contract-based automated tests
solutions/    # Reviewed or legacy reference implementations
manifest.yml  # Review status for each available implementation
```

The future tutor skill will copy starters and tests into the ignored
`.practice/` directory. Learners should never edit reference solutions during
a normal practice session.

## Current languages

- [Java](./java): Maven and JUnit 5
- [TypeScript](./typescript): npm and TypeScript
- [Go](./go): one Go module with one package per challenge

## Adding another language

1. Create `languages/<language>/` with one build configuration.
2. Use the same kebab-case challenge names found in `challenges/`.
3. Add starter, test, and solution conventions for that language.
4. Add the language's build and test commands to its README.
5. Record solution review status in `manifest.yml`.

Language projects remain independent so adding Python, Ruby, or another
language does not affect existing builds.
