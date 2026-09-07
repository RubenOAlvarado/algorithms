[English](./solution-review.md) | [Español](./solution-review.es.md)

# Revisión de soluciones de referencia

Las implementaciones existentes comienzan como `legacy`. Una solución solo pasa
a ser `verified` tras completar esta revisión.

## Orden de revisión

1. Define un contrato independiente del lenguaje.
2. Escribe pruebas a partir del contrato, no del código existente.
3. Revisa la corrección y los casos límite.
4. Elige una implementación de referencia clara e idiomática.
5. Documenta la complejidad temporal y espacial.
6. Confirma que el código inicial no revela detalles de la solución.
7. Ejecuta el conjunto completo de pruebas del lenguaje.

## Estados

- `legacy`: conservada del repositorio original y aún no considerada fiable como referencia.
- `draft`: en proceso activo de cambio o revisión.
- `reviewed`: contrato e implementación revisados, pero sin pruebas locales completas.
- `verified`: revisión completada y pruebas automatizadas superadas.

## Criterios de calidad

- Correcta para el contrato documentado.
- Lo bastante clara como para explicarla durante una entrevista.
- Idiomática para el lenguaje de implementación.
- Explícita sobre la complejidad temporal y espacial.
- Libre de abstracciones innecesarias o soluciones excesivamente ingeniosas.
- Probada con ejemplos, límites y errores habituales.
