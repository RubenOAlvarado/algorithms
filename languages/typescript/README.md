# TypeScript

All TypeScript implementations share this project and its dependencies.

```bash
npm install
npm run typecheck
npm run build
npm test
```

Run a challenge example by passing its `index.ts` to the shared runner:

```bash
npm run run -- solutions/fibonacci/index.ts
```

New reference solutions belong in `solutions/<challenge>/`. Starters and tests
remain separate so the tutor can create an isolated learner workspace. New
challenges do not require another `package.json` or `tsconfig.json`.
