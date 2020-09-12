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
'use strict';
let dayValue, eventday,day1,event1;

function getEventWeekday() {

        function temp1(days) {
                
                if (days == "sunday") {
                  return (dayValue = 0);
                } else if (days == "tuesday") {
                  return (dayValue = 2);
                } else if (days == "wednesday") {
                  return (dayValue = 3);
                } else if (days == "thursday") {
                  return (dayValue = 4);
                } else if (days == "friday") {
                  return (dayValue = 5);
                } else if (days == "saturday") {
                  return (dayValue = 6);
                } else if (days == "monday") {
                  return (dayValue = 1);
                } else {
                  return " please enter proper day";
                }
            
              }
   day1 = document.getElementById("day").value;  //user input
  event1=document.getElementById("event").value;  //user input
  
function eventValue(event1){  
        return event1%7;
}

  eventday= temp1(day1)+eventValue(event1);  //returns numeric value of both functions
  const x= eventday%7;
switch(x){
        
        case 1: console.log("Event happend on Monday"); break;
        case 2: console.log(" Event Happend on Tuesday"); break;
        case 3: console.log(" Event Happend on Wednesday"); break;
        case 4: console.log(" Event Happend on Thursday"); break;
        case 5: console.log(" Event Happend on Friday"); break;
        case 6: console.log(" Event Happend on Saturday"); break;
        case 0: console.log(" Event Happend on Sunday"); break;
        default: console.log(" please enter proper value");
}  
}
