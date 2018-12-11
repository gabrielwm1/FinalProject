"use strict"

const express = require("express");
const app = express();
const routes = require("./routes/routes.js")

app.use(express.static("./public"));
app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 5000;

app.listen(port, _ => {
    console.log(`server is running on Port: ${port}.`);
});