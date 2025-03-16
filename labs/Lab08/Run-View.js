"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_Controller_1 = require("./Animal_Controller");
var Dog_1 = require("./Dog");
var Tiger_1 = require("./Tiger");
var Horse_1 = require("./Horse");
var dog = new Dog_1.default(Math.floor(Math.random() * 100) + 1);
console.log("The dog is created with speed is :" + dog.getSpeed());
var horse = new Horse_1.default(Math.floor(Math.random() * 100) + 1);
console.log("The Horse is created with speed is :" + horse.getSpeed());
var tiger = new Tiger_1.default(Math.floor(Math.random() * 100) + 1);
console.log("The Tiger is created with speed is :" + tiger.getSpeed());
var animal = Animal_Controller_1.default.Run([dog, horse, tiger]);
console.log("Con vật chạy nhanh nhất là " + animal.getName());
