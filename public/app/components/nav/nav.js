"use strict";
const navbar = {
    templateUrl: "app/components/nav/nav.html",
    controller: ["$rootScope","MainService",function($rootScope, MainService){
        const vm = this;
        vm.showForm = true;
        vm.toggleForm = () => {
            vm.showForm = false ;
            $rootScope.$broadcast("toggleForm", vm.showForm);
            console.log(data);
           // MainService.toggleForm();
           // MainService.toggleForm();
        };

        // vm.hideForm = () => {
        //     vm.showForm = !vm.showForm;
        //     $rootScope.$broadcast("toggleForm", vm.showForm);
        //    // MainService.toggleForm();
        //    // MainService.toggleForm();
        // };

        // $rootScope.$on("toggleForm", (event, data) => {
        //     vm.showForm = data;
        // });

        vm.loadEdit = () => {
            MainService.loadEdit();
        }

        vm.loadList = () =>{
            MainService.loadList();
        }



    }]
}

angular
    .module("App")
    .component("navbar", navbar);