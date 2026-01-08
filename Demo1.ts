

// Type inference and Type Annotation

// Type inference - Typescript automatically determines the type of a variable based on
// the value assigned to it

let automation="Playwright" // This automation variable already inferred as string type 

console.log(automation)

//automation=10;

let age=25; // number

//Type Annotation -> Explicitly specifying the type of a variable, parameter and return type of the function



type a=string;

let userName:a="Admin"
let userage:number=23
let isAdmin:boolean=true

function display(myName:number):number
{
   return myName
}
console.log(display(12))