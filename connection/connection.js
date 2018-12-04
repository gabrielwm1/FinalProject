"use strict";
const pg = require("pg");
const pool = {
    user: "postgres",
    password: "gabriel",
    host: "localhost",
    port: "5432",
    database: "tasksDatabase",
    ssl: false
};

module.exports  = new pg.Pool(pool);