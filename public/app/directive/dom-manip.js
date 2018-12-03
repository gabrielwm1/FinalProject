"use strict";

function domManip() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {

            // $element.on("click", () => {
            //     if ($element[0].tagName === "I") {
            //         $element[0].offsetParent.offsetParent.classList.add("hide");
            //     }
            // })

            $element.on("click", () => {
                   if ($element[0].tagName === "I") {
                       $element[0].
                   }
                console.log($element);
            })
        }
    };
}

angular
    .module("App")
    .directive("domManip", domManip);
