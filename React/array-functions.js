const users = [
    { name: "Kutluhan", age: 25 },
    { name: "Ali", age: 21 },
    { name: "Fatma", age: 18 },
    { name: "Zeynep", age: 15 }
];

/*
    push
    map
    find
    filter
    some
    every
    includes
*/

//push
// users.push("Kadir");
// console.log(users);
// users.push("Ayça");
// console.log(users);

//map
// users.map((item) => {
//     console.log(item.name);
// });

//find
// const result = users.find((item) => (item.name === "Kutluhan" && item.age > 20));
// console.log(result);

//filter
// const filtered = users.filter((item) => item.name === "Kutluhan");
// console.log (filtered);

//some
// const some = users.some((item) => item.name === "xyz");
// console.log(some)

//every
// const every = users.every((item) => item.age > 5);
// console.log(every);

//includes
const meyveler = ["elma", "armut", "muz", "kivi"];

const isIncluded = meyveler.includes("kivi")
console.log(isIncluded);