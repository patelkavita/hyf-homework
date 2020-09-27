/*Create a function called addCandy. It has two parameters:

candyType - specifies the candy type. Could be 'sweet, chocolate, toffee or chewing-gum'
weight - specifies the weigth of the candy in grams
The function should add the price of the candy to an array called boughtCandyPrices using push

Here is an example of the usage:

addCandy('sweet', 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices
Candy table prices

Candy type	Price per gram
Sweet	0.5
Chocolate	0.7
Toffee	1.1
Chewing-gum	0.03
Can i buy more?
Now create a variable called amountToSpend and assign it to Math.random() * 100. 

Create a new function called canBuyMoreCandy. This function returns a boolean 
indicating if the user can buy more candy using the boughtCandy array.

Try use the function by adding some pieces of candy and checking if you can buy more. 
If the user can buy more candy the console.log the following: "You can buy more, so please do!"
. If the user cant buy more console.log the following: "Enough candy for you!"

Hint: Use a for loop to calculate the total price of the candy pieces.

Optional Use a while loop instead of a for loop.*/

"use strict";
const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  if (candyType === "sweet") {
    boughtCandyPrices.push(0.5 * weight);
  } else if (candyType === "toffee") {
    boughtCandyPrices.push(1.1 * weight);
  } else if (candyType === "chocolate") {
    boughtCandyPrices.push(0.7 * weight);
  } else if (candyType === "chewing-gum") {
    boughtCandyPrices.push(0.03 * weight);
  }
}

addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("toffee", 40);
addCandy("chewing-gum", 20);
console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy(amount) {
  let totalAmount = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalAmount += boughtCandyPrices[i];
  }

  if (totalAmount < amount) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}
canBuyMoreCandy(amountToSpend);
console.log("Spending amount is:" + amountToSpend);
