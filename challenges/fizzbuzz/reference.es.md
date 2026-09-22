[English](./reference.md) | [Español](./reference.es.md)

# Notas de referencia de FizzBuzz

Este documento forma parte del material de referencia. El tutor no debe
mostrarlo antes de que quien aprende haya intentado resolver el reto.

## Intuición

Procesa exactamente una vez cada entero desde `1` hasta `n`. Para cada valor,
elige una representación y añádela al resultado.

## Invariante / idea clave

Después de procesar un valor, el resultado contiene exactamente una
representación correcta para cada entero desde `1` hasta ese valor. Comprueba el
caso combinado antes que cualquiera de los casos individuales.

El caso de divisibilidad conjunta debe evaluarse antes que los casos
individuales. De lo contrario, `15` coincidiría primero con la regla de los
múltiplos de 3 y se convertiría incorrectamente en `"Fizz"`.

## Complejidad

- Tiempo: `O(n)`, porque cada valor de entrada se examina una vez.
- Espacio: `O(n)`, porque la colección devuelta contiene `n` elementos.

La propia salida requiere espacio lineal, por lo que la implementación de
referencia no intenta reducirlo más.

## Alternativas

El enfoque recomendado usa condiciones ordenadas: comprueba el caso combinado,
después cada divisor individual y por último la representación decimal. Hace
explícita la precedencia y es fácil de explicar.

Una alternativa compone una cadena añadiendo `"Fizz"` y `"Buzz"` cuando se
cumplen sus comprobaciones de divisibilidad; usa la representación decimal si
sigue vacía. Evita una rama combinada explícita, pero añade estado intermedio y
puede hacer menos directa la lectura del caso restante.

## Errores comunes

- Devolver un resultado vacío para una entrada positiva.
- Empezar en `0`, detenerse antes de `n` o usar límites incorrectos.
- Devolver números en vez de la representación de cadena requerida.
- Aplicar incorrectamente una regla de divisibilidad.
- Comprobar un caso individual antes que el caso combinado.
- Producir más o menos de `n` resultados.

Las pruebas de contrato indicadas cubren salida vacía, límites, representación,
divisibilidad, orden del caso combinado y conteo o longitud del resultado.

## Preguntas de seguimiento para entrevista

- ¿Cómo cambiaría el diseño para una lista arbitraria de divisores y etiquetas?
- ¿Se puede emitir el resultado sin guardarlo si quien llama no necesita un array?
- ¿Qué invariante usarías para demostrar que el bucle es correcto?

## Firmas por lenguaje

- Java: `List<String> generate(int n)`
- TypeScript: `fizzBuzz(n: number): string[]`
- Go: `FizzBuzz(n int) []string`

La sintaxis varía, pero todas las implementaciones siguen el mismo contrato.
