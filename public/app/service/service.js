"use strict";
function MainService($rootScope, $http, $location) {
    const self = this;

    //handles form showing and hidding
    self.showForm = true;
    
    //returns value so that we hide the intro modal
    self.setIntroValue = () =>{
        self.introValue = false;
    }

    //sends value for intro modal
    self.getIntroValue = () => {
        return self.introValue;;
    }

    //hides and show form
    self.getDisplayValue = () => {
        return self.showForm;
    }

    //sets data to false or true to hide/show the form page
    self.setValue = (data) => {
        self.showForm = data;
    };

    // currency
    self.currency = 0;
    //return our currency to date
    self.getNumber = () => {
        return self.currency;
    }

    //updates the value of our currency based on completed tasks
    self.updateCurrency = (task) => {
        if (task.completed === true) {
            self.currency += task.importance;
        } else if (self.currency <= 0) {
            return self.currency;
        } else if (task.completed === false) {
            self.currency -= task.importance;
        } else {
            console.log("error");
        }
    }

    // updates currency after buying items
    self.buyItems = (value) => {
        if (value >= 0) {
            self.currency -= value;
        };
    }

    // all get requests
    self.getTasks = () => {
        return $http({
            url: "/tasks",
            method: "GET",
        });
    };

    //get all completed
    self.getCompletedTasks = () => {
        return $http({
            url: "/tasks/completed",
            method: "GET",
        });
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
    // self.worth = 0; 
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
            image: "./app/images/teddybear.svg"
        },
        {
            id: 1,
            item: "Treat",
            price: 2,
            bought: false,
            image: "./app/images/treat.svg"
        },
        {
            id: 2,
            item: "Ball",
            price: 8,
            bought: false,
            image: "./app/images/ball.svg"
        },
        {
            id: 3,
            item: "Bowl",
            price: 4,
            bought: false,
            image: "./app/images/dogbowl.svg"
        },
        {
            id: 4,
            item: "Fire Hydrant",
            price: 15,
            bought: false,
            image: "./app/images/fire-hydrant.svg"  
        }
    ];

    self.getCart = () => {
        return self.inventory;
    }
}


angular
    .module("App")
    .service("MainService", MainService);