"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_Controller = /** @class */ (function () {
    function Animal_Controller() {
    }
    Animal_Controller.Run = function (animalList) {
        var theBestAnimal = animalList[0];
        for (var index = 0; index < animalList.length; index++) {
            var animal = animalList[index];
            if (animal.getSpeed() >= theBestAnimal.getSpeed()) {
                theBestAnimal = animal;
            }
        }
        return theBestAnimal;
    };
    return Animal_Controller;
}());
exports.default = Animal_Controller;
