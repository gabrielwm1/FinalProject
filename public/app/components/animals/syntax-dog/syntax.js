"use strict";
const syntax = {
    templateUrl: "app/components/animals/syntax-dog/syntax.html",
    controller: ["MainService", function (MainService) {
        const vm = this;

        vm.name = MainService.getName();
        // updates tasks from promise
        vm.setMood = (comp, all) => {
            vm.mood = ((comp / all) * 100).toFixed(0);
            vm.barPercent = vm.mood + '%';
            console.log(`
                        All Tasks: ${all}
                        Completed Tasks: ${comp}  
                        Mood: ${vm.mood}
                    `);
            return vm.mood, vm.barPercent;
        };
        // calls data on load
        MainService.getTasks().then((result) => {
            vm.allTasks = result.data.length;
            MainService.getCompletedTasks().then((result) => {
                vm.compTasks = result.data.length;
                vm.setMood(vm.compTasks, vm.allTasks);
            });
        });
    }]
}

angular
    .module("App")
    .component("syntax", syntax);