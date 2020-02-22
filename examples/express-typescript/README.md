# Express Typescript server with Nodehawk

Creating an Express server written in Typescript from scratch, with Nodemon
watching for changes, is very simple.

-   Install express

```bash
yarn add express
```

-   Install development dependencies

```bash
yarn add -D nodehawk typescript @types/express @types/node ts-node
```

-   Create a `tsconfig.json` in your project root.

```json
{
    "include": ["./src/**/*.ts", "./src/**/*.json"],
    "exclude": ["node_modules"],
    "compilerOptions": {
        "baseUrl": "src",
        "outDir": "build",
        "rootDir": ".",
        "module": "commonjs",
        "target": "es2015"
    }
}
```

-   Create a `.nodehawkrc` in your project root.

```jsonc
{
    "exec": "ts-node src/server",
    "port": 1337 // this is optional. Default port is 4000.
}
```

-   Create your server in `src/server.ts`. Not the usage of `process.env.PORT`.
    This is very important to get the utmost out of Nodehawk.

```typescript
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(process.env.PORT, () => {
    console.log(`App running on http://localhost:${process.env.PORT}`);
});
```

-   Add a script in your `package.json`.

```jsonc
{
    "scripts": {
        "start": "nodehawk" // Yes, really
    }
}
```

-   Run the script.

```bash
yarn start
```

Et voila! Your Express server with the latest Typescript and ES support is up
and running. You can make any changes and hit save, and check your terminal.
Nodehawk will promptly restart the process to reflect your changes.
