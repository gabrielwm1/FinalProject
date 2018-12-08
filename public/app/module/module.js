angular
    .module("App", ["ngRoute", "ngAnimate"])

    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/home", {
                template: "<home></home>", // "<home alltasks='$resolve.data' comptasks='$resolve.data'></home>",
                // Erica is working on this
                // resolve: {
                //     // allTasks: function ($http) {
                //     //     $http({
                //     //         url: "/tasks",
                //     //         method: "GET",
                //     //     });
                //     // },
                //     // compTasks: function ($http) {
                //     //     return $http({
                //     //         url: "/tasks/completed",
                //     //         method: "GET",
                //     //     })
                //     // }
                //     mood: function (MainService) {
                //         return MainService.getMoodData();
                //     }
                // }
            })
            .when("/todolist", {
                template: "<todolist></todolist>",
            })
            .when("/submit", {
                template: "<submit></submit>"
            })
            .otherwise({ redirectTo: "/home" })
    }])