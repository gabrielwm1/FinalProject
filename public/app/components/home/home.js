"use strict";
const home = {
    templateUrl:"app/components/home/home.html",
    controller:["MainService", function(MainService){
        const vm = this;
        vm.taskNumber;
        vm.compTaskNumber;
        vm.mood;
        //MainService.getTasks();
        vm.getTasks = () =>{
            MainService.getTasks().then((result) => {
                vm.taskNumber = result.data.length;
               // console.log(result.data.length);
                return vm.taskNumber;
            });
        };

        vm.getCompletedTasks = () => {
            MainService.getCompletedTasks().then((result) => {
                vm.compTaskNumber = result.data.length;
               // console.log(result.data.length);
                return vm.compTaskNumber;
            })


        }
        vm.getMood = () =>{
            vm.mood = vm.getCompletedTasks()/vm.getTasks();
            console.log(vm.mood);
            //console.log(vm.compTaskNumber);
        }
        

        // vm.getTasks();
        // vm.getCompletedTasks();
        vm.getMood();
    
    

    }]
};

angular
    .module("App")
    .component("home", home);