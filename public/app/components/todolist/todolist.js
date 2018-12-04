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
        vm.getAll =() => {
        MainService.getDaily().then(updateDaily);
        MainService.getWeekly().then(updateWeekly);
        MainService.getTodo().then(updateTodo);
        };

        vm.getAll(); 

        vm.completedTask = (task) => {
            MainService.put(task).then((result) => {
                console.log(result);
                vm.getAll();

            });
           
        };
        
        vm.delete = (id) => {
            MainService.delete(id).then((result) => {
                vm.getAll();
            });
           
        };
 
        
    }]
}

angular 
    .module("App")
    .component("todolist", todolist);