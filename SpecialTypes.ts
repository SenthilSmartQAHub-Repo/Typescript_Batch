

// Special Types - Used for special situations like unknow data, empty values 
//or unreachable code

// 1. any - Any type used to store any type of values
// any is not type checking

let data:any=10
    data="hello"

    console.log(data.toUpperCase())
  
    // best avoided in large applications

//2 . unknown  - Similar to any but type safe

// Unknown is type checking
// prevents runtime errors

let value:unknown="hello"

if(typeof value==="string")
{
console.log(value.toUpperCase())
}

// 3. void - Used for functions that donot return anything

     function display():void
     {
       console.log("Welcome")
       //   return "welcome" -  Compile time error
     }
//4.  null - Represents an intentional empty value

    let data1:null=null

    console.log(data1)

//5 . undefined - Represents a variable that is declared but not assigned any value

   let data2:undefined;

   console.log(data2)

// 6. never - Represents a value that never occurs
  
// used When
       //1.  A function never returns and always throws an error

       function throwError():never
       {
        console.log("Something went wrong")
        throw new Error("this is error")

       }
       throwError()