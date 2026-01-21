

class Student1
{
    static stuRollNo:number=0;
    subject:string=""
}

console.log(Student1.stuRollNo)//static variable

const stu1=new Student1();
stu1.subject="GK"
console.log(stu1.subject)

const stu2=new Student1();
stu2.subject="maths"
console.log(stu2.subject)

Student1.stuRollNo=101
Student1.stuRollNo=123
console.log(Student1.stuRollNo)