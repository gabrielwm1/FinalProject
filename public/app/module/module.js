angular
    .module("App", ["ngRoute", "ngAnimate"])
    
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/home", {
            template: "<home></home>"
        })
        .when("/todolist", {
            template: "<todolist></todolist>",
            resolve: {
                message: function(getMoodData){
                    return messageService.getMoodData();
            }
        }
        })
        .when("/submit", {
            template: "<submit></submit>"
        })
        .otherwise({redirectTo:"/home"})
    }])