"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:inspector/promises");
//task1 pt1
console.log("Task 1 pt1");
let nums1 = [5, 10, 12, 19, 26, 34, 78];
let nums2 = [10, 12, 19, 26, 34, 78];
function getMedian(s) {
    let res;
    s.sort();
    if (s.length % 2 != 0) {
        res = s[Math.floor(s.length / 2 - 1)];
    }
    else {
        res = (s[Math.floor(s.length / 2)] + s[Math.floor(s.length / 2 - 1)]) / 2;
    }
    return res;
}
console.log(getMedian(nums1));
console.log("");
//task1 pt2
console.log("Task 1 pt2");
let nums3 = [[1, 0, 3, 4],
    [1, 2, 0, 0],
    [1, 2, 3, 4]];
function getNonZeros(s, row) {
    let counter = 0;
    if ((row - 1 < 0) || (row > s.length)) {
        console.log("������ �����");
    }
    else {
        for (let i of s[row - 1]) {
            if (i != 0) {
                counter += 1;
            }
        }
    }
    return counter;
}
console.log(getNonZeros(nums3, 3));
console.log("");
//task2
console.log("Task 2");
let t = [29, "This is a String", 40];
function multiply(t1) {
    return t1[0] * t[2];
}
console.log(multiply(t));
console.log("");
//task3
console.log("Task 3");
var Vitamins;
(function (Vitamins) {
    Vitamins["A"] = "retinol";
    Vitamins["B1"] = "thiamine";
    Vitamins["C"] = "ascorbic acid";
    Vitamins["D"] = "calciferol";
})(Vitamins || (Vitamins = {}));
;
console.log(Vitamins.D);
console.log("");
//task4
console.log("Task 4");
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log("Name: " + pet.name);
    console.log("Age: " + pet.age);
    console.log("Sound type: " + pet.speak());
}
let animal1 = new Cat();
let animal2 = new Dog();
printPetInfo(animal1);
printPetInfo(animal2);
console.log("");
//task5
console.log("Task 5");
const vitaminC = {
    VitaminType: Vitamins.C,
    dosage: 75,
    sources: ["lime", "lemon", "broccoli"],
};
const x = JSON.stringify(vitaminC);
console.log(x);
console.log("");
(0, promises_1.waitForDebugger)();
//# sourceMappingURL=app.js.map