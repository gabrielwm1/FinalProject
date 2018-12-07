"use strict";
function MainService($rootScope, $http, $location) {
    const self = this;
    
    //handles form showing and hidding
    self.showForm = true;
    self.getDisplayValue =() =>{
        return self.showForm;
    }
    self.setValue = (data) => {
       self.showForm = data;
    };
    // return{
    //     getMessage: function(){
    //         return $q.when("Hellow world!")
    //     }
    // } 

    // currency
    self.currency = 0;
    //return our currency to date
    self.getNumber = () => {
        return self.currency;
    }
    //updates the value of our currency based on completed tasks
    self.updateCurrency = (value) => {
        if (value === true) {
            self.currency++;
        } else if (value === false) {
            self.currency--;
        } else {
            console.log("error");
        }
    }
    // updates currency after buying items
    self.buyItems = (value) => {
        if(value >= 0){
            self.currency -= value;
        };        
    }

    // all get requests
    self.getTasks = () => {
        return $http({
            url: "/tasks",
            method: "GET",
        })
    };

    //get all completed
    self.getCompletedTasks = () => {
        return $http({
            url: "/tasks/completed",
            method: "GET",
        })
    }


    self.getDaily = () => {
        return $http({
            url: "/tasks/daily",
            method: "GET",
        });
    };
    self.getWeekly = () => {
        return $http({
            url: "/tasks/weekly",
            method: "GET",
        });
    };
    self.getTodo = () => {
        return $http({
            url: "/tasks/todo",
            method: "GET",
        });
    };

    // new todo post
    self.postTodo = (newTask) => {
        return $http({
            url: "/tasks",
            method: "POST",
            data: newTask
        });
    };

    // deletes by id
    self.delete = (id) => {
        return $http({
            url: `/tasks/${id}`,
            method: "DELETE",
        });
    };

    // edits by id
    self.put = (updatedTask) => {
        return $http({
            url: `/tasks/${updatedTask.id}`,
            method: "PUT",
            data: updatedTask
        });
    };

    // routes to page
    self.loadList = () => {
        $location.path("/todolist");
    };

    self.inventory = [
        {
            id: 0,
            item: "Teddy Bear",
            price: 3,
            bought: false,
            image: "./app/images/teddybear.png"
        },
        {
            id: 1,
            item: "Treat",
            price: 2,
            bought: false,
            image: "./app/images/treat.png"
        },
        {
            id: 2,
            item: "Ball",
            price: 8,
            bought: false,
            image:"./app/images/ball.png"
        },
        {
            id: 3,
            item: "Bowl",
            price: 4,
            bought: false,
            image: "./app/images/dogbowl.png"
        },
        {
            id: 4,
            item: "Toy",
            price: 20,
            bought: false,
            image: "./app/images/toy.png"
        },
        
    ];

    self.getCart = () => {
        return self.inventory;
    }
}


angular
    .module("App")
    .service("MainService", MainService);