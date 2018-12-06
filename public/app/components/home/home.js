"use strict";
const home = {
    templateUrl: "app/components/home/home.html",
    controller: ["MainService", function (MainService) {
        const vm = this;
        vm.allTask = undefined;
        vm.compTasks = undefined;

        // updates tasks from promise
        vm.setMood = (comp, all) => {
            vm.mood = comp / all;
            console.log(`
Completed Tasks: ${all}
All Tasks: ${comp} 
Mood: ${vm.mood}
            `);            
            return vm.mood;
        }

        // gets all tasks and uncompleted tasks on load
        vm.getMoodData = () => {
            MainService.getTasks().then((result) => {
                vm.allTasks = result.data.length;
                return vm.allTask;
            });
          
            MainService.getCompletedTasks().then((result) => {
                vm.compTasks = result.data.length;
                return vm.compTasks, vm.setMood(vm.compTasks, vm.allTasks);
            });;
        };
        vm.getMoodData();
    }]
};

angular
    .module("App")
    .component("home", home);