// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const t1 = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];
// const t2 = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // value: Number(prompt("Degress celsius:")),
//     value: 10,
//   };

//   console.table(measurement);

//   console.log(measurement.value);
//   console.warn(measurement.value);
//   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

const DATA1 = [17, 21, 23];
const DATA2 = [12, 5, -5, 0, 4];
const DATA = DATA1.concat(DATA2);

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let day = i;
//     let string = `... ${arr[0]}℃ in ${day[0]} days ... ${arr[1]}℃ in ${day[1]} days ... ${arr[2]}℃ in ${day[2]} days `;
//     console.log(string);
//   }
// };

// const DATA = DATA1.concat(DATA2);
// printForecast(DATA);

const printForecast = function (arr) {
  let str = "";
  let day = "";
  for (let i = 0; i < arr.length; i++) {
    day = day + i + "1";
    str = str + `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log("... " + str);
};

printForecast(DATA);
