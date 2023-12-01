const {trainees}= require("../db/backend.js");

// function that add new trainee

const add=(newTrainee)=>{
    newTrainee.id = trainees.length+1;
    trainees.push(newTrainee);

    console.log("\n New trainee added/n");
    console.log(trainees);
}


// function that display all trainee

const displayAll=()=>{
    console.log("\n All trainee/n");
    console.log(trainees);
}

module.exports={
    add,
    displayAll,
}