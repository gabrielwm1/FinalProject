"use strict";
const todolist = {
    templateUrl: "app/components/todolist/todolist.html",
    controller: ["$rootScope", "MainService", function ($rootScope, MainService) {
        const vm = this;
        //vm.displayForm;
        // vm.showForm = true;
        $rootScope.$on("loadForm", (event, data) => {
            vm.showForm = data;
            console.log(vm.showForm);
        });


        $rootScope.$on("hideForm", (event, data) => {
            vm.showForm = data;
            console.log(vm.showForm);
            
        });

        // $scope.showForm = false;
        // $scope.toggleForm = () => {
        // $scope.showForm = !$scope.showForm;
        // MainService.toggleForm();
        // MainService.toggleForm();
        // };

        //updates tasks from promise
        function updateDaily(result) {
            vm.dailyTask = result.data;
        };

        function updateWeekly(result) {
            vm.weeklyTask = result.data;
        };

        function updateTodo(result) {
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


        vm.updateTask = (task) => {
            MainService.put(task).then((result) => {
                vm.getAll();
            });
        };


        vm.delete = (id) => {
            MainService.delete(id).then((result) => {
                vm.getAll();
            });

        };

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