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
        
        vm.delete = (id) => {
            MainService.delete(id).then((result) => {
                MainService.getWeekly().then(updateWeekly);
                MainService.getDaily().then(updateDaily);
                MainService.getTodo().then(updateTodo);
            });
           
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