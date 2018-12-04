"use strict";
const submit = {
    templateUrl: "app/components/form/form.html",
    controller: ["$rootScope", "MainService", function($rootScope, MainService){
        const vm = this;
        vm.showForm = true;

        vm.saveTask = (task) => {
            MainService.postTodo(task);
        };
        vm.hideForm = () => {
            vm.showForm = false;
            $rootScope.$broadcast("hideForm", vm.showForm);

        }
        vm.toggleForm = () => {
            if (vm.showForm === false ) {
                vm.showForm = true;
                $rootScope.$broadcast("toggleForm", vm.showForm);
            } else {
                vm.showForm = false;
                
            };
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