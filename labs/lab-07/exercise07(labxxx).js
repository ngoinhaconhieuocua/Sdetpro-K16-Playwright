const readline = require('readline-sync');
let yourString = String(readline.question("in put your words  "));
console.log(yourString);
//define a array to store the object objword
const listWords = [];

//funcction to group the words

function groupWords(yourString) {
    let word = yourString.split(" ");
    const objWord = {
        name: word[0],
        count: 1
    }
    listWords.push(objWord);

    //count the number by words
    for (let i = 1; i < word.length; i++) {
        let countword = 0;
        //check the word is exist in the array
        for (let j = 0; j < listWords.length; j++) {

            if (word[i] == listWords[j].name) {
                listWords[j].count++;
                countword++;
            }
        }
        if (countword == 0) {

            let nextWord = JSON.parse(JSON.stringify(objWord));
            nextWord.name = word[i];
            nextWord.count = 1;
            listWords.push(nextWord);
            countword = 0;
        }

    }

}

function showWords() {
    for (let i = 0; i < listWords.length; i++) {
        console.log(listWords[i].name + " " + listWords[i].count);
    }
}
//call the funtion  
groupWords(yourString);
showWords();









