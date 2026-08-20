const leapYears = function(yearNumber) {
    if (yearNumber % 100 === 0 && yearNumber % 400 === 0) {
        return true;
    } else if (yearNumber % 100 !== 0 && yearNumber % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
