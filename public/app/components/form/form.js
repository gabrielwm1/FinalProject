"use strict";
const submit = {
    templateUrl: "app/components/form/form.html",
    controller: ["MainService", function(MainService){
        const vm = this;

        vm.saveTask = (newTask) => {
            console.log(newTask);
            MainService.postTodo(newTask);
        };
    }]
}

angular
    .module("App")
    .component("submit", submit);