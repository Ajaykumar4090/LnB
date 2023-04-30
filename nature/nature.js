const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.sendFile('${__dirname}/nature.html');
});

app.listen(5000, () => {
    console.log("server at 5000");
});