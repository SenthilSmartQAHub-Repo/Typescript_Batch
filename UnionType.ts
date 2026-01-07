
//Union type allows a variable or parameter to hold one of mulitple possible type
// OR | 

//1. Variable with union type

let empid:number | string 

empid=101;  // valid(number)
empid="abc01" // valid(string)

// note: Here typescript will not allow the other types like boolean or object

//2. Function with Union type parameter

function display(empid:number | string)
{
    console.log(empid)
}
display(101)
// this function accepts either number or string
// void means the function does not return any value