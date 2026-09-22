[English](./README.md) | [Español](./README.es.md)

# Implementaciones por lenguaje

Cada directorio es un proyecto independiente para cualquier número de retos.
Haz un fork del repositorio, edita in situ el starter elegido y ejecuta la
prueba de contrato de ese lenguaje. Un reto no tiene que estar disponible en
todos los lenguajes.

Cada lenguaje puede proporcionar:

```text
starters/     # Código incompleto que edita in situ quien aprende
tests/        # Pruebas automatizadas basadas en contratos
solutions/    # Implementaciones de referencia revisadas o heredadas
manifest.yml  # Fuente de verdad del estado de revisión de cada implementación
```

Java es la excepción estructural: todos los starters comparten el árbol Maven
`starters/src/main/java/`, mientras que las pruebas y referencias usan sus
propios árboles compartidos. Quien aprende edita starters, nunca referencias.

Cada lenguaje incluye un adaptador opcional `kata-smith.json` para herramientas
externas. El repositorio no necesita kata-smith, kata-smith no necesita este
repositorio y los proyectos de lenguaje siguen siendo independientes.

## Lenguajes actuales

- [Java](./java/README.es.md): Maven y JUnit 5
- [TypeScript](./typescript/README.es.md): npm y TypeScript
- [Go](./go/README.es.md): un módulo de Go con un paquete por reto

## Añadir otro lenguaje

1. Crea `languages/<language>/` con una única configuración de compilación.
2. Usa los mismos nombres de reto en kebab-case que aparecen en `challenges/`.
3. Añade las convenciones de código inicial, pruebas y soluciones para ese lenguaje.
4. Añade los comandos de compilación y pruebas del lenguaje a su README.
5. Registra el estado de revisión de las soluciones en `manifest.yml`.

Los proyectos de cada lenguaje permanecen independientes, de modo que añadir
Python, Ruby u otro lenguaje no afecta a las compilaciones ni a las herramientas
existentes.
