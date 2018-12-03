angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/home", {
            template: "<home></home>"
        })
        .when("/todolist", {
            template: "<todolist></todolist>"
        })
        .when("/submit", {
            template: "<submit></submit>"
        })
        .otherwise({redirectTo:"/home"})
    }])