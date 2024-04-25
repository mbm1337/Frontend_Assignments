//1.1.1
let names = ["Lars", "Peter", "Jan", "Bo"];

//1.1.2
function myFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let namesLongerThanThree = myFilter(names, name => name.length >= 3);
console.log("Names with 3 or more characters:");
namesLongerThanThree.forEach(name => console.log(name));

//1.1.3

function myMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

let namesInUppercase = myMap(names, name => name.toUpperCase());
console.log("Names in uppercase:");
namesInUppercase.forEach(name => console.log(name));

//1.2
Array.prototype.myFilter = function (callback) {return this.filter(a => callback (a));};
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i])) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

Array.prototype.myMap = function (callback) {return this.map(a => callback (a));};
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i]));
//     }
//     return result;
// }

let namesLongerThanThree2 = names.myFilter(function (name) {return name.length >= 3;});
console.log("Names with 3 or more characters:");
console.log(namesLongerThanThree2);

let namesInUppercase2 = names.myMap(function (name) {return name.toUpperCase();});
console.log("Names in uppercase:");
console.log(namesInUppercase2);


//1.3
//See ex1-3.html

//1.4
//See ex1-4.html

//1.5
//See ex1-5.html

//1.6
//See ex1-6.html








