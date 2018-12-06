"use strict";
const home = {
    templateUrl:"app/components/home/home.html",
    controller:["MainService", function(MainService){
        const vm = this;
        
        //MainService.getTasks();
        vm.getTasks = () =>{
            MainService.getTasks().then((result) => {
                MainService.setAllTasks(result.data.length);
                //vm.taskNumber = result.data.length;
               // console.log(result.data.length);
                //return vm.taskNumber;
            });
        };

        vm.getCompletedTasks = () => {
            MainService.getCompletedTasks().then((result) => {
                // vm.compTaskNumber = result.data.length;
                MainService.setCompTasks(result.data.length);// console.log(result.data.length);
            })


        }
        vm.getMood = () => {
            vm.allTasks = MainService.getRealTasks();
            vm.compTasks = MainService.getRealCompTasks();
            //console.log();
            vm.mood = MainService.getMood(vm.compTasks,vm.allTasks);
            console.log(vm.mood);

            // vm.mood = vm.getCompletedTasks()/vm.getTasks();
            // console.log(vm.mood);
            //console.log(vm.compTaskNumber);
        }
        // vm.test = () =>{
        //     console.log(setMood());
        // }

        vm.getTasks();
        vm.getCompletedTasks();
        vm.getMood();
        //vm.test();
    }]
};

angular
    .module("App")
    .component("home", home);