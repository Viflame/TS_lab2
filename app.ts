import { waitForDebugger } from "node:inspector/promises";


//task1 pt1
console.log("Task 1 pt1");
let nums1: number[] = [5, 10, 12, 19, 26, 34, 78];
let nums2: number[] = [10, 12, 19, 26, 34, 78];
function getMedian(s: number[]) {
    let res;
    s.sort();
    if (s.length % 2 != 0) {
        res = s[Math.floor(s.length / 2 - 1)]
    }
    else {
        res = (s[Math.floor(s.length / 2)] + s[Math.floor(s.length / 2 - 1)]) / 2
    }
    return res;
}
console.log(getMedian(nums1));
console.log("");




//task1 pt2
console.log("Task 1 pt2");
let nums3: number[][] = [[1, 0, 3, 4],
                        [1, 2, 0, 0],
                        [1, 2, 3, 4]];
function getNonZeros(s: number[][], row: number) {
    let counter: number = 0;
    if ((row - 1 < 0) || (row > s.length)) {
        console.log("Ошибка ввода")
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
console.log(getNonZeros(nums3, 3))
console.log("");




//task2
console.log("Task 2");
let t: [number, string, number] = [29, "This is a String", 40]
function multiply(t1: [number, string, number]) {
    return t1[0] * t[2];
}
console.log(multiply(t));
console.log("");




//task3
console.log("Task 3");
enum Vitamins { A = "retinol", B1 = "thiamine", C = "ascorbic acid", D = "calciferol" };
console.log(Vitamins.D);
console.log("");




//task4
console.log("Task 4");
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet: Pet) {
    console.log("Name: " + pet.name);
    console.log("Age: " + pet.age);
    console.log("Sound type: " + pet.speak());
}
let animal1: Pet = new Cat();
let animal2: Pet = new Dog();
printPetInfo(animal1);
printPetInfo(animal2);
console.log("");




//task5
console.log("Task 5");
interface VitaminInfo {
    VitaminType: Vitamins;       
    dosage: number;      
    sources: string[];   
}
const vitaminC: VitaminInfo = {
    VitaminType: Vitamins.C,
    dosage: 75,     
    sources: ["lime", "lemon", "broccoli"], 
};
const x: string = JSON.stringify(vitaminC);
console.log(x);

waitForDebugger();