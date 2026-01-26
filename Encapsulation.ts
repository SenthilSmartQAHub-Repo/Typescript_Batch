
// Hidding the data(variable) to the class and restricting direct access to variable
class BankAccount
{
   private _balance:number=0; 

   // Setter method=> Change value
   // Getter method=> Get the value
 set balance(value:number)
 {
    this._balance=value
 }
 get balance():number
 {
    return this._balance
 }

}
const b=new BankAccount();
b.balance=10 // setter method
console.log(b.balance) // getter method