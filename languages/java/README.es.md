[English](./README.md) | [Español](./README.es.md)

# Java 21

Todas las implementaciones de Java comparten este proyecto Maven. Cada reto usa
un paquete bajo `dev.ruben.algorithms` y tiene sus correspondientes pruebas de
JUnit 5.

El proyecto requiere JDK 21 o posterior.

```text
starters/<challenge>/src/main/java/       # Se copia para practicar
solutions/src/main/java/                  # Implementaciones de referencia
tests/src/test/java/                      # Pruebas de contrato
```

Ejecuta todas las pruebas de Java:

```bash
mvn test
```

Ejecuta una clase de prueba:

```bash
mvn -Dtest=ClassNameTest test
```

No todos los retos necesitan una implementación en Java. Añade paquetes de
forma incremental a medida que se seleccionen retos para practicar.
