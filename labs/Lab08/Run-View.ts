import Animal from "./Animal";
import Animal_Controller from "./Animal_Controller";
import Dog from "./Dog";
import Tiger from "./Tiger";
import Horse from "./Horse";


const dog = new Dog(Math.floor(Math.random() * 100) + 1);
console.log("The dog is created with speed is :" + dog.getSpeed());

let horse = new Horse(Math.floor(Math.random() * 100) + 1);
console.log("The Horse is created with speed is :" + horse.getSpeed());

let tiger = new Tiger(Math.floor(Math.random() * 100) + 1);
console.log("The Tiger is created with speed is :" + tiger.getSpeed());

const animal: Animal = Animal_Controller.Run([dog, horse, tiger]);
console.log("Con vật chạy nhanh nhất là " + animal.getName());

