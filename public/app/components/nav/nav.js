"use strict";
const navbar = {
    templateUrl: "app/components/nav/nav.html",
    controller: ["$rootScope","MainService",function($rootScope, MainService){
        const vm = this;

        // broadcast to toggle form boolean
        vm.showForm = () => {
            $rootScope.$broadcast("hideForm", true);
            MainService.loadList();
        };
        vm.hideForm = () => {
            $rootScope.$broadcast("hideForm", false);
            MainService.loadList();
        };
    }]
}

angular
    .module("App")
    .component("navbar", navbar);