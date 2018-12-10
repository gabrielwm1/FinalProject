"use strict";
const syntax = {
    templateUrl: "app/components/animals/syntax-dog/syntax.html",
    controller: ["MainService", function (MainService) {
        const vm = this;

        vm.mood = undefined;

        // updates tasks from promise
        vm.setMood = (comp, all) => {
            vm.mood = (comp / all).toFixed(2) * 100;
            vm.barPercent = vm.mood + '%';
            console.log(`
                        All Tasks: ${all}
                        Completed Tasks: ${comp}  
                        Mood: ${vm.mood}
                    `);
            return vm.mood, vm.barPercent;
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
}

angular
    .module("App")
    .component("syntax", syntax);