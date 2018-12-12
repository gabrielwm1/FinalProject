"use strict"
const intro = {
    
    template: `<form>
    <div class="intro-container">
    <img class="intro-logo" src="app/images/planimal.svg">
    <p class="intro-label">Hi Hooman!!! I am here to help you get your tasks completed. The more you complete, the happier I am!  mofffmoff moff mof mof</p>
    <h2 class="name-pet">Name your pet: </h2>
    <input class="intro-input" type="text" placeholder="Your pet's name" ng-model= "$ctrl.pet.name">
    <button class="intro-button" ng-click="$ctrl.closeAndRefresh(); $ctrl.hideIntro(); $ctrl.setName($ctrl.pet)">Lets Play!</button>
    </div>
    </form>
   
`,
    //hide intro variable communicating to home
    bindings: {
        hideIntro: "&",
    },

    controller: ["MainService", "$route", function( MainService, $route){
        const vm = this; 
        vm.showIntro = true;
        vm.pet = {
            name: "",
        }
        vm.closeAndRefresh = () => {
            $route.reload();
        }
        vm.hideIntro = () => {
            MainService.setIntroValue(false);
            console.log("test");
        }
        vm.setName = (pet) => {
            MainService.setName(pet.name);
            console.log(pet.name);
        }
    }]

}

angular
    .module("App")
    .component("intro", intro);