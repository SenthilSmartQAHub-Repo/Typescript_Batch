
class parent{
     display():void{
        console.log("display method")
     }
}
class child1 extends parent{}
class child2 extends parent{}

const c1=new child1()
c1.display()
const c2=new child2()
c2.display()