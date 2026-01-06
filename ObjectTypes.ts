

//Object types---> Object, Arrays, Tuples and Enums 

let user:{tool:string;testCaseCount:number}={
    tool:"Playwright",
    testCaseCount:25
}

//emailID?-  optional property
let employee:{id:number;emailID?:string}={
    id:25
}


//Arrays 

let numbers:number[]=[2,4,6,3,2]

// mixed type

let values:(string|number|boolean)[]=[1,"selenium",true]
let values1:(any)[]=[1,"selenium",true]


//Tuples is an array with -> fixed number of elements
  //      -> fixed types in a specific order

  let userinfo:[number,string]=[23,'Selenium']


  //Enums 

     // used to define a set of constants

     enum Role{

        Admin,
        User,
        Manager,
        Guest
     }
   
     if(Role.Admin==0)
     {
       console.log("Admin Access granted")
     }

     enum status{
       
         Active="AC",
         INActive="IA",
         Pending="P"


     }
     if(status.Pending==="P")
     {
        console.log("file is being uploaded")
     }