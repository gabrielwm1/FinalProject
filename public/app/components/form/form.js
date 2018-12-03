"use strict";
const submit = {
    templateUrl: "app/components/form/form.html",
    controller: ["MainService", function(MainService){
        const vm = this;
        vm.lowImportance = false;
        vm.medImportance = false;
        vm.highImportance = false; 

        vm.saveTask = (task) => {
            console.log(task);

            //console.log("test");
            MainService.postTodo(task);
        };

        vm.taskImportance = (value) => {
            MainService.put(value);
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