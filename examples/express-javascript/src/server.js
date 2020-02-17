import express from "express";
import chalk from "chalk";

const app = express();

app.get("/", (req, res) => {
    res.send(process.env.MY_MESSAGE);
});

app.listen(process.env.PORT, () => {
    console.log(
        chalk`{yellow.bold App running on http://localhost:${process.env.PORT}}`
    );
});
