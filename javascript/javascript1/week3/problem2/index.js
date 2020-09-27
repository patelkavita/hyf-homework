/*Write a function where you speficy your speed in km/h and how far you have to go in km. 
The function has to return the time it will take to arrive at your destination.
 The time should be formatted like this: 3 hours and 34 minutes.

Hint: For formatting your best friend is Google!

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = notThisFunctionName(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes*/
function travelTime() {
  function travelInformation(distance, speed) {
    const timeTaken = parseInt(distance / speed);
    const minutes = parseInt(distance % speed);
    
    console.log(
      "Total time taken to cover " +
        distance +
        "km at the speed of " +
        speed +
        "km/hr is " +
        timeTaken +
        "hr " +
        minutes +
        "min."
    );
  }

  const distance = document.getElementById("distance").value;
  const speed = document.getElementById("speed").value;
  travelInformation(distance, speed);
}
