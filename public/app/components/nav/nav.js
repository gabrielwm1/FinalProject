"use strict";
const navbar = {
    templateUrl: "app/components/nav/nav.html",
    controller: ["$rootScope","MainService", "$location", function($rootScope, MainService, $location){
        const vm = this;
        //vm.showForm = false;
        // vm.loadForm = () => {
            
        //    // MainService.toggleForm();
        //    // MainService.toggleForm();
        // };
        // vm.hideForm = () => {
            
        //     console.log(vm.showForm);
        // }

        // vm.hideForm = () => {
        //     vm.showForm = !vm.showForm;
        //     $rootScope.$broadcast("toggleForm", vm.showForm);
        //    // MainService.toggleForm();
        //    // MainService.toggleForm();
        // };

        // $rootScope.$on("toggleForm", (event, data) => {
        //     vm.showForm = data;
        // });

        vm.loadForm = () => {
            vm.showForm = true;
            //MainService.loadEdit();
            $rootScope.$broadcast("loadForm", vm.showForm);
            $location.path("/todolist");

            //console.log(vm.showForm);
            
        }

        vm.hideForm = () =>{
            vm.showForm= false;
           // MainService.loadList();
            $rootScope.$broadcast("hideForm", vm.showForm);
            $location.path("/todolist");

            
        }



    }]
}

angular
    .module("App")
    .component("navbar", navbar);