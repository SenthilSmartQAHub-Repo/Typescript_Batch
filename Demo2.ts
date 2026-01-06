
//Type Assertion works only at Compile time and doesnot change runtime data

// The value is actually a string
// Typescript treat it as unknow
// Operations are not allowed
let value:unknown="Typescript";

//console.log(value.length)

// Typescript doesnot allowed any operations on a value type unknow util the type either
  //  1. Type checking -  typeof
   
  
  // 2. Type Assertion -   as  or <>

  // used as keyword
   let v1= value as string

   console.log(v1.length)

//  Angle Bracket <>

let automation:unknown="Playwright"

  let a1=<string>automation

  console.log(a1.toUpperCase())

  // Double Assertion

  let num:number=40;

  let str=num as unknown as string

  console.log(typeof str)

  // Runtime value is still number only
   