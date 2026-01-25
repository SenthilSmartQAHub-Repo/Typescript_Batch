
//Defining mulitple method signatures with same method
//and one implemention
class Calculator
{
   add(a:number,b:number):number
   add(a:string,b:string,c:string):string
   add(a:any,b:any,c?:string):any
   {
      if(c)
      {
      return a+b+c
      }
      else
      {
         return a+b
      }
   }
}
const c=new Calculator()
console.log(c.add(10,20))
console.log(c.add("welcome","To","Playwright class"))