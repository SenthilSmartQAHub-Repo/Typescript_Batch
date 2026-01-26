
class Animal
{
    sound():void{
        console.log("Animal makes a sound")
    }
}
class Dog extends Animal
{
 sound():void{
        console.log("Dog barks")
    }
}
class Cat extends Animal
{
    sound():void{
        console.log("Cat Meows")
    }
}

let a:Animal;

a=new Dog();//Upcasting(Creating object for subclass and store the object to super class reference variable)

// let a:Animal=new Dog()

a.sound(); // Dog class

a=new Cat();

a.sound(); //Cat class



