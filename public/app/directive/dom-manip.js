"use strict";

function displayDir() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs, $location) {

            $element.on("click", () => {
                if ($element[0].classList[0] === "coin-container") {
                    $element[0].nextSibling.nextElementSibling.classList.toggle("dir-show");
                    $element[0].nextSibling.nextElementSibling.classList.toggle("dir-hide");
                }
            })

            // Karissa is working on this
            $element.on("click", () => {
                if($element[0].classList[0] === "fake-radio"){
                    console.log("hey");
                    
                    $element[0].parentElement.ownerDocument.body.children[0].children[0].children[0].children[1].classList.toggle("hide");
                }
            });
        }
    };
}

angular
    .module("App")
    .directive("displayDir", displayDir);
