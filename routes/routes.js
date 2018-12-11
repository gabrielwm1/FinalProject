"use strict"

const express = require("express");
const routes = express.Router();
const pool = require("../connection/connection.js");

// return
function getTasks(req,res){
    pool.query("SELECT * FROM todo order by importance").then((result) => {
        res.json(result.rows);
        console.log("success");
    });
}

//get all taskts
routes.get("/tasks", (req, res) => {
    pool.query("SELECT * FROM todo").then((result) => {
        res.json(result.rows);
        console.log("success");
    })
});
//get all completed tasks
routes.get("/tasks/completed", (req, res) => {
    pool.query("SELECT * FROM todo WHERE completed = true").then((result) => {
        res.json(result.rows);
        console.log("success");
    })
})


//gets daily tasks
routes.get("/tasks/daily", (req, res) => {
    pool.query("SELECT * FROM todo WHERE daily = true ORDER BY importance DESC, id").then((result) => {
        res.json(result.rows);
        console.log("success");
    })
});

//gets weekly tasks
routes.get("/tasks/weekly", (req, res) => {
    pool.query("SELECT * FROM todo WHERE weekly = true ORDER BY importance DESC, id").then((result) => {
        res.json(result.rows);
        console.log("success");
    })
});

//gets todos
routes.get("/tasks/todo", (req, res) => {
    pool.query("SELECT * FROM todo WHERE todo = true ORDER BY importance DESC, id").then((result) => {
        res.json(result.rows);
        console.log("success");
    })
});

//post task
routes.post("/tasks", (req, res) => {
    pool.query("insert into toDO (task, importance, daily, weekly, todo, completed) values($1::text, $2::int, $3::boolean, $4::boolean, $5::boolean, $6::boolean)", [req.body.task, req.body.importance, req.body.daily, req.body.weekly, req.body.todo, req.body.completed]).then(() => {
        getTasks(req, res);
    });
});

// delete
routes.delete("/tasks/:id", (req, res) => {
    pool.query("delete from toDO where id=$1::int",
    [req.params.id]).then(() => {
       getTasks(req, res);
    });
});

// update task
routes.put("/tasks/:id", (req, res) => {
    pool.query("update toDO set task=$1::text, importance=$2::int, daily=$3::boolean, weekly=$4::boolean, todo=$5::boolean, completed=$6::boolean WHERE id=$7::int", [req.body.task, req.body.importance, req.body.daily, req.body.weekly, req.body.todo, req.body.completed, req.params.id]).then(() => {
        getTasks(req, res);
        });
});

module.exports = routes;