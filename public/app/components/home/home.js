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

    }]
};

angular
    .module("App")
    .component("home", home);