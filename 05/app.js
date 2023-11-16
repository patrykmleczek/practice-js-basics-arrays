const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbersFilter = numbers.filter(function (element) {
    return element % 2 === 0
});

console.log('filter =>', evenNumbersFilter);

const evenNumbersReduce = evenNumbersFilter.reduce(function (acc, currVal) {
    return acc + currVal;
}, 0);

console.log('reduce =>', evenNumbersReduce);

