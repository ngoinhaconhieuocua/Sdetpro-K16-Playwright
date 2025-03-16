import Animal from "./Animal";


export default class Animal_Controller {

    static Run(animalList: Animal[]): Animal {
        let theBestAnimal: Animal = animalList[0];
        for (let index = 0; index < animalList.length; index++) {
            const animal: Animal = animalList[index];
            if (animal.getSpeed() >= theBestAnimal.getSpeed()) {
                theBestAnimal = animal;
            }

        }

        return theBestAnimal;


    }



}