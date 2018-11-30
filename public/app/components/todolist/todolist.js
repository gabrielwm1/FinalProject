"use strict";
const todolist = {
    templateUrl: "app/components/todolist/todolist.html",
    controller: ["MainService", function(MainService){
        const vm = this;

        //updates tasks from promise
        function updateDaily(result){            
            vm.dailyTask = result.data;
        };

        function updateWeekly(result){
            vm.weeklyTask = result.data;
        };

        function updateTodo(result){
            vm.todoTask = result.data;
        };

        //gets tasks on load
        MainService.getDaily().then(updateDaily);
        MainService.getWeekly().then(updateWeekly);
        MainService.getTodo().then(updateTodo);

    }]
}

angular 
    .module("App")
    .component("todolist", todolist);