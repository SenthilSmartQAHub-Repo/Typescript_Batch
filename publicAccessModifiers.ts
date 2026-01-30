

// Access modifiers in typescript

    // Control who can access class properties and functions

    // public, protected , private

    //public access modifier
    //public - can be accessed anywhere(inside class, outside class, child class)
    // if you dont write any modifier, it is public by default
    class Employee
    {
        //public  empNo:string="TCS001"
         empNo:string="TCS001"

         public show()
         {
            console.log(this.empNo)
         }

    }
    const emp=new Employee()
    console.log(emp.empNo)
    emp.show()