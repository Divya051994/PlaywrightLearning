const { reverse } = require("dns");

function reverseString(str) {

   let Char =  str.split("");
   let reverese="";

   console.log(Char.length)

   for (let i=Char.length-1;i>=0;i--)
   {
    reverese = reverese+Char[i]
    

   }

   console.log("Given String is : "+str);

   console.log("Reversed String is : "+reverese);  

   if (str==reverese)
   {
    console.log("The given string is a palindrome");
   }
   else
   {
    console.log("The given string is not a palindrome");
   }


}


//reverseString("hello");
reverseString("madam");
