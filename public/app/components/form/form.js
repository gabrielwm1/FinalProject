"use strict";
const submit = {
    templateUrl: "app/components/form/form.html",
    controller: ["$rootScope", "MainService", "$route", function ($rootScope, MainService, $route) {

        const vm = this;
        // sends value of false to boardcast
        vm.showForm = true;
        vm.hideForm = () => {
            vm.showForm = false;
            MainService.setValue(vm.showForm);
            //$rootScope.$broadcast("hideForm", false);
        }

        //close and refresh
        vm.closeAndRefresh = () => {
            $route.reload();
        }

        // saves new in service
        vm.saveTask = (task) => {
            if (task.daily === true || task.weekly === true || task.todo === true) {
                MainService.postTodo(task);    
            } else {
                console.log("Task not submitted. Must select task type.");
                
            }
        };

        // sets importance for obj
        vm.addImportance = (value) => {
            if (value === 1) {
                vm.newTask.importance = 1;
            } else if (value === 2) {
                vm.newTask.importance = 2;
            } else if (value === 3) {
                vm.newTask.importance = 3;
            } else {
                vm.newTask.importance = 0;
            };
        }

        // sets frequency obj
        vm.addFrequency = (value) => {
            if (value === "daily") {
                vm.newTask.daily = true;
                //console.log(vm.newTask.importance);
            }
            else if (value === "weekly") {
                vm.newTask.weekly = true;
            }
            else {
                vm.newTask.todo = true;
            };
        }
    }]
}

angular
    .module("App")
    .component("submit", submit);