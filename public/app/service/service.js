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

    // routes to page
    self.loadList = () => {
        $location.path("/todolist");
    };

    const inventory = [
        {
            id: 0,
            item: "Ball",
            price: 3,
            bought: false,
        },
        {
            id: 1,
            item: "Frisbee",
            price: 2,
            bought: false,
        },
        {
            id: 2,
            item: "Bone",
            price: 8,
            bought: false,
        },
        {
            id: 3,
            item: "Stuffed Dog",
            price: 4,
            bought: false,
        },
        {
            id: 4,
            item: "Stick",
            price: 20,
            bought: false,
        },
        {
            id: 5,
            item: "Treat",
            price: 1,
            bought: false,
        },
    ];
}





angular 
    .module("App")
    .service("MainService", MainService);