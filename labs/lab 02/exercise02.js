
// Exercise 2.1+2.3
const readline = require('readline-sync');
let yourHeight = Number(readline.question("in put your height(m): "));
let yourWeight = Number(readline.question("in put your Weight(kg): "));
//
if(yourHeight==0||yourWeight==0)
{
    console.log("You need input right number");
    return;
}
// underweight to get nomarl
let normalWweightUnder = (yourHeight**2 )* 18.5;
let normalWweight= (yourHeight**2 )* 24.9;


let BMI = yourWeight / (yourHeight ** 2)
if (BMI < 18.5) {
    console.log("Underweight");
    console.log("You need increase :" + (normalWweightUnder- yourWeight).toFixed(1)+ "kg");

} else {
    if (BMI <= 24.9)
        console.log("Normal weight");
    else
        if (BMI <= 29.9) {
            console.log("Overweight");
            console.log("You need decrease :" + (yourWeight - normalWweight).toFixed(1) + "kg");
        }


        else {
            console.log("Obesity");
            console.log("You need decrease :" +  (yourWeight - normalWweight).toFixed(1) + "kg");
        }


}


//exercices 2.2


let yourNumber = Number(readline.question("input a number: "));
if(yourNumber==0)
{
    console.log("Please input other number");
}else
if ((yourNumber % 2) == 1)
    console.log("You inputed an odd number");
else {
    console.log("You inputed an even number");
}



