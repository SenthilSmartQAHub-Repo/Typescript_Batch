
//Defining mulitple method signatures with same method
//and one implemention
class Calculator
{
   add(a:number,b:number):number
   add(a:string,b:string):string
    add(a:number,b:string):string
   add(a:any,b:any):any
   {
    return a+b
   }
}
const c1=new Calculator();
console.log(c1.add(10,20))
console.log(c1.add("javascript","playwright"))
console.log(c1.add(10,"playwright"))