[English](./practice.md) | [Español](./practice.es.md)

# Practica un reto

Haz un fork de este repositorio, elige un reto y edita su starter in situ. No
copies archivos a otro espacio de trabajo ni edites `solutions/` mientras
aprendes.

1. Haz un fork y clona el repositorio.
2. Lee el contrato en `challenges/<challenge>/README.md`.
3. Edita el archivo correspondiente en `languages/<language>/starters/`. Go y
   TypeScript usan un directorio por reto; Java usa el árbol Maven compartido
   que se muestra abajo.
4. Ejecuta la prueba de contrato de ese reto desde el directorio del lenguaje.
5. Repite hasta que pase la prueba; consulta la referencia solo si la necesitas.

## Comandos de FizzBuzz

| Lenguaje | Starter | Comando |
| --- | --- | --- |
| Go | `languages/go/starters/fizzbuzz/main.go` | `cd languages/go && go test ./tests/fizzbuzz` |
| TypeScript | `languages/typescript/starters/fizzbuzz/fizzbuzz.ts` | `cd languages/typescript && npm install && npm test -- tests/fizzbuzz.test.ts` |
| Java | `languages/java/starters/src/main/java/dev/ruben/algorithms/fizzbuzz/FizzBuzz.java` | `cd languages/java && mvn -Dtest=FizzBuzzTest test` |

Las pruebas comienzan en rojo porque los starters están incompletos de forma
deliberada. Ese fallo es la señal para empezar a practicar, no un defecto del
repositorio. Las soluciones de referencia se mantienen aparte; consulta
[`solution-review.es.md`](./solution-review.es.md).
