

// Intersection Type (&) -> Combine mulitple types into one single type

//Types Alias-> used to create the custom name for a type
type e1={myName:string,role:string}
type s1={status:boolean}
let person:e1 & s1=
{
    myName:"kumar",
    role:"Developer",
    status:true
}


type A={i:number}
type B={j:string}

let Obj:A&B={
    i:10,
    j:"hello"
}
// Obj object contains all properties from Combined type A and B


