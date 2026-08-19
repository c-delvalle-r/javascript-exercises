const sumAll = function(num1, num2) {
    // Validate arguments, otherwise return error
    function validInput(input) {
        return Number.isInteger(input) & input >= 0
    }

    if (!validInput(num1) || !validInput(num2)) {
        return 'ERROR';
    }

    // Determine smaller number and bigger number
    let smallerNumber = Math.min(num1, num2);
    let biggerNumber = Math.max(num1, num2);

    // Sum all number in between
    let sum = 0;
    for (let i = smallerNumber; i <= biggerNumber ; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(2,4));

// Do not edit below this line
module.exports = sumAll;
