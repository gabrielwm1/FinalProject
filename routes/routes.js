"use strict"

const express = require("express");

const routes = express.Router();

const pool = require("../connection/connection.js");

let req = null;

function getTasks(req,res){
    pool.query("select * from toDO order by id").then((result) => {
        res.json(result.rows);
    });
}

routes.get("/tasks/daily", (req, res) => {
    pool.query("select * from toDO where daily = true").then((result) => {
        res.json(result.rows);
    })
});

routes.get("/tasks/weekly", (req, res) => {
    pool.query("select * from toDO where weekly = true").then((result) => {
        res.json(result.rows);
    })
});

routes.get("/tasks/todo", (req, res) => {
    pool.query("select * from toDO where todo = true").then((result) => {
        res.json(result.rows);
    })
});

routes.post("/tasks", (req, res) => {
    pool.query("insert into toDO (task, importance, daily, weekly, todo, completed) values($1::text, $2::int, $3::boolean, $4::boolean, $5::boolean, $6::boolean)", [req.body.task, req.body.importance, req.body.daily, req.body.weekly, req.body.todo, req.body.completed]).then(() => {
        getTasks(req, res);
    });
});

routes.delete("/tasks/:id", (req, res) => {
    pool.query("delete from toDO where id=$1::int",
    [req.params.id]).then(() => {
       getTasks(req, res);
    });
});

routes.put("/tasks/:id", (req, res) => {
    pool.query("update toDO set task=$1::text, importance=$2::int, daily=$3::boolean, weekly=$4::boolean, todo=$5::boolean, completed=$6::boolean WHERE id=$7::int", [req.body.task, req.body.importance, req.body.daily, req.body.weekly, req.body.todo, req.body.completed, req.params.id]).then(() => {
        getTasks(req, res);
        })
});

module.exports = routes;