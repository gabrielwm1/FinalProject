"use strict";
const home = {
    templateUrl: "app/components/home/home.html",
    // bindings: {
    //     allTasks: "<",
    //     compTasks: "<"
    //   },
    controller: ["MainService", function (MainService) {
        const vm = this;

        vm.allTask = undefined;
        vm.compTasks = undefined;

        //check whether or not we are in intro mode
        vm.showIntro = MainService.getIntroValue();
        //enter application and hide intro
        vm.hideIntro = () => {
            vm.showIntro = false;
            MainService.setIntroValue();
        }

        // Erica is working on this for the module
        // vm.mood = MainService.sendMood();
        // console.log(vm.mood);
        // vm.sadDog = false;
        // updates tasks from promise
        vm.setMood = (comp, all) => {
            vm.mood = comp / all;
            // if (vm.mood < 0.5) {
            //     vm.sadDog = true; 
            // } 
            // console.log(vm.sadDog);          
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