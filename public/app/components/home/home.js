"use strict";
const home = {
    templateUrl:"app/components/home/home.html",
    controller:["MainService", function(MainService){
        const vm = this;
        
        //getter function, retrieves values from a promise and sends them to the service. Then, we ask the service what our mood is depending on these two values. 
        vm.getMood = () => {
            MainService.getTasks().then((result) => {
                MainService.setAllTasks(result.data.length);
            });
            MainService.getCompletedTasks().then((result) => {
                MainService.setCompTasks(result.data.length);
            })
            vm.allTasks = MainService.getRealTasks();
            vm.compTasks = MainService.getRealCompTasks();
            vm.mood = MainService.setMood(vm.compTasks,vm.allTasks);
            console.log(vm.mood);
        }
        vm.getMood();

    }]
};

angular
    .module("App")
    .component("home", home);