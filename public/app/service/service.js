"use strict";
function MainService($http, $location) {
    const self = this;

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
        self.currency -= value;
        console.log(self.currency);
        
    }

    // all get requests
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
            price: 1,
            bought: false,
        },
        {
            id: 5,
            item: "Treat",
            price: 1,
            bought: false,
        },
    ];

    self.getCart = () => {
        return self.inventory;
    }
}

angular
    .module("App")
    .service("MainService", MainService);