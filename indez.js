const express = require("express");
const path = require("path");


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile("/Main Files/profilehome.html");
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on port ${port}`);
});