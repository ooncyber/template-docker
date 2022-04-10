import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(true);
});

app.listen(80, () => {
    console.log(`http://localhost`);
});
