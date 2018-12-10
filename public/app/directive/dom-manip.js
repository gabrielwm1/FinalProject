"use strict";

function displayDir() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs, $location) {

            // shows or hides inventory
            $element.on("click", () => {
                if ($element[0].classList[0] === "coin-container") {
                    $element[0].nextSibling.nextElementSibling.classList.toggle("dir-show");
                    $element[0].nextSibling.nextElementSibling.classList.toggle("dir-hide");
                }
            })

            // shows adding money on todo completion of todo, adds hide class after animation (5 seconds)
            $element.on("click", () => {                
                if($element[0].classList[0] === "fake-radio" && $element[0].children[0].classList[1] === "ng-hide"){
                    $element[0].parentElement.ownerDocument.body.children[0].children[0].children[0].children[1].classList.toggle("hide");

                    setTimeout(function(){
                        $element[0].parentElement.ownerDocument.body.children[0].children[0].children[0].children[1].classList.toggle("hide");
                        console.log("its been 5 seconds");  
                    }, 5000);
                }
            });

            // greys out selection on form on click
            $element.on("click", () => {                
                if($element[0].tagName === "BUTTON"){
                    $element[0].style.backgroundColor = "grey";
                }
            });

            // displays dog speech of not enough money when currency is less than item price, removes after 5 seconds
            $element.on("click", () => {                
                if($element[0].classList[0] === "inventory-item" && $element[0].classList[2] === "not-enough"){
                    console.log($element);
                    $element[0].parentElement.parentElement.ownerDocument.body.firstElementChild.children[0].children[3].children[0].children[1].classList.toggle("hide");

                    setTimeout(function(){
                        $element[0].parentElement.parentElement.ownerDocument.body.firstElementChild.children[0].children[3].children[0].children[1].classList.toggle("hide");
                        console.log("its been 5 seconds");  
                    }, 5000);
                }
            });
        }
    };
}

angular
    .module("App")
    .directive("displayDir", displayDir);
