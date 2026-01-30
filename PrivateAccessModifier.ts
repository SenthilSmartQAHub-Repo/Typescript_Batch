
// Private Access Modifier
   // Can be accessed only inside the same class
   // Can't be accessed in child  or outside class

   class BankAccount
   {
    private balance:number=100
    getBalance()
    {
        return this.balance
    }
   }

   const ba=new BankAccount()
   console.log(ba.getBalance())