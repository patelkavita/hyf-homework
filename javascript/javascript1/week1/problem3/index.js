//Housey pricey (A house price estimator)

/*Two of your friends are considering buying a house, but cannot figure out what
 the right price should be. Your friends know the width, the height and the depth of 
 the house and the garden size.Lets help them figure out if they paid too much:

 We have made our own formula for calculating the price of a house. 
 This formula is VERY simplified and not at all close to the real calculation 
 which can get quite complicated:

housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. 
The garden size is 100m2. The house costs 2.500.000. Your friend Julia is considering 
a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.

Figure out if Peter and Julia are paying too much or too little using Javascript
 and the formula specified above.*/
const p_houseWidth= 8, p_houseDepth= 10, p_houseHeight=10; // in meters
const p_gardenSize=100; //in meter square
const peterHouseCost=2500000; 
let genuine_housePrice= (p_houseWidth*p_houseHeight*p_houseDepth)*2.5*1000+(p_gardenSize*300); //according to given formula
console.log(" Genuine price of peter's house is Rs."+genuine_housePrice+" and peter paid Rs."+peterHouseCost+".");
if(peterHouseCost>genuine_housePrice){
        console.log(" Peter paid too much for house!");
} 
else{
        console.log(" Peter paid less than genuine price for his house!");
}
const j_houseWidth= 5, j_houseDepth=11, j_houseHeight=8; //in meters
const j_gardenSize= 70; //in meter square
const juliaHouseCost=1000000;
genuine_housePrice=(j_houseWidth*j_houseHeight*j_houseDepth)*2.5*1000+(j_gardenSize*300); //according to given formula.
console.log(" Genuine price of julia's house is Rs."+genuine_housePrice+" and julia paid Rs."+juliaHouseCost+".");
if(juliaHouseCost>genuine_housePrice){
        console.log(" Julia paid too much for the house!");
}
else{
        console.log(" Julia paid less than genuine price for her house!");
}






