"use strict";

const shopping = {
    templateUrl: "app/components/shopping/shopping.html",
    controller: ["MainService", function (MainService) {
        const vm = this;

        //creating a function call to the service to update number
        vm.currency = MainService.getNumber();

        // calls inventory obj
        vm.inventory = MainService.getCart();

        vm.getCart = () => {
            MainService.getCart()
        }

        // shows bought item
        vm.buyItems = (id, obj) => {
            if (vm.currency >= obj.price) {
                console.log("you have enough money");
                MainService.buyItems(obj.price);
                MainService.inventory[id].bought = true;
                vm.getCart();
            } else {
                console.log("You need more money");
            }
            return vm.currency = MainService.getNumber();
        }
    }]

}

angular
    .module("App")
    .component("shopping", shopping);