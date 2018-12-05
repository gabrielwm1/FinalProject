"use strict";

const shopping ={
    templateUrl: "app/components/shopping/shopping.html",
    controller: ["MainService", function(MainService){
        const vm = this;

        //creating a function call to the service to update number
        vm.currency = MainService.getNumber();
        
        

    }]



}

angular 
    .module("App")
    .component("shopping", shopping);