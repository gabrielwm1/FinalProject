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

            $element.on("click", () => {
                console.log($element[0].parentElement.ownerDocument.body.children[0].children[0].children[0].children[1].classList);
                console.log($element);
                if($element[0].classList[0] === "fake-radio"){
                    console.log("Hey");
                    $element[0].parentElement.ownerDocument.body.children[0].children[0].children[0].children[1].classList.toggle("hide");
                }
            });
        }
    };
}

angular
    .module("App")
    .directive("displayDir", displayDir);
