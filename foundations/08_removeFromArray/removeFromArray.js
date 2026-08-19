const removeFromArray = function(arr) {
// Usar splice
    let itemsToDelete = Array.from(arguments);
    itemsToDelete.shift();

    for (item of itemsToDelete) {
        let index = arr.indexOf(item);

        // if (index === -1) {
        //     continue;
        // } else {
        //     arr.splice(index, 1)
        // }

        while (index !== -1) {
            // console.log(index);
            arr.splice(index, 1);
            index = arr.indexOf(item);
        }
    }

    return arr;
    // Iterar sobre cada argumento excepto arr)
    // Encontrar el indice donde haya un match
    // Si el resultado es undefined, no hay match
    // Usar splice index, 1 para eliminar
};

console.log(removeFromArray([1,2,2,3], 2))

// Do not edit below this line
module.exports = removeFromArray;
