"use strict";

function displayDir() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs, $location) {
            console.log($element);
            $element.on("click", () => {
                console.log($element);

                // if ($element[0].classList[0] === "coin-container") {
                //     $element[0].nextSibling.nextElementSibling.classList.toggle("dir-hide");
                // }


                if ($element[0].classList[0] === "coin-container") {
                    $element[0].nextSibling.nextElementSibling.classList.toggle("dir-show");
                    $element[0].nextSibling.nextElementSibling.classList.toggle("dir-hide");
                }
            })
        }
    };
}

angular
    .module("App")
    .directive("displayDir", displayDir);
