"use strict";
const teddyBear = {
    templateUrl: "app/component/toys/teddybear/teddybear.html",
    controller: [function(){
        const vm = this;

    }]
};



angular 
    .module("App")
    .component("teddyBear", teddyBear);