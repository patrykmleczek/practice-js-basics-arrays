const years = [1980, 1934, 2002, 2019];
const yearNow = 2023;
const yearsPast = years.map(howLong);

console.log(yearsPast);

function howLong(element) {
    return (element -= yearNow) * (-1);
}