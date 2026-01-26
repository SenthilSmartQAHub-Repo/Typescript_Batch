class Test1{
    add():void{
        console.log("Test1 class")
    }
}
class Test2 extends Test1{
      add():void{
        super.add()
        console.log("Test2 class")
        console.log("Test2 class")
    }
}
const t2=new Test2()
t2.add()


//super. this is keyword used to call parent class members
//super() this is stm used to call parent class constructor

