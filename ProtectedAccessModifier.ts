

// Protected Access Modifiers

//  Can be accessed inside class and child class
//  Not accessible outside the class 

class Person{
     protected age:number=25
}
class Student extends Person
{
     showAge()
     {
        console.log(this.age)
     }
}

const s1=new Student()
s1.showAge()