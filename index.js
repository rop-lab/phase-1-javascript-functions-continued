function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
// call the function with or without an activity parameter
const defaultActivity = saturdayFun();
const specifiedActivity = saturdayFun("go swimming");

console.log(defaultActivity); // Output: This Saturday, I want to roller-skate!
console.log(specifiedActivity); // Output: This Saturday, I want to go swimming!

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

module.exports = { mondayWork }; // Export the function to make it accessible outside this file if using Node.js

function wrapAdjective(flair = "*") {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

module.exports = { wrapAdjective }; // Export the function to make it accessible outside this file if using Node.js

