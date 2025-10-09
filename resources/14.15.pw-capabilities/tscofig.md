## Recommended `tsconfig.json` for JSON Import Support
1. To import `.json` files smoothly, ensure your project has a valid TypeScript config:
2. Create the file `tsconfig.json` at the project root and add the follwoing basic config

```json
{
    "compilerOptions": {
        "target": "ESNext",
        "module": "CommonJS",
        "resolveJsonModule": true,
        "esModuleInterop": true,
        "strict": false,
        "noImplicitAny": false
    },
    "include": ["tests/**/*.ts", "data/**/*.ts", "playwright.config.ts"],
    "exclude": ["node_modules", "dist"]
}

```

3. Reference: https://www.typescriptlang.org/tsconfig/
