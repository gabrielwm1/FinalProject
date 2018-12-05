"use strict";
const home = {
    templateUrl:"app/components/home/home.html",
    component:["MainService", function(MainService){
        const vm = this;
    }]
};

angular
    .module("App")
    .component("home", home);