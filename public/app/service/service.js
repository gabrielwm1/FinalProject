"use strict";
function MainService($http, $location){
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

    self.postTodo = (newTask) => {
        return $http({
            url:"/tasks",
            method:"POST",
            data: newTask
        });
    };

    self.delete = (id) => {
        return $http({
            url:`/tasks/${id}`,
            method:"DELETE",
        });
    };

    self.put = (updatedTask) => {
        return $http({
            url:`/tasks/${updatedTask.id}`,
            method:"PUT",
            data: updatedTask
        });
    };

    // self.loadEdit = () => {
    //     $location.path("/todolist");
    //   };

    // self.loadList = () => {
    //   $location.path("/todolist");
    //  };


    

}





angular 
    .module("App")
    .service("MainService", MainService);