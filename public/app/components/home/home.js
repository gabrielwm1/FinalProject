"use strict";
const home = {
    templateUrl: "app/components/home/home.html",

    controller: ["MainService", function (MainService) {
        const vm = this;

        //check whether or not we are in intro mode
        vm.showIntro = MainService.getIntroValue();

        //enter application and hide intro
        vm.hideIntro = () => {
            vm.showIntro = false;
            MainService.setIntroValue();
        }

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
};

angular
    .module("App")
    .component("home", home);