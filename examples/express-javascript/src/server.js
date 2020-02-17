import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(process.env.MY_MESSAGE);
});

app.listen(process.env.PORT, () => {
    console.log(`App running on http://localhost:${process.env.PORT}`);
});
