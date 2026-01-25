

Types of Inheritance
===================
1. Single Inheritance
    A child class inherits from one parent class 
2. Multilevel Inheritance
    A class inherits from a class which itself inherits from another class
3. Hierarchical Inheritance 
    Multiple child classes inherit from the single parent class
4. Multiple Inheritance
     A subclass inherits members from two different super classes
        
    note:
       Direct Multiple inheritance is not supported in ts
       You can achieve this using interface.

super() statement
=================

   The super() statement is used to call the constructor of the parent class from the child class
   it is necessary when the parent class has a parameter constructor and the child class also has a constructor
   