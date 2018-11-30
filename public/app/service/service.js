"use strict";
function MainService($http){
    const self = this;

    self.getDaily = () => {
        return $http({
            url:"/tasks/daily",
            method: "GET",
        });
    };

    self.getWeekly = () => {
        return $http({
            url:"/tasks/weekly",
            method: "GET",
        });
    };
 
    self.getTodo = () => {
        return $http({
            url:"/tasks/todo",
            method: "GET",
        });
    };

    self.post = (newTask) => {
        return $http({
            url:"/tasks",
            method:"POST",
            data: newTask
        });
    };

    self.delete = (id) => {
        return $http({
            url:`/task/${id}`,
            method:"DELETE",
        });
    };

    self.put = (updatedTask) => {
        return $http({
            url:`/task/${updatedTask.id}`,
            method:"UPDATE",
            data: updatedTask
        });
    };


}





angular 
    .module("App")
    .service("MainService", MainService);