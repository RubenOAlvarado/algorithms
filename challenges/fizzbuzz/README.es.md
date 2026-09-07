[English](./README.md) | [Español](./README.es.md)

# FizzBuzz

## Objetivos de aprendizaje

- Traducir reglas en condiciones ordenadas.
- Usar la iteración para construir un resultado.
- Reconocer condiciones que se solapan.
- Explicar la complejidad temporal lineal.

## Problema

Dado un entero no negativo `n`, devuelve las representaciones de todos los
enteros desde `1` hasta `n`, en orden:

- Los múltiplos de `3` se convierten en `"Fizz"`.
- Los múltiplos de `5` se convierten en `"Buzz"`.
- Los múltiplos de `3` y `5` se convierten en `"FizzBuzz"`.
- Cualquier otro valor se convierte en su representación decimal.

No imprimas desde el algoritmo. Devuelve la colección completa para que quien
lo llame pueda decidir cómo mostrarla o utilizarla.

## Ejemplos

```text
n = 5
["1", "2", "Fizz", "4", "Buzz"]

n = 15
["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz",
 "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

## Restricciones

- `0 <= n <= 10,000`
- Para `n = 0`, devuelve una colección vacía.

## Antes de programar

1. ¿Qué regla se solapa con otras dos reglas?
2. ¿Importa el orden en el que evalúas las reglas?
3. ¿Qué debería ocurrir cuando un valor no coincide con ninguno de los divisores?

## Lista de comprobación

- [ ] Los ejemplos producen la salida esperada.
- [ ] El valor cero devuelve una colección vacía.
- [ ] Las pruebas cubren los múltiplos de 3, de 5 y de ambos.
- [ ] La entrada se recorre una sola vez.
- [ ] Se pueden explicar las complejidades temporal y espacial.

## Implementaciones de referencia

Consúltalas únicamente después de completar un intento o de abandonarlo de
forma explícita:

- [Java 21](../../languages/java/solutions/src/main/java/dev/ruben/algorithms/fizzbuzz)
- [TypeScript](../../languages/typescript/solutions/fizzbuzz)
- [Go](../../languages/go/solutions/fizzbuzz)

Las pistas progresivas se encuentran en [`hints.es.md`](./hints.es.md) para que
las utilice el tutor.
