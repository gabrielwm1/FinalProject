"use strict";
const todolist = {
    templateUrl: "app/components/todolist/todolist.html",
    controller: ["$rootScope", "MainService", function($rootScope, MainService){
        const vm = this;
        $rootScope.$on("toggleForm", (event, data) => {
            vm.showForm = data;
        });
        // $scope.showForm = false;
        // $scope.toggleForm = () => {
        // $scope.showForm = !$scope.showForm;
           // MainService.toggleForm();
           // MainService.toggleForm();
        // };

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
        vm.getAll = () => {
        MainService.getDaily().then(updateDaily);
        MainService.getWeekly().then(updateWeekly);
        MainService.getTodo().then(updateTodo);
        };

        vm.getAll(); 

        vm.completedTask = (task) => {
            if (task.completed === true) {
                task.completed = false
            } else {
                task.completed = true
            }
            
            MainService.put(task).then((result) => {
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