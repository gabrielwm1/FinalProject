"use strict";

function displayDir() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs, $location, $timeout) {

            $element.on("click", () => {
                if ($element[0].classList[0] === "coin-container") {
                    $element[0].nextSibling.nextElementSibling.classList.toggle("dir-show");
                    $element[0].nextSibling.nextElementSibling.classList.toggle("dir-hide");
                }
            })

            $element.on("click", () => {
                console.log($element);
                
                if($element[0].classList[0] === "fake-radio" && $element[0].children[0].classList[1] === "ng-hide"){
                    $element[0].parentElement.ownerDocument.body.children[0].children[0].children[0].children[1].classList.toggle("hide");

                    setTimeout(function(){
                        $element[0].parentElement.ownerDocument.body.children[0].children[0].children[0].children[1].classList.toggle("hide");
                        console.log("its been 5 seconds");  
                    }, 5000);


                }

            });

            $element.on("click", () => {                
                if($element[0].tagName === "BUTTON"){
                    console.log($element);
                    $element[0].style.backgroundColor = "grey";

                }
            });
        }
    };
}

angular
    .module("App")
    .directive("displayDir", displayDir);
