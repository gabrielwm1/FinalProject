"use strict"

const express = require("express");

const routes = express.Router();

const pool = require("../connection/connection.js");

let req = null;

routes.get("/tasks/daily", (req, res) => {
    pool.query("select * from toDO where daily = true").then((result) => {
        res.json(result.rows);
    })
});

module.exports = routes;