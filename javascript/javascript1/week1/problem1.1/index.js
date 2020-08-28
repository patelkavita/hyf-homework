//Age-ify (A future age calculator)

/*You are talking to a friend who suddently looks at you and asks: 
"How old will you be in 2045?" Hmm you remember the year you were born and try
 to do some calculation: Born in 1987 + 3 that's 1990. 90 - 40 is 50 + 5 thats 58. 
 I will be 58! Wow that was painful! Let's fix that by making some code that 
 automatically does this!

 Create two variables called yearOfBirth and yearFuture. Assign these your own age 
 and a future year. What type will these two variables be? Now calculate the age and 
 store that in a variable called age. Log out this string: "You will be 40 years old in 2027".
  With 40 being the result of the age variable and 2027 being the yearFuture variable.*/

let yearOfBirth = +prompt(" enter your birth year");
let yearFuture = +prompt(" enter future year ");
let age = yearFuture - yearOfBirth;

console.log(" You will be " + age + " years old in " + yearFuture);
