"use strict";

const shopping ={
    templateUrl: "app/components/shopping/shopping.html",
    controller: ["MainService", function(MainService){
        const vm = this;

        //creating a function call to the service to update number
        vm.currency = MainService.getNumber();
        vm.inventory = MainService.getCart();
        vm.getCart = () => {
            MainService.getCart()
            console.log(vm.inventory)
        }
        vm.buyItems = (id) => {
            // if (MainService.inventory[id].bought === false){
            //     MainService.inventory[id].bought === true;
            // }else{
            //     MainService.inventory[id].bought === true;
            // }
            
            // MainService.inventory[id].bought = !MainService.inventory[id].bought;
           
            MainService.inventory[id].bought = true;
            vm.getCart();
            console.log("clicked")
        }
    }]

}

angular 
    .module("App")
    .component("shopping", shopping);