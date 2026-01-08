
// Function types
     // Type of parameters 
     // Type of value the function returns
function add(a:number,b:number):number
{
    return a+b
}

add(10,20)

//function add -  Declares a function named add
//a:number  -  First parameter is a number
//b:number - Second parameter is a number
//:number -> function must return a number

// Arrow function

  const addValue=(a:number,b:number):number=>a+b

  console.log(addValue)


  //b?:number  - optional parameter-  user may or maynot pass the value to function

  // a is Mandatory parameter
  // b is optional parameter
  //d:number=10--> Default parameter
function display(a:number,c:number,b?:number,d:number=10):void
{
   
    console.log(a,c,b,d)
}

display(10,20,30,40)

