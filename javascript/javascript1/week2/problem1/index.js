//Flight booking fullname function
/*Even for a startup as successful as Smart-ease there needs to be money in the bank. 
A customer from a flight booking website has asked for our help creating a specific part 
of their application: When a user books a flight they write their firstname and surname, 
but when the ticket is printed a fullname should be displayed. 
It is our responsibility to create that.

Create a function called getFullname that returns a fullname. 
It should have two parameters: firstname and surname.

getFullname('Benjamin', 'Hughes'); // returns "Benjamin Hughes"
Now try to create two variables fullname1 and fullname2 these two variables should be
 assigned to the return of calling the getFullname function.

Log out the two fullnames.

Formal fullname
On the flight website the user has the possibility to check a checkbox that indicates if the user
 wants to be adressed formally. Lets also change getFullname to include support for formal name.

Create an extra parameter useFormalName that is a boolean. If it is true the function should
 add a Lord in front of the name.

getFullname('Benjamin', 'Hughes', true); // returns "Lord Benjamin Hughes"`
getFullname('Benjamin', 'Hughes', false); // returns "Benjamin Hughes"
What do we do if useFormalName is not given as an argument?

Remember to consider someone calling the function with an empty string as firstname and lastname.*/

function fullName() {
  function getFullname(firstname,surname,useFormalName)
  {
    if(useFormalName==true){
  return "lord "+firstname+" "+surname;
  }
  else{
    return firstname+" "+surname;
  }
}
let fullname1 = document.getElementById("name").value;
let fullname2 = document.getElementById("Sname").value;
let useFormalName= document.getElementById("check").checked;
console.log(getFullname(fullname1,fullname2,useFormalName));
}