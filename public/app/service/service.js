"use strict";
function MainService($rootScope, $http, $location) {
    const self = this;

    //handles form showing and hidding
    self.showForm = true;
    self.getDisplayValue = () => {
        return self.showForm;
    }
    self.setValue = (data) => {
        self.showForm = data;
    };

    // Erica is working on this for the resolve in the module
    // // gets mood on load
    // self.sendMood = () => {
    //     return self.mood;
    // }
    // self.mood = undefined;
    // self.setMood = (comp, all) => {
    //     self.mood = comp / all;
    //     console.log(`
    //                 Completed Tasks: ${all}
    //                 All Tasks: ${comp}  
    //                 Mood: ${self.mood}
    //             `);
    //             console.log(self.mood);

    //     return self.mood;
    // }

    // self.getMoodData = () => {
    //     self.getTasks().then((result) => {
    //         self.allTasks = result.data.length;
    //         return self.allTask;
    //     });

    //     self.getCompletedTasks().then((result) => {
    //         self.compTasks = result.data.length;
    //         return self.compTasks, self.setMood(self.compTasks, self.allTasks);
    //     });
    // };



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
            image: "./app/images/ball.png"
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
        {
            id: 5,
            item: "Fire Hydrant",
            price: 15,
            bought: false,
            image: "./app/images/fire-hydrant.png"  
        },
        {
            id: 6,
            item: "Glasses",
            price: 6,
            bought: false,
            image: "./app/images/sunglasses.png"  
        }


    ];

    self.getCart = () => {
        return self.inventory;
    }
}


angular
    .module("App")
    .service("MainService", MainService);