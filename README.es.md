[English](./README.md) | [Español](./README.es.md)

# Rastreador de conocimientos de algoritmos

Una colección independiente del lenguaje de retos de algoritmos y sus
implementaciones. Los retos se documentan una sola vez y pueden resolverse de
forma incremental en Java, TypeScript, Go o cualquier lenguaje que se añada más
adelante.

## Estructura del proyecto

```text
.
├── challenges/          # Enunciados independientes del lenguaje
│   └── <challenge>/
│       └── README.md
└── languages/           # Un proyecto compartido por lenguaje de programación
    ├── java/            # Java 21, Maven + JUnit 5
    ├── typescript/      # npm + TypeScript
    └── go/              # Un módulo de Go
```

Una implementación es opcional: un reto puede existir antes de resolverse en
un lenguaje concreto. Consulta [`languages/README.es.md`](./languages/README.es.md)
para conocer la convención utilizada al añadir Python, Ruby u otro lenguaje.

## Empieza a aprender

- Sigue la [ruta de aprendizaje recomendada](./docs/learning-path.es.md).
- Explora los retos [por tema](./docs/topics/README.es.md).
- Explora los retos [por dificultad](./docs/difficulty.es.md).
- Consulta la dificultad, los patrones y los prerrequisitos en
  [`catalog.yml`](./catalog.yml).
- Descubre cómo se validan las implementaciones de referencia en
  [`docs/solution-review.es.md`](./docs/solution-review.es.md).

## Ejecutar las implementaciones

```bash
# Java
cd languages/java && mvn test

# TypeScript
cd languages/typescript && npm install && npm run typecheck

# Go
cd languages/go && go test ./...
```

## Retos

- [Capitalizar](./challenges/capitalize/README.md)
- [Dividir un array en fragmentos](./challenges/chunk-array/README.md)
- [Contar dígitos](./challenges/count-digits/README.md)
- [Diferencia diagonal](./challenges/diagonal-difference/README.md)
- [Factorial](./challenges/factorial/README.md)
- [Secuencia de Fibonacci](./challenges/fibonacci/README.md)
- [Primera aparición](./challenges/first-occurrence/README.md)
- [Primer turno en blackjack](./challenges/first-turn-blackjack/README.md)
- [FizzBuzz](./challenges/fizzbuzz/README.es.md)
- [Es único](./challenges/is-unique/README.md)
- [Paréntesis válidos](./challenges/valid-parentheses/README.md)
- [Longitud de la última palabra](./challenges/length-of-last-word/README.md)
- [Entero solitario](./challenges/lonely-integer/README.md)
- [Prefijo común más largo](./challenges/longest-common-prefix/README.md)
- [Carácter más frecuente](./challenges/max-char/README.md)
- [Beneficio máximo](./challenges/max-profit/README.md)
- [Combinar cadenas de forma alterna](./challenges/merge-strings/README.md)
- [Número que falta](./challenges/missing-number/README.md)
- [Número palíndromo](./challenges/number-palindrome/README.md)
- [Palíndromo](./challenges/palindrome/README.md)
- [Invertir un array in situ](./challenges/reverse-array/README.md)
- [Invertir un entero](./challenges/reverse-integer/README.md)
- [Invertir una cadena](./challenges/reverse-string/README.md)
- [Matriz en espiral](./challenges/spiral-matrix/README.md)
- [Suma de dígitos](./challenges/sum-digits/README.md)
- [Suma de números naturales](./challenges/sum-natural-numbers/README.md)
- [Anagrama válido](./challenges/valid-anagram/README.md)
- [Contar vocales](./challenges/vowels-count/README.md)
- [Contar palabras](./challenges/word-count/README.md)
