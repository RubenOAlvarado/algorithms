[English](./reference.md) | [Español](./reference.es.md)

# Notas de referencia de FizzBuzz

Este documento forma parte del material de referencia. El tutor no debe
mostrarlo antes de que quien aprende haya intentado resolver el reto.

## Razonamiento

Procesa exactamente una vez cada entero desde `1` hasta `n`. Para cada valor,
elige una representación y añádela al resultado.

El caso de divisibilidad conjunta debe evaluarse antes que los casos
individuales. De lo contrario, `15` coincidiría primero con la regla de los
múltiplos de 3 y se convertiría incorrectamente en `"Fizz"`.

## Complejidad

- Tiempo: `O(n)`, porque cada valor de entrada se examina una vez.
- Espacio: `O(n)`, porque la colección devuelta contiene `n` elementos.

La propia salida requiere espacio lineal, por lo que la implementación de
referencia no intenta reducirlo más.

## Errores comunes

- Comprobar la divisibilidad por 3 antes de comprobar la divisibilidad tanto por
  3 como por 5.
- Imprimir los valores en lugar de devolverlos, lo que dificulta las pruebas.
- Producir más o menos de `n` elementos.
- Comenzar el bucle en `0` o detenerse antes de `n`.

## Firmas por lenguaje

- Java: `List<String> generate(int n)`
- TypeScript: `string[] fizzBuzz(number n)`
- Go: `[]string FizzBuzz(int n)`

La sintaxis varía, pero todas las implementaciones siguen el mismo contrato.
