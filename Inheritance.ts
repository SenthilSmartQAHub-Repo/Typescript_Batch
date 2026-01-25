
// Inheritance 
    //Inheriting the members from one class to another class
    // To create an inheritance relationship we use the extends keyword

class Test1
{
    //parent class(super class or base class)
  t1:number=10 //Non-static variable
}
class Test2 extends Test1
{
    //child class(sub class or Derived class)
  t2:number=20 // Non-static variable
}
const test1=new Test1()
console.log(test1.t1)
const test2=new Test2()
console.log(test2.t1)
console.log(test2.t2)