
class BankAccount
{
    accountNumber:number ;//non-static
    constructor(accountNumber:number)
    {
        this.accountNumber=accountNumber;
    }
    
}
class SavingAccount extends BankAccount
{
    constructor()
    {
        super(12354343)
    }
}
const s1=new SavingAccount()