// document.title = "Learning advanced js stuff";
// document.getElementById("app").innerHTML = `
//1.Nullish coalescing -- ??
// function calculateTax(amount, taxes, description) {
//   taxes = taxes ?? 0.05; //for null & undefined
//   description = description ?? "Default one";
//   const calculatedPrice = amount * (1 + taxes);
//   console.log(
//     `${description} with tax ${taxes} is amount ${
//       !isNaN(calculatedPrice) ? calculatedPrice : 0
//     }`
//   );
// }
// calculateTax(100, 0, "");

//2.Styling console logs
// console.log(`%cI am %cgreen `, "font-weight:bold;color:red;", "color:green;");
// 3. in key word
// const game = {
//   name: "COD:MW2",
//   rating: "300"
// };

// if ("ratings" in game) {
//   console.log("Has the property baby.");
// } else {
//   console.log("Absolutely not");
// }
//4. template literal functions

// const customString = (strings, ...values) => {
//   // console.log(values);
//   return values.reduce(
//     (finalString, nextValue, index) =>
//       `${finalString}${nextValue}${strings[index + 1]}`,
//     strings[0]
//   );
// };
// console.log(
//   customString`Hi my name is ${"Tatheer"} and I love ${`weightlifting`}`
// );
// 5.Generator Function
// function* generatorFunc() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const generator = generatorFunc();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// function* idGenerator() {
//   let id = 1;
//   while (id <= 5) {
//     yield id;
//     id++;
//   }
// }
// const ids = idGenerator();
// for (let i = 0; i <= 5; i++) {
//   console.log(ids.next());
// }

//6. map
// const PAKISTAN = { name: "Pakistan" };
// const USA = { name: "United States" };
// const currencyMapper = new Map([
//   // ["United States", "USD"],
//   // ["Rupees", "Pakistan"]
// ]);
// //setting
// currencyMapper.set(USA, "USD");
// currencyMapper.set(PAKISTAN, "Rupee");
// //getting
// // console.log(currencyMapper.get(USA));
// // console.log(currencyMapper.get(PAKISTAN));
// currencyMapper.forEach((c, i) => {
//   console.log(`${JSON.stringify(i)} has CURRENCY ${c}`);
// });
// 7.Sets
// const numbers = [1, 2, 3, 4, 5, 100, 1, 1];
// const uniqueNumbers = new Set(numbers);
// // console.log([...uniqueNumbers]);
// console.log(uniqueNumbers.has(1));
// uniqueNumbers.delete(1);
// console.log("After deletion");
// console.log(...uniqueNumbers);
// 8. Binary Math
// console.log(Math.floor(0.1 + 0.2));
// 9.Debuggint tips
// const array = [
//   { name: "John", hobby: ["coding", "Weight lifitng"] },
//   { name: "Doe", hobby: ["coding"] },
//   { name: "Mr.T", hobby: ["Weight lifitng"] },
// ];
// console.table(array);
// debugger;
// console.log("error");
// const x = 45;
// console.assert(x === 1, "X should be one");

// const array = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   [1, 2, 3],
//   [4, 5, 6],
//   [4, 5, [6, 78, 8, [89, 68]]],
// ];
// console.log(array.flat(2));
// const stars = ["*", "**", "***", "****"];
// for (let i = 0; i < stars.length; i++) {
//   console.log(stars[i]);
// }

// const object = {
//   name: "Hola",
//   gender: "Male",
//   hobbies: ["Cricket", "Basket ball"],
// };
// console.log(Object.entries(object).map(([key, val]) => `${key}:${val}`));
// const arr = [1, 2, 3, 4];
// console.log(Object.entries(arr).map(([key, val]) => `${key}:${val}`));
