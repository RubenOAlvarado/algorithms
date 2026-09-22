[English](./solution-review.md) | [Español](./solution-review.es.md)

# Revisión de soluciones de referencia

Las implementaciones existentes comienzan como `legacy`. Una solución solo pasa
a ser `verified` tras esta revisión y superar la verificación de su lenguaje.

## Flujo de siete pasos

1. Define o confirma el contrato del reto, independiente del lenguaje.
2. Escribe pruebas independientes a partir del contrato, nunca del código actual.
3. Audita la corrección, los límites, la representación y los casos del lenguaje.
4. Elige y revisa una implementación de referencia clara.
5. Considera alternativas razonables y registra por qué se prefiere la referencia.
6. Escribe una explicación de la idea clave, el invariante y la complejidad.
7. Verifica la referencia con las pruebas de contrato y actualiza su manifest.

`kata-smith` puede automatizar partes de este flujo cuando está disponible, pero
no es necesario y el repositorio no exige scripts ni herramientas propios.

## Diseño de pruebas y comprobación por mutación

Las pruebas deben fallar ante errores frecuentes: resultado vacío, límites de
bucle incorrectos, representación incorrecta, divisibilidad errónea, orden
incorrecto del caso combinado y conteo o longitud incorrectos. Confírmalo
manualmente introduciendo una pequeña mutación intencionada para cada error
relevante y comprobando el fallo esperado. Restaura la implementación después.

## Procedimiento de verificación para mantenedores

Las pruebas de práctica apuntan a starters y están en rojo deliberadamente.
Para verificar una referencia sin cambiar el modelo de aprendizaje:

- Go y TypeScript: cambia temporalmente el import de la prueba del reto del
  starter a la solución, ejecuta la prueba del reto y revierte ese import.
- Java: copia temporalmente el fuente de la solución sobre el fuente del starter,
  ejecuta `mvn -Dtest=FizzBuzzTest test` y restaura el fuente del starter.

No dejes estas sustituciones en el árbol de trabajo. El estado registrado en
`languages/<language>/manifest.yml` es la fuente de verdad.

## Estados

- `legacy`: conservada del repositorio original y aún no considerada fiable como referencia.
- `draft`: en proceso activo de cambio o revisión.
- `reviewed`: contrato e implementación revisados, pero sin pruebas locales completas.
- `verified`: revisión completada y pruebas automatizadas superadas.

## Rúbrica de ocho puntos

Registra cada criterio como `pass` en el manifest solo cuando cumpla este nivel:

1. **Corrección**: la referencia satisface el contrato completo.
2. **Claridad**: los nombres y el flujo hacen fácil seguir el enfoque.
3. **Complejidad**: los costes temporal y espacial son adecuados y están
   documentados.
4. **Uso idiomático**: la implementación sigue las convenciones del lenguaje.
5. **Testabilidad**: el comportamiento se devuelve y no se oculta tras E/S o
   estado.
6. **Casos límite**: las fronteras y errores frecuentes están cubiertos.
7. **Valor pedagógico**: la referencia enseña la idea clave sin abstracción
   innecesaria.
8. **Consistencia**: contrato, pruebas, referencia, explicación y manifest
   coinciden.

Las claves correspondientes del manifest son `correctness`, `clarity`,
`complexity`, `idiomatic_usage`, `testability`, `edge_cases`,
`pedagogical_value` y `consistency`.
