"use strict";
const submit = {
    templateUrl: "app/components/form/form.html",
    controller: ["$rootScope", "MainService", function($rootScope, MainService){
        const vm = this;
        vm.showForm = false;

        vm.saveTask = (task) => {
            MainService.postTodo(task);
        };
        vm.toggleForm = () => {
            vm.showForm = !vm.showForm;
            $rootScope.$broadcast("toggleForm", vm.showForm);
           // MainService.toggleForm();
           // MainService.toggleForm();
        };

        vm.addImportance = (value) => {
           if (value === 1){
               vm.newTask.importance = 1;
               
           }
           else if (value === 2){
               vm.newTask.importance = 2;
           }
           else if (value === 3){
               vm.newTask.importance = 3;
           }
           else {
               vm.newTask.importance = 0; 
           }
           console.log(value);
        }

        vm.addFrequency = (value) =>{
            if (value === "daily"){
                vm.newTask.daily = true;
            }
            else if (value === "weekly"){
                vm.newTask.weekly = true;
            }
            else {
                vm.newTask.todo = true;
            }
        }

        vm.medImportance = () => {
            vm.medImportance = !vm.medImportance;
        }
        vm.flipHigh = () => {
            vm.highImportance = !vm.highImportance;
        }
        vm.flipLow = () => {
            vm.lowImportance = !vm.lowImportance;
        }
    }]
}

angular
    .module("App")
    .component("submit", submit);