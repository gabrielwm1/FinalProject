"use strict";
const todolist = {
    templateUrl: "app/components/todolist/todolist.html",
    controller: ["$rootScope", "MainService", function ($rootScope, MainService) {
        const vm = this;
        vm.toggle = false;
        //now receiving broadcast in the service

        //vm.showForm = MainService.getValue();

        // recieves broadcast
        
        vm.showForm = () => {
            // $rootScope.$broadcast("showForm", true);
            MainService.setValue(true);
            //MainService.loadList();
        };
        vm.getValue = () => {
            return MainService.getDisplayValue();  
        }

        // $rootScope.$on("showForm", (event,data) => {
            
        //     MainService.setValue(data);
        //     // value = data;
        //     // console.log(value);
        // });

        // $rootScope.$on("hideForm", (event, data) => {     
        //     console.log("this is working");
        //     MainService.setValue(data);     
        //     // value = data;
        //      console.log(data);
        // });

        //console.log(value);
       

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
            vm.taskImportance = task.importance;
            // // sends to service
            MainService.put(task);
            MainService.updateCurrency(task);
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
        };
    }]
}

angular
    .module("App")
    .component("todolist", todolist);