"use strict";
const syntax = {
    templateUrl: "app/components/animals/syntax-dog/syntax.html",
    controller: ["MainService", function(MainService){
        const vm = this;

    }]
}

angular
    .module("App")
    .component("syntax", syntax);