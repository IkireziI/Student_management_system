const { add, displayAll } = require("../controller/backend-trainee.js");

// added new trainee

const newTrainee = {
    firstName: "Bill",
    lastName: "SENYAMWUZUZA",
    age: 25,
    email: "bill@gmail.com",
};

add(newTrainee);
displayAll;
