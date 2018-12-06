"use strict";
const home = {
    templateUrl:"app/components/home/home.html",
    controller:["MainService", function(MainService){
        const vm = this;
        
        //MainService.getTasks();
        
        //getter function, gets all tasks, and then stores the number of tasks inside our service
        vm.getTasks = () =>{
            MainService.getTasks().then((result) => {
                MainService.setAllTasks(result.data.length);
            });
        };
        //getter function, gets completed tasks and stores the number of completed tasks inside our service

        vm.getCompletedTasks = () => {
            MainService.getCompletedTasks().then((result) => {
                MainService.setCompTasks(result.data.length);
            })
        }
        //getter function, retrieves values that are stored in the service, and asks service what our mood is depending on these two values. 
        vm.getMood = () => {
            vm.allTasks = MainService.getRealTasks();
            vm.compTasks = MainService.getRealCompTasks();
            vm.mood = MainService.setMood(vm.compTasks,vm.allTasks);
            console.log(vm.mood);
        }

        vm.getTasks();
        vm.getCompletedTasks();
        vm.getMood();
        
    }]
};

angular
    .module("App")
    .component("home", home);