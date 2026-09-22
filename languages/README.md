[English](./README.md) | [Español](./README.es.md)

# Language implementations

Each directory is an independent project for any number of challenges. Fork the
repository, edit the selected starter in place, and run that language's contract
test. A challenge does not need to be available in every language.

Each language can provide:

```text
starters/     # Incomplete code edited in place by learners
tests/        # Contract-based automated tests
solutions/    # Reviewed or legacy reference implementations
manifest.yml  # Source of truth for each implementation's review status
```

Java is the structural exception: all starters share the Maven source tree at
`starters/src/main/java/`, while tests and references use their own shared
trees. Learners edit starters, never reference solutions.

Each language supplies an optional `kata-smith.json` adapter for external
tools. The repository does not require kata-smith, kata-smith does not require
this repository, and the language projects remain mutually independent.

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
language does not affect existing builds or tooling.
