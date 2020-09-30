//Event application
/*Another customer has contacted us. He works for a secret company that rimes with foogle. 
The customer works on their calendar application. They need some functionality to help with writing what 
weekday an event is held.

You specify how many days from today an event is being held. The function then figures out what weekday the event is being held.
 Here is an example:

Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.

// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"
You should get the today's day from the system.

Hint: use remainder operator, array indexes and investigate new Date in js.*/
"use strict";
let dayValue, eventday, day1, event1;

const daysInAWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function findWeekdayIndex(dayName) {
  dayName = dayName.trim().toLocaleLowerCase();

  return daysInAWeek.findIndex(
    (weekDay) => weekDay.toLocaleLowerCase().trim() === dayName
  );
}
function getEventWeekday() {
  day1 = document.getElementById("day").value;
  event1 = document.getElementById("event").value;

  function eventValue(event1) {
    return event1 % 7;
  }

  const indexForGivenDay = findWeekdayIndex(day1);
  if (indexForGivenDay === -1) {
    return;
  }

  eventday = findWeekdayIndex(day1) + eventValue(event1);
  const resultDay = daysInAWeek[eventday % 7];
  console.log("Event will be on "+resultDay);
}
