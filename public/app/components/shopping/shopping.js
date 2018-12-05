"use strict";

const shopping ={
    templateUrl: "app/components/shopping/shopping.html",
    controller: ["MainService", function(MainService){
        const vm = this;

        //creating a function call to the service to update number
        vm.currency = MainService.getNumber();
        
        // calls inventory obj
        vm.inventory = MainService.getCart();
        vm.getCart = () => {
            MainService.getCart()
            console.log(vm.inventory)
        }

        // shows bought item
        vm.buyItems = (id) => {           
            MainService.inventory[id].bought = true;
            vm.getCart();
        }
    }]

}

angular 
    .module("App")
    .component("shopping", shopping);