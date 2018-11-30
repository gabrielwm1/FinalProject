"use strict";
const navbar = {
    templateUrl: "app/components/nav/nav.html",
    controller: ["MainService",function(MainService){
        const vm = this;

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