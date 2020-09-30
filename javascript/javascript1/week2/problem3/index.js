/*Weather wear
Create a function (that you have to name) that has temperature as parameter. 
Based on the temperature it should return a string with what the user should wear.
 You decide what the user should wear based on the temperature.

An example is:

const clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt" */
function getTemperature() {
  function clothesToWear(temperature) {
    if (temperature > 25) { //in degree celcius
      return "Shorts and T-shirt";
    } 
    else {
      return "Sweater";
    }
  }
  const temperature = document.getElementById("temp").value;
  console.log("You should wear " + clothesToWear(temperature));
}
