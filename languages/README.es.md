[English](./README.md) | [Español](./README.es.md)

# Implementaciones por lenguaje

Cada directorio es un proyecto independiente que contiene implementaciones para
cualquier número de retos. Un reto no tiene que estar disponible en todos los
lenguajes.

Cada lenguaje puede proporcionar:

```text
starters/     # Código incompleto que se copia al espacio de trabajo del estudiante
tests/        # Pruebas automatizadas basadas en contratos
solutions/    # Implementaciones de referencia revisadas o heredadas
manifest.yml  # Estado de revisión de cada implementación disponible
```

La futura habilidad de tutor copiará el código inicial y las pruebas al
directorio ignorado `.practice/`. Los estudiantes nunca deberían editar las
soluciones de referencia durante una sesión de práctica normal.

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
Python, Ruby u otro lenguaje no afecta a las compilaciones existentes.
