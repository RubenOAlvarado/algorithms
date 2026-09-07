[English](./README.md) | [Español](./README.es.md)

# TypeScript

Todas las implementaciones de TypeScript comparten este proyecto y sus
dependencias.

```bash
npm install
npm run typecheck
npm run build
npm test
```

Ejecuta el ejemplo de un reto pasando su `index.ts` al ejecutor compartido:

```bash
npm run run -- solutions/fibonacci/index.ts
```

Las nuevas soluciones de referencia deben situarse en `solutions/<challenge>/`.
El código inicial y las pruebas permanecen separados para que el tutor pueda
crear un espacio de trabajo aislado para el estudiante. Los nuevos retos no
requieren otro `package.json` ni otro `tsconfig.json`.
