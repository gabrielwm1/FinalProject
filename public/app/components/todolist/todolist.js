"use strict";
const todolist = {
    templateUrl: "app/components/todolist/todolist.html",
    controller: ["$rootScope", "MainService", function ($rootScope, MainService) {
        const vm = this;
        
        // recieves broadcast
        $rootScope.$on("hideForm", (event, data) => {     
            console.log(data);       
            vm.showForm = data;
        });

        // updates tasks from promise
        function updateDaily(result) {
            vm.dailyTask = result.data;
        };
        function updateWeekly(result) {
            vm.weeklyTask = result.data;
        };
        function updateTodo(result) {
            vm.todoTask = result.data;
        };

        // gets tasks on load
        vm.getAll = () => {
            MainService.getDaily().then(updateDaily);
            MainService.getWeekly().then(updateWeekly);
            MainService.getTodo().then(updateTodo);
        };
        vm.getAll();

        // updates task as completed or on completed
        vm.completedTask = (task) => {
            if (task.completed === true) {
                task.completed = false
                
            } else {
                task.completed = true
            }

            // sends to service
            MainService.put(task).then((result) => {
                vm.getAll();
            });
            MainService.updateCurrency(task.completed);
        };

        // updates edited task
        vm.updateTask = (task) => {
            MainService.put(task).then((result) => {
                vm.getAll();
            });
        };

        // deletes task
        vm.delete = (id) => {
            MainService.delete(id).then((result) => {
                vm.getAll();
            });
        };

        // toggles todo list to show or hide completed
        vm.toggleCompleted = () => {
  
            if (vm.toggle === true) {
                 vm.toggle = false;
            } else {
                 vm.toggle = true;
            }
            console.log(vm.toggle);
            vm.getAll();
        };
    }]
}

angular
    .module("App")
    .component("todolist", todolist);