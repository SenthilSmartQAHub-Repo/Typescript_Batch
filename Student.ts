
class Student
{
    myName:string='Arun'
    age:number=20
  
    //this keyword-  refers the current object
display():void{

    console.log(`Myname is ${this.myName} and age is ${this.age}`)
 
    }
}

//let s1;
let s1=new Student() // Object or instance creation

s1.display()

 