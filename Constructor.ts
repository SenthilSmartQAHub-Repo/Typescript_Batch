
class Student
{
   readonly myName:string
    age:number
 constructor(myName:string,age:number)
    {
        this.myName=myName
        this.age=age
    }
}
const stu1=new Student("Arun",25)
console.log(stu1.myName,stu1.age)
const stu2=new Student("kumar",20)
console.log(stu2.myName,stu2.age)


class Number1
{
    constructor(...rest:any)
    {
      console.log(rest)
    }
}
const n1=new Number1(10)
const n2=new Number1(10,23)
const n3=new Number1(10,23,"Welcome")