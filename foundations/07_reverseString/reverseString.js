const reverseString = function(string) {
    characters = string.split('');
    charactersReversed = [];
    for (let i = 1 ; i<=characters.length; i++) {
        charactersReversed.push(characters.at(-i));
    }
    return charactersReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
