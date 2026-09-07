[English](./README.md) | [Español](./README.es.md)

# Java 21

All Java implementations share this Maven project. Each challenge uses a
package below `dev.ruben.algorithms` and has matching JUnit 5 tests.

The project requires JDK 21 or newer.

```text
starters/<challenge>/src/main/java/       # Copied for practice
solutions/src/main/java/                  # Reference implementations
tests/src/test/java/                      # Contract tests
```

Run every Java test:

```bash
mvn test
```

Run one test class:

```bash
mvn -Dtest=ClassNameTest test
```

Not every challenge needs a Java implementation. Add packages incrementally
as challenges are selected for practice.
