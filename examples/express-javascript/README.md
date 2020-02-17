# Express Javascript server with Nodehawk

Creating an Express server written in JavaScript from scratch, with Nodemon
watching for changes, is very simple.

-   Install express

```bash
yarn add express
```

-   Install Babel dependencies

```bash
yarn add -D @babel/core @babel/node @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/plugin-syntax-dynamic-import babel-plugin-transform-async-to-promises
```

-   Create a `.babelrc` in your project root.

```json
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
        "transform-async-to-promises"
    ]
}
```

-   Create a `.nodehawkrc` in your project root.

```jsonc
{
    "exec": "babel-node src/server",
    "port": 1337 // this is optional. Default port is 4000.
}
```

-   Create your server in `src/server.js`. Not the usage of `process.env.PORT`.
    This is very important to get the utmost out of Nodehawk.

```javascript
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

And, voila! Your Express server with the latest ES support is up and running!
You can make any changes and hit save, and check your terminal. Nodehawk will
promptly restart the process to reflect your changes!
