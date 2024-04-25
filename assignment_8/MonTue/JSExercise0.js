//0.1

const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const namesLongerThanThree = names.filter(name => name.length >= 3);

console.log("All names:");
names.forEach((name) => {
    console.log(`${name}`);
});

console.log("Names longer than 3 characters:");
namesLongerThanThree.forEach(name => console.log(name));

//0.2

console.log("Names in uppercase:");
names.map(name => name.toUpperCase())
    .forEach(name => console.log(name));

//0.3

console.log("HTML list of names:");
const htmlNames = names.map(name => `<li>${name}</li>`).join("");
const ul = `<ul>${htmlNames}</ul>`;
console.log(ul);

//0.4

let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

//0.4.1
const carsNewerThan1999 = cars.filter(car => car.year > 1999);
const VolvoCars = cars.filter(car => car.make === "Volvo");
const carsBelow5000 = cars.filter(car => car.price < 5000);

//0.4.2

console.log("SQL query for Volvo cars:");
const sqlQuery = `INSERT INTO cars (id,year,make,model,price) VALUES (${VolvoCars.map(car => `(${car.id},${car.year},${car.make},${car.model},${car.price})`).join(",")})`;
console.log(sqlQuery);